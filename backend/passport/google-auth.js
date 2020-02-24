const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

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
        // console.log(profile);
        
        var newUser = {
            "googleId": profile.id,
            "username": profile.displayName
        };
        done(null, newUser);
    })
);
