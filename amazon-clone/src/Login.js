import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    //firebase
  }

  const register = e => {
    e.preventDefault();
    //firebase
  }


  return (
    <div className='login'>
      <Link to="/">
        <img className="login--logo" src="http://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon" />
      </Link>
      <div className='login--container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='login--signButton'>Continue</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <p1>--------------New To Amazon?------------</p1>
        <button type='submit' onClick={register} className='login--registerButton'>Create your Amazon Account</button>
      </div>
      <div>
        <h6>© 1996-2022, Amazon.com, Inc. or its affiliates</h6>
      </div>
    </div>
  )
}

export default Login