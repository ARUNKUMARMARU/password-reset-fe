import React, { useState } from 'react';
import authService from '../../service/auth';

function Reset() {
  const [email,setEmail] = useState('');

 const handleResetLnk=(e)=>{
  e.preventDefault();
  const getEmail = email

  console.log(getEmail);
  authService.sendEmail(getEmail);

  setEmail('')
 }
  return (
    <div>
      <form onSubmit={handleResetLnk}>

        <label>
          <p> Enter rigistered mail id to send a password reset link &nbsp;</p>

          <input
          type='email'
          name='email'
          placeholder='email...'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          </label>&nbsp;

          <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default Reset;