const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const quailficionSchema = mongoose.Schema(
  {
    userType: {
      type: String,
      required: true,
    },
    quizeId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"quiz",
   },
   
  },
  {
    timestamps: true,
  }
);

quailficionSchema.statics.loginrole = async (userType) => {
  const userData = await Role.findOne({ userType });
  if (!userData) throw new Error("invalid email");
  return userData;
};

quailficionSchema.methods.generateToken = async function () {
  const userRole = this;
  console.log("test ", process.env.tokenPass);
  const token = jwt.sign({ _id: userRole._id }, process.env.tokenPass);
  userRole.tokens = userRole.tokens.concat({ token });
  // userData.tokens.push({token})
  await userRole.save();
  return token;
};

const Role = mongoose.model("Role", quailficionSchema);
module.exports = Role;
