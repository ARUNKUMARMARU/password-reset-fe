import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../service/auth';

function Sign() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const handleSignup = (e)=>{
    e.preventDefault();

    const user ={
      name : name,
      email : email,
      password : password
    }
   console.log(user);
   authService.signup(user);

   setName('');
   setEmail('');
   setPassword('');

    }

  return (
    <div>
        <h3>Signup</h3>

        <form onSubmit={handleSignup}>

         <div>
         <label>Enter name &nbsp;
            <input type='text'
            name='name'
            placeholder='name...'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            </label>
          </div> <br/>
        
         <div>
         <label>Enter email &nbsp;
            <input type='email'
            name='email'
            placeholder='email...'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            </label>
          </div><br/>
         
         
         <div>
         <label>Create password &nbsp;
            <input type='text'
            name='password'
            placeholder='password...'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </label>
          </div><br/>
          <div><button type='submit'>Submit</button></div>         
        </form>
        <p>Already have an account <Link to='/'>signin</Link></p>
    </div>
  )
}

export default Sign;