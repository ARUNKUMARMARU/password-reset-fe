import React from 'react';
import { Link } from 'react-router-dom';
import signup from './signup';
import Reset from './Reset';


function Home() {
  return (
    <div>
        <h2>Welcome to web app</h2>
        <h3>Signin</h3>
        <form>
            <div>
            <label>Enter email &nbsp;
            <input 
            type='email'
            name='name'
            placeholder='email...'
            />
            </label>
            </div><br/>
            <div>
           <label>Enter password &nbsp;
           <input 
            type='text'
            name='name'
            placeholder='password...'
            />
             <p><Link to='/reset'>forgot password?</Link></p>
           </label>
            </div>
            <br/>
            <div>
                <button type='submit'>signin</button>
            </div>
        </form>
        <p>don't have an account? <Link to='/signup'>signup</Link></p>
    </div>
  )
}

export default Home;