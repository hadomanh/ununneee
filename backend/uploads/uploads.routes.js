const express=require('express');
const uploadsRouter=express.Router();
const multer=require('multer');
const fs=require('fs');
const multerStorage=multer({
    dest: 'public/',
    //file Filter,limit la de validate file ( duoi file , size...)
    // fileFilter:(req,file,cb)=>{
    //     console.log(file);
    // }
    // limit: {},
    preservePath: true,
});
//image la ten cua file do trong req.body
uploadsRouter.post('/photos',multerStorage.single('image'), async (req,res)=>{
    console.log(req.file);
    //rename
    const fileExt=req.file.originalname.split('.');
    const ext=fileExt[fileExt.length-1];
    fs.renameSync(req.file.path,`${req.file.path}.${ext}`);
    res.status(200).json({
        success:true,
        data:`${req.file.filename}.${ext}`
    })

    //return url



})


module.exports=uploadsRouter;