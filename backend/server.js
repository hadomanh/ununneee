const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
var Schema = mongoose.Schema;

require('dotenv').config();


const passportSetup = require('./passport/google-auth');
const authRoutes = require('./routes/auth-routes');
const userModel = require('./user/user.schema');


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
        // set up cors to allow us to accept requests from our client
        server.use(cors({
                origin: "http://localhost:3000", // allow to server to accept request from different origin
                methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
                credentials: true // allow session cookie from browser to pass through
            })
        );


        // server.use(function (req, res, next) {

        //     // Website you wish to allow to connect
        //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        //     // Request methods you wish to allow
        //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        //     // Request headers you wish to allow
        //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        //     // Set to true if you need the website to include cookies in the requests sent
        //     // to the API (e.g. in case you use sessions)
        //     res.setHeader('Access-Control-Allow-Credentials', true);

        //     // Pass to next layer of middleware
        //     next();
        // });

        server.use(bodyParser.json());

        // set up session cookies
        server.use(session({
            secret: 'keyboard cat',
            resave: true,
            saveUninitialized: false,
        }));

        // initialize passport
        server.use(passport.initialize());
        server.use(passport.session());

        // set up auth route
        server.use('/auth', authRoutes);

        server.get('/users', (req, res) => {
            userModel.find({}, (err, data) => {
                res.send(data)
            })
        })

        server.post('/users', (req, res) => {
            console.log("new user: ", req.body.email);
            const email = req.body.email;
            const pass = req.body.password;
            const name = req.body.name;
            userModel.find({ email: req.body.email }, (err, data) => {
                if (data.length > 0) {
                    console.log("email exist");
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
                        name: name
                    })

                    res.status(201).json({
                        success: true,
                        message: "Account " + email + " has been created"
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