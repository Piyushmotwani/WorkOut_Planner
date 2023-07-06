const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator =  require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// static signup method
userSchema.statics.signup = async function(email,password) {
  // validation
  if (!email || !password) {
    throw Error("All the fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
  /**
    At least one uppercase letter ((?=.*?[A-Z])
    At least one lowercase letter ((?=.*?[a-z])
    At least one digit ((?=.*?[0-9])
    Minimum length of 6 characters (.{6,})
   */
  if (!validator.matches(password, passwordRegex)){
    throw Error("At least one uppercase letter,one lowercase letter,one digit and minimum length is 6 in password");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("This email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  //console.log("salt: ", salt);

  const hash = await bcrypt.hash(password, salt);
  //console.log("hash:", hash)

  const user = await this.create({ email, password: hash });

  return user;
}

// static signup method
userSchema.statics.login = async function(email,password){
  // validation
  if (!email || !password) {
    throw Error("All the fields must be filled");
  }
   const user = await this.findOne({ email });

   if (!user) {
      throw Error("Incorrect Email")
   }
   const match = await bcrypt.compare(password,user.password)

   if(!match) {
    throw Error("Invalid Login Credentials!!!")
   }

   return user;
}

module.exports = mongoose.model("User", userSchema);