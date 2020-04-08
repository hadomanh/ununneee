const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        require:true,
    },
    name: {
        type:String,
        require:true,
    },
    password: {
        type:String,
        require:true,
    },
    address1: String,
    address2: String,
    bio: String,
    phone:String,
    gender:Number,
    pic: Array,
    avaUrl:{
        type:String,
        require:true,
        default:'',
    },
    role: {
        type:String,
        require:true,
    },
    wallet: {
        type: Number,
        default:0,
    },
    follower:{
        type:Array
    },
    followee:{
        type: Array
    },
    createdTime:{
        type: Date,
        default: new Date(),
    }
});

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;