import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:2001/api/signup",{name, email, password})
        .then((res) => {
            navigate("/signin")
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='signup-container'>
                <div className='signup-form'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                    <div className='input-box'>
                            <input type='text' placeholder='Enter your Name' autoComplete='off' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='input-box'>
                            <input type='email' placeholder='Enter your Email' autoComplete='off' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Enter your Password' autoComplete='off' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type='submit'>Signup</button>
                        <div className='signin'>
                            Already have an account? Sign in here
                            <div>
                            <button type='submit'><Link to="/signin">Sign in</Link></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
