import React from 'react'
const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Instagram</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Sign in</button>
            </form>
            <div className="">Don't have an account ? Register</div>
        </div>
    </div>
  )
}

export default Login