const users = require("../models/usersSchema");
const moment = require("moment");

// create user
exports.userpost = async (req, res) => {
  console.log(req.body);
  const { name, email, mobile, age, work, desc } = req.body;
  if (!name || !email || !mobile || !age) {
    res.status(400).json({ error: "All input is req" });
  }
  try {
    const preuser = await users.findOne({ email: email });
    if (preuser) {
      res.status(400).json({ error: "This user already exist in db " });
    } else {
      const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
      const userData = new users({
        name,
        email,
        mobile,
        age,
        work,
        desc,
        dateCreated: dateCreate,
        // dateUpdated:dateUpdated
      });
      await userData.save();
      res.status(200).json(userData);
    }
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error  ");
  }
};
// get  all users
exports.getUsers = async (req, res) => {
  try {
    const usersData = await users.find();

    res.status(200).json(usersData);
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error1");
  }
};

// get single user

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUserData = await users.findOne({ _id: id });
    res.status(200).json(singleUserData);
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error2");
  }
};

// delete user

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUserData = await users.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUserData);
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error2");
  }
};

// update user

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, mobile, age, work, desc } = req.body;

  try {
    const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    const updateUserData = await users.findByIdAndUpdate(
      { _id: id },
      {
        name,
        email,
        mobile,
        age,
        work,
        desc,
        dateUpdated: dateUpdate,
      },
      { new:true }
    );
console.log(updateUserData);
    await updateUserData.save();

    res.status(200).json(updateUserData);
  } catch (error) {
    res.status(400).json(error);
    console.log("catch block error3");
  }
};
