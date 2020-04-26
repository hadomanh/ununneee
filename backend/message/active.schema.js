const mongoose = require('mongoose');

const ActiveSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    socketId:{
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: new Date(),
    },
});

const ActiveModel = mongoose.model("Active", ActiveSchema);
module.exports = ActiveModel;