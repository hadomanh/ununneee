const route = require('express').Router();
const userModel = require('./user.schema');
const bcryptjs = require('bcryptjs');
route.get('/', (req, res) => {
    console.log('session ne', req.session);
})


route.get('/get-fighter-by-id', (req, res) => {
    console.log('fightId ne', req.query.fighterId);
})



route.post('/verify', (req, res) => {
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
                    console.log('id',data.id);
                    console.log(req.session);
                    res.status(200).json({
                        success: true,
                        message: "Login Success",
                        data: {
                            email: data.email,
                            name: data.name,
                            id:data.id,
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


route.post('/uploadAva', (req, res) => {
    console.log('upload avatar req.session', req.session);
    console.log('req.body upload avatar', req.body);
    var email='';
    if (req.session.currentUser) {
        console.log('loggin bang local');
        email=req.session.currentUser.email;
        // const doc1=userModel.findOneAndUpdate({email:req.session.currentUser.email},{
        //     avaUrl:req.body.imageUrl
        // })
        // console.log('check',doc1);
        console.log('imageurlllll',req.body.imageUrl);
        // userModel.update({email:req.session.currentUser.email},{$set: { "avaUrl" : req.body.imageUrl}});
        userModel.findOne({email:req.session.currentUser.email},(err,data)=>{
            console.log('user find',data);
            id=data.id;
            console.log(id);
            userModel.findByIdAndUpdate(id,{avaUrl:req.body.imageUrl},function(err,data){
                console.log('findbyidandupadet',data);
            })
        })
        res.status(200).json({
            success: true,
        })
    }
    else if (req.session.passport) {
            console.log('loggin bang fb gg', req.user.email);
        //    const doc2= userModel.findOneAndUpdate({email:req.user.email},{
        //         avaUrl:req.body.imageUrl
        //     })
        //     console.log('check2',doc2)
        userModel.findOne({email:req.user.email},(err,data)=>{
            console.log('user find',data);
            id=data.id;
            console.log(id);
            userModel.findByIdAndUpdate(id,{avaUrl:req.body.imageUrl},function(err,data){
                console.log('findbyidandupadet',data);
            })
        })

        // userModel.update({email:req.user.email},{$set: { avaUrl : req.body.imageUrl}});
        console.log('imageurlllll',req.body.imageUrl);
           email=req.user.email;
           res.status(200).json({
            success: true,
        })
        }
        else {
            res.status(403).json({
                success:false,
                message: 'please login',
            })
    }
    console.log('email user upload avatar',email);
    


})



route.post('/', (req, res) => {
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

module.exports = route;


// get /user/:id -- lay 1 thang
// get /user -- lay het 
// post /user --- them moi
// put /user -- update === admin
// {email: name:}
// === user.update({email: "tanhng"}, ()=>{

// }
// delete /user