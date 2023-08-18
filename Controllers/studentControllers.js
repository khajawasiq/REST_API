const students = require("../models/studentsSchema");
const moment = require("moment");

// create students
exports.studentpost = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, dateOfBirth } = req.body;

  if (!firstName || !lastName || !email) {
    res.status(400).json({ error: "All input is req" });
  }
  try {
    const studentExist = await students.findOne({ email });
    if (studentExist) {
      res.status(400).json({ error: "This user already exist in db " });
    } else {
      const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

      const studentData = new students({
        firstName,
        lastName,
        email,
        dateOfBirth,
        dateCreated: dateCreate,
      });
      await studentData.save();
      res.status(200).json(studentData);
    }
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error  ");
  }
};

// get all students 
 exports.getStudents= async (req ,res)=>{
  try {
    const studentsData = await students.find();
    res.status(200).json(studentsData);
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error  ");
  }
 }

 // get single  student 

 exports.getSingleStudent=async(req,res)=>{
  const { id } = req.params;
  try {
    const singleStudentData= await students.findOne({_id:id});
    res.status(200).json(singleStudentData);
    
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error  ");
  }

 }