const route = require('express').Router();
const userModel = require('./user.schema');
const bcryptjs = require('bcryptjs');
const joi = require('@hapi/joi');
const pageSize = 3;
route.get('/', (req, res) => {
    
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
                    console.log('id', data.id);
                    console.log(req.session);
                    res.status(200).json({
                        success: true,
                        message: "Login Success",
                        data: {
                            email: data.email,
                            name: data.name,
                            id: data.id,
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
    var email = '';
    if (req.session.currentUser) {
        email = req.session.currentUser.email;
        userModel.findOne({ email: req.session.currentUser.email }, (err, data) => {
            id = data.id;
            userModel.findByIdAndUpdate(id, { avaUrl: req.body.imageUrl }, function (err, data) {
                console.log('findbyidandupadet', data);
            })
        })
        res.status(200).json({
            success: true,
        })
    }
    else if (req.session.passport) {
        userModel.findOne({ email: req.user.email }, (err, data) => {

            id = data.id;
            console.log(id);
            userModel.findByIdAndUpdate(id, { avaUrl: req.body.imageUrl }, function (err, data) {
                console.log('findbyidandupadet', data);
            })
        })
        email = req.user.email;
        res.status(200).json({
            success: true,
        })
    }
    else {
        res.status(403).json({
            success: false,
            message: 'please login',
        })
    }

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


route.get('/pagination', async (req, res) => {
    try {
        const pageNumber = Number(req.query.pageNumber);

        const validateSchema = joi.object().keys({
            pageNumber: joi.number().min(1),
            pageSize: joi.number().min(1).max(50),
        });
        const validateResult = validateSchema.validate({
            pageNumber: pageNumber,
            pageSize: pageSize,
        });
        if (validateResult.error) {
            const error = validateResult.error.details[0];
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else {
            const result = await userModel.find({})
                // .sort({ createdAt: -1 })
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();

            const total = await userModel.find({}).countDocuments();

            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });

        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
});



module.exports = route;


// get /user/:id -- lay 1 thang
// get /user -- lay het 
// post /user --- them moi
// put /user -- update === admin
// {email: name:}
// === user.update({email: "tanhng"}, ()=>{

// }
// delete /user