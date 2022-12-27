const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const roleSchema = mongoose.Schema(
  {
    userType: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);
// roleSchema.virtual("rols", {
//   ref: "Role",
//   localField: "_id",
//   foreignField: "userId",
// });

// roleSchema.statics.loginrole = async (userType) => {
//   const userData = await Role.findOne({ userType });
//   if (!userData) throw new Error("invalid email");
//   return userData;
// };

// roleSchema.methods.generateToken = async function () {
//   const userRole = this;
//   console.log("test ", process.env.tokenPass);
//   const token = jwt.sign({ _id: userRole._id }, process.env.tokenPass);
//   userRole.tokens = userRole.tokens.concat({ token });
//   // userData.tokens.push({token})
//   await userRole.save();
//   return token;
// };

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
