import React from 'react';
import {useState} from 'react';
// import { Navbar } from 'react-bootstrap'
import './Login.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [alllogin,setalllogin]=useState({email:'',password:''});

    const onlogin=async(e)=>
  {
    e.preventDefault();
     console.log(alllogin)
     try {
      const responselogin = await axios.post('http://10.10.11.26:3000/login', alllogin);
      console.log(responselogin);
      
    } catch (error) {
      console.log(error);
    }
    
  }

    const loginemail =(e)=>
  {  
   
    setalllogin({ ...alllogin, email: e.target.value });
    //console.log(alllogin.email);
  }
  const loginpass=(e)=>
  {     
    setalllogin({ ...alllogin, password: e.target.value });
    //console.log(alllogin.password);
  }


    return (
        <>
        
        <div class="main">
        
            <div class="content">
                <div calss="header">
                {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_8082_9048)"><circle cx="15" cy="14" r="12" fill="url(#paint0_linear_8082_9048)"/></g><defs><filter id="filter0_dd_8082_9048" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8082_9048"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/><feBlend mode="normal" in2="effect1_dropShadow_8082_9048" result="effect2_dropShadow_8082_9048"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_8082_9048" result="shape"/></filter><linearGradient id="paint0_linear_8082_9048" x1="9" y1="26" x2="21" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#53389E"/><stop offset="1" stop-color="#6941C6"/></linearGradient></defs></svg> */}

                    <div class='Textandsupportingtext'>
                        <h1 class="Text">Login to your Account</h1>
                    </div>
                </div>
                <div class='content1'>
                    <form action='' onSubmit={onlogin}>
                        <div class="form1">
                            <div class="email">
                                <label class="email-text">Email</label>
                                <input type="email" class="email-input" placeholder='Enter Your Email'  onChange={loginemail} />
                            </div>
                            <div class="password">
                                <label class="pass-text">Password</label>
                                <input type="password" class="pass-input" onChange={loginpass} />
                            </div>
                        </div>
                        <div class="row">
                            <a href=""  class="link">forgot password</a>
                        </div>
                        <div class="actions">
                            <button type="submit" class="submit" >Sign in</button>
                        </div>
                        <div class='support1'>
                        <p class="supp">Don't have an account? <Link to='/signup'> <a href="" class="sign-up">Sign up</a></Link>
                            <Link to='/'><a href="" class="sign-up">Go Home</a></Link></p>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login

