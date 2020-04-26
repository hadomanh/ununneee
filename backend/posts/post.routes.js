const route = require('express').Router();
const postModel = require('./post.schema');
const bcryptjs = require('bcryptjs');
const joi = require('@hapi/joi');

route.post('/create-post', async (req, res) => {
    // check login
    if (!req.session.currentUser || !req.session.currentUser.email) {
        res.status(403).json({
            success: false,
            message: 'Forbidden',
        });
    } else {
      // validate
      const postValidateSchema = joi.object().keys({
          imageUrl: joi.string().required(),
          content: joi.string().required(),
      });
      const validateResult = postValidateSchema.validate(req.body);
      if (validateResult.error) {
        const error = validateResult.error.details[0];
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
      } else {
        try {
          // create new post
            if(req.session.currentUser){
                console.log('session post upload',req.session);
                console.log('id post upload ne',req.session.currentUser.id);
                const newpost = await postModel.create({
                    imageUrl: req.body.imageUrl,
                    content: req.body.content,
                    author: req.session.currentUser.id,
                  });
                  res.status(201).json({
                    success: true,
                    data: newpost,
                  });
            } 
            else if(req.user){
                console.log('id post upload ne',req.user.id);
                const newpost = await postModel.create({
                    imageUrl: req.body.imageUrl,
                    content: req.body.content,
                    author: req.user.id,
                  });
                  res.status(201).json({
                    success: true,
                    data: newpost,
                  });
            }
        } catch (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          })
  
        }
  
      }
  
    }
  
  });

  module.exports=route;