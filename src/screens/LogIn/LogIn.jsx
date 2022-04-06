import React from 'react'
import './login.css'
// import {BsTelegram} from 'react-icons/bs'
import twitterIcon from '../../images/twitter-icon.png'

const LogIn = () => {
  return (
    <section className='login-section d-flex align-items-center justify-content-center'>
        <div className="login-container">
            <div className="card p-5 text-center">
                <h1 className='mb-4'>Login</h1>
                <p>Login with your Telegram Account</p>
                <img src={twitterIcon} alt="twitter icon" className='img-fluid twitter-icon'/>
                <div className="my-4">
                    <button className='twitter-btn'>Login</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogIn