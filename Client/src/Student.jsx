import React from 'react'

const Student = () => {
  return (
    <div>
        <form>
      <h2>Registration Form</h2>
      <div className='input-box'>
        <label htmlFor='name'><strong>Name</strong></label>
        <input type='text' placeholder='Enter your name' autoComplete='off' name='name'></input>
      </div>
      <div className='input-box'>
        <label htmlFor='email'><strong>Email</strong></label>
        <input type='email' placeholder='Enter your email' autoComplete='off' name='email'></input>
      </div>
      <div className='input-box'>
        <label htmlFor='address'><strong>Address</strong></label>
        <input type='text' placeholder='Enter your address' autoComplete='off' name='address'></input>
      </div>
      <div className='input-box'>
        <label htmlFor='age'><strong>Age</strong></label>
        <input type='text' placeholder='Enter your age' autoComplete='off' name='age'></input>
      </div>
      <div className='input-box'>
        <label htmlFor='phone'><strong>Phone number</strong></label>
        <input type='text' placeholder='Enter your phone number' autoComplete='off' name='phone'></input>
      </div>
      </form>
      <button type='submit'>Register</button>
    </div>
  )
}

export default Student
