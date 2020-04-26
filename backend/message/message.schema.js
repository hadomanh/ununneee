const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    senderEmail:{
        type: String,
        required: true
    },
    receiverEmail:{
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: new Date(),
    },
    content: {
        type: String,
        required: true
    }
});

const MessageModel = mongoose.model("Messages", MessageSchema);
module.exports = MessageModel;