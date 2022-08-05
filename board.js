const mongoose = require('mongoose')
const joi = require('joi');
const boardSchema = new mongoose.Schema({
    // "name":"",
    // "board":"",
    // "img":"",
    // "quote":"",
    // "areaOfInterest":"",
    // "email":"",
    // "linkedin":"",
    // "insta":""
    name:{
        type:String,
        required:true,
    },
    board:{
        type:String,
        required:true,
    },
    img:{
        type:Object,
        required:true
    },
    quote:{
        type:String,
        required:true
    },
    areaOfInterest:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    linkedin:{
        type:String,
        required:true
    },
    insta:{
        type:String
    }

})

function validateUser(user){
const schema = joi.object({
    name:joi.string().min(3).max(30).trim().alphanum(),
    board:joi.string().required(),
    img:joi.string().required(),
    quote:joi.string().required().max(100),
    areaOfInterest:joi.string().required(),
    email:joi.email().required(),
    linkedin:joi.link()
})
joi.validate(schema);
}

const user = mongoose.model('board',boardSchema);
module.exports = {user,validateUser}
