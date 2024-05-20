import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate =  useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:2001/api/signin",{email, password})
        .then((res) => {
            navigate("/student")
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
            <div className='signin-container'>
                <div className='signin-form'>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-box'>
                            <input type='email' placeholder='Enter your Email' autoComplete='off' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Enter your Password' autoComplete='off' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type='submit'><Link to="/student">Sign in</Link></button>
                        <div className='signup'>
                            Dont have an account? Sign up here
                            <div>
                            <button type='submit'><Link to="/signup">Sign up</Link></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Signin
