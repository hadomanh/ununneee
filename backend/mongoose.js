require('dotenv').config();

const mongoose = require('mongoose');

var connection = async () => {
    var connection = await mongoose.connect('mongodb://' + process.env.USER + ':'+ process.env.PASS + '@localhost:27017/' + process.env.DATABASE +'?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true})

    return connection;
}

connection().then(()=>{
    console.log("Connecting to MongoDB...");
    
})

