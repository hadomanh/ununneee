const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();
const userModel = require('./user/user.schema');
var Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');
// connect to mongodb
mongoose.connect('mongodb://' + process.env.USER + ':' + process.env.PASS + '@localhost:27017/' + process.env.DATABASE + '?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true }, (e) => {
    //FIXME: tim cach viet khac
    if (e)
        throw e;
    else {
        console.log("MongoDB Connected...");

        // basic init
        const server = express();

        server.use(express.static('public'));
        server.use(cors({
            origin: ['http://localhost:3000'],
            credentials: true
        }));


        server.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);

            // Pass to next layer of middleware
            next();
        });

        server.use(bodyParser.json());
        server.use(session({
            secret: 'keyboard cat',
            resave: true,
            saveUninitialized: false,
        }));

        server.get('/users', (req, res) => {
            userModel.find({}, (err, data) => {
                console.log(data);
                res.send(data)
            })
        })

        server.put('/users', (req, res) => {
            const email = req.body.email;
            const pass = req.body.password;
            userModel.findOne({ email: email }, (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        success: false,
                        message: error.message
                    });
                }
                else {
                    if (data !== null) {
                        if (!bcryptjs.compareSync(pass, data.password)
                        ) {
                            res.status(400).json({
                                success: false,
                                message: "Wrong Password"
                            })
                        }
                        else {
                            req.session.currentUser = {
                                email: data.email,
                            };
                            console.log(req.session);
                            res.status(200).json({
                                success: true,
                                message: "Login Success",
                                data: {
                                    email: data.email,
                                    name: data.name
                                }
                            })
                        }
                    }
                    else {
                        res.status(404).json({
                            success: false,
                            message: "Email doesn't exist"
                        })
                    }
                }

            })
        })



        server.post('/users', (req, res) => {
            const email = req.body.email;
            const pass = req.body.password;
            const name = req.body.name;
            userModel.findOne({ email: req.body.email }, (err, data) => {
                if (data !== null) {
                    res.status(400).json({
                        success: false,
                        message: "Email has been used"
                    });
                }
                else {
                    const hashPassword = bcryptjs.hashSync(pass, 10);

                    userModel.create({
                        email: email,
                        password: hashPassword,
                        name: name,
                    });
                    req.session.currentUser = {
                        email: req.body.email,
                    };
                    res.status(201).json({
                        success: true,
                        message: "Account " + email + " has been created",
                        data: {
                            name: req.body.name,
                            email: req.body.email,
                        }
                    });
                }
            })
        })

        server.listen(process.env.PORT || 5000, (err) => {
            if (err)
                throw err;
            else
                console.log("Server listen on port 5000...");
        });
    }
})