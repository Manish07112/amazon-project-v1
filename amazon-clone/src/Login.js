import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='login'>
       <Link to = "/">
       <img className="login--logo" src="http://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"alt="amazon"/> 
       </Link>
       <div className='login--container'>
           <h1>Sign-in</h1>
       <form>    
           <h5>E-mail</h5>
           <input type='text' />
           <h5>Password</h5>
           <input type='password' />

           <button className='login--signButton'>Continue</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className='login--registerButton'>Create your Amazon Account</button>
       </div>
    </div>
  )
}

export default Login