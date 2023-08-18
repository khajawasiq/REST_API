const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    dateCreated:{type:Date},
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: String,
  email: {
    type: String,
    required: true,
    unique:true,
    Validate(value){
        if (!validator.isEmail(value)) {
            throw Error("not Valid")
            
        }
    }
  },
  // address: {
  //   street: String,
  //   city: String,
  //   state: String,
  //   zipCode: String
  // },
  // courses: [
  //   {
  //     id: String,
  //     name: String,
  //     teacher: String
  //   }
  // ],
  // dateUpdated:{
  //   type:Date}
});

const students = mongoose.model('students', studentSchema);

module.exports = students;
