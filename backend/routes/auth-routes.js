const router = require('express').Router();
const passport = require('passport');

// auth login
// router.get('/login', (req, res) => {
//     res.render('login', { user: req.user });
// });

router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
}));

router.get('/facebook/redirect', passport.authenticate("facebook", {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: "http://localhost:3000/register"
  }));


router.get('/logout', (req, res)=>{
    if (req.user) {
        req.logout();
    };
    req.session.destroy((err) => {
        if (err) {
            res.json({
                success: false,
                message: err.message
            })
        } else {
            res.json({success: true});
        }
    });
})

// auth logout
router.get('/google/logout', (req, res) => {
    req.logout();
    // res.redirect('/');k
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));


// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate("google", {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: "http://localhost:3000/register"
  }));

router.get('/google/user', (req, res) => {
    if (req.user) {
        console.log('req.user: ');
        res.send(req.user);
      }
})

module.exports = router;
