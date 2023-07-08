import React from 'react'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup,error,IsLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email,password) 
    }


  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up !</h3>

      <label>Email :</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password :</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={IsLoading}>Sign In</button>
      {error && <div className="error">{error}</div>}
      <div>
        <p>Already an existing user?</p>
        <span>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </form>
  );
}

export default SignUp
