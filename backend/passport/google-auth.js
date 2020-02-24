const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const UserModel=require('../user/user.schema');
const bcryptjs = require('bcryptjs');


passport.serializeUser((user, done) => {
    console.log("inside serializeUser()", user);

    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log("inside deserializeUser()", user);
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        
        UserModel.findOne({
            email:profile.emails[0].value
        }).then((user)=>{
            if(user){
                console.log('user ne',user);
                done(null,user);
            }
            else {
                new UserModel({
                    email:profile.emails[0].value,
                    name:profile.displayName,
                    password: bcryptjs.hashSync(profile.photos[0].value, 3)
                }).save().then((newUser)=>{
                    console.log('new User:',newUser);
                    done(null,newUser);
                })
                
            }
        })
    })
);
