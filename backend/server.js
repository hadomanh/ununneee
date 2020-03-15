const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('./passport/facebook-auth')(passport);
require('dotenv').config();

// basic init
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const uploadsRouter=require('./uploads/uploads.routes');
const passportSetup = require('./passport/google-auth');
const authRoutes = require('./routes/auth-routes');
const userRoutes = require('./user/user.routes')


// connect to mongodb
// phai co useFindAndModify thi moi dung findoneandupdate dc
mongoose.connect('mongodb://' + process.env.USER + ':' + process.env.PASS + '@localhost:27017/' + process.env.DATABASE + '?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false }, (e) => {
    //FIXME: tim cach viet khac
    if (e)
        throw e;
    else {
        console.log("MongoDB Connected...");

        app.use(express.static('public'));
        // set up cors to allow us to accept requests from our client
        app.use(cors({
            origin: "http://localhost:3000", // allow to app to accept request from different origin
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            credentials: true // allow session cookie from browser to pass through
        })
        );

        app.use(bodyParser.json());

        // set up session cookies
        app.use(session({
            secret: 'keyboard cat',
            resave: true,
            saveUninitialized: false,
            // cookie: { secure: true }
        }));

        // initialize passport
        app.use(passport.initialize());
        app.use(passport.session());

        // set up route
        app.use('/auth', authRoutes);
        app.use('/users', userRoutes);
        app.use('/uploads',uploadsRouter);
        
        app.get("/test", (req, res) => {
            console.log('day nhe',req.session);
            res.status(500).json({
                success: true,
            });
        })
        server.listen(process.env.PORT || 5000, (err) => {
            if (err)
                throw err;
            else {
                console.log("app listening on port 5000...");
                console.log('hadm x tanhng...');
                console.log('ununneee here we come');
            }
        });

        io.on('connection', socket => {
            socket.removeAllListeners();
            console.log("New client ", socket.id);
            io.to(socket.id).emit('join', socket.id);

            socket.on('typing', name => {
                socket.broadcast.emit('typing', name);
            });

            socket.on('send', data => {
                socket.broadcast.emit('message', data);
            });

            socket.on('disconnect', () => console.log("Client off", socket.id));

        });

    }
})