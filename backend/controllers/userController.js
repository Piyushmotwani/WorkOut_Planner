
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {             // I am using ID as my payload in  JWT
  // jwt.sign({id},'secret_key') // so will write secret key in env variable
  return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

// login user

const loginUser = async (req,res) => {

     const { email, password } = req.body; 
       try {
         const user = await User.login(email, password);
         const token = createToken(user._id);

         res.status(200).json({ email, token });
       } catch (error) {
         res.status(400).json({ error: error.message });
       }
}



// sign up user

const signupUser = async (req, res) => {
  const {email,password} = req.body 
  try {
   const  user = await User.signup(email,password)

   // creating a token 

   const token = createToken(user._id)
   
   res.status(200).json({email,token})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = {signupUser,loginUser}