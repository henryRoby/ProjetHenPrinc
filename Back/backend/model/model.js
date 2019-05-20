const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nom: String,
    email: String,
    passeWord: Number,
    photo_profile :String,
    
}, {
    timestamps: true
});


module.exports = mongoose.model('profile',ProfileSchema);