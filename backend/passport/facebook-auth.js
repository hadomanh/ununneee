const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();
const UserModel=require('../user/user.schema');
const bcryptjs = require('bcryptjs');

module.exports = function(passport){
passport.serializeUser((user, done) => {
    console.log("inside serializeUser()", user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log("inside deserializeUser()", user);
    done(null, user);
});

passport.use(
    new FacebookStrategy({
        // options for facebook strategy
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/auth/facebook/redirect',
        profileFields: ['email'],
    }, (accessToken, refreshToken, profile, done) => {
        console.log('profile facebook',profile);
        
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
                    password: bcryptjs.hashSync(profile.emails[0].value, 3)
                }).save().then((newUser)=>{
                    console.log('new User:',newUser);
                    done(null,newUser);
                })
                
            }
        })
    })
);
}