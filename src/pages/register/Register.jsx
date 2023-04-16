import React from 'react'
import GalleryIcon from "../../assets/images/gallery-logo.jpg"
const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Instagram</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                  <img src={GalleryIcon} alt="avatar" />
                  <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <div className="">Already have an account? Login</div>
        </div>
    </div>
  )
}

export default Register