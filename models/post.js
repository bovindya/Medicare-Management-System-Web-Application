const mongoose= require('mongoose');

const postSchema = new mongoose.Schema({

    PatientName:{
        type:String,
        required:true
    },

    Age:{
        type:Number,
        required:true
    },

    Gender:{
        type:String,
        required:true
    },

    nic:{
        type:String,
        required:true
    },

    Address:{
        type:String,
        required:true
    },

    Mobile:{
        type:Number,
        required:true
    }


});

module.exports = mongoose.model('patient',postSchema);