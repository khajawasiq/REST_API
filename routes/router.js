const express = require("express");
const router = express.Router();
const users = require("../models/usersSchema");
const controllers = require('../Controllers/userControllers');

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

router.post("/user/register",controllers.userpost);
router.get("/user/getAlluser",controllers.getUsers);
router.get("/user/singleUser/:id",controllers.getSingleUser);
router.delete("/user/deleteUser/:id",controllers.deleteUser);
router.put("/user/updateUser/:id",controllers.updateUser);

// router.post("/register", async (req, res) => {
//   // console.log(req.body);
//   const { name, email, age, work, desc, mobile } = req.body;
//   if (!name || !email || !age || !work || !desc || !mobile) {
//     res.status(404).send("please fill data");
//   }
//   try {
//     const preuser = await users.findOne({ email: email });
//     console.log(preuser);
//     if (preuser) {
//       res.status(404).send("this user is exist");
//     } else {
//       const adduser = new users({
//         name,
//         email,
//         age,
//         work,
//         desc,
//         mobile,
//       });

//       await adduser.save();
//       res.status(201).json(adduser);
//       console.log(adduser);
//     }
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });

module.exports = router;
