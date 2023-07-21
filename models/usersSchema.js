const mongoose = require('mongoose');
const validator = require('validator');


const userSchema =new mongoose.Schema({
    dateCreated:{type:Date},
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        Validate(value){
            if (!validator.isEmail(value)) {
                throw Error("not Valid")
                
            }
        }
    },
    age:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        require:false
    },
    desc:{
        type:String,
        require:false
    },
    mobile:{
        type:Number,
        require:true,
        unique:true,
        minlength:true,
        maxlength:true
    },
    dateUpdated:{
        type:Date}
});

const users=new mongoose.model("users",userSchema);

module.exports=users;