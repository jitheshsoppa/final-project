import React from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'

const Signup = ({signupname,changesiginemail,changesiginpass,signupconfirmpass ,signupdesignation,onsignup}) => {
    return (
        <div calss="container">
            <div className="header">
                <div >
                    <h2 className='text1'>Create an account</h2>
                </div>
            </div>
            <div className="content2">
                <form  action='POST' onSubmit={onsignup}>
                <div className="form2">
                    <div className='internal-form'>
                        <div className="input-field">
                            <label className='name'>Name *</label>
                            <input type="text" placeholder="Enter your name" className='name-input' onChange={signupname} />
                        </div>
                        <div className="input-field">
                            <label className='name'>Email *</label>
                            <input type="text" placeholder='Enter your Email' className='name-input' onChange={changesiginemail} />
                        </div>
                        <div className="input-field">
                            <label className='name'>Password *</label>
                            <input type="password" placeholder='Create your password' className='name-input' onChange={changesiginpass} />
                        </div>
                        <div className="input-field">
                            <label className='name'>Confirm Password *</label>
                            <input type="password" placeholder='Re-Enter Password' className='name-input' onChange={signupconfirmpass} />
                        </div>

                        <div className="input-field">
                            <label className='name'>Designation*</label>
                            <input type="text" placeholder='Enter Designation' className='name-input' onChange={signupdesignation} />
                        </div>
                    </div>
                    <div className="act">
                        <div className='get-started'>
                            <button type="submit" className='text-get' >Get Started</button>
                        </div>
                        <div className='google'>
                            {/* <button type="submit" className='g-button' >
                                <svg className='svg' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_7917_81863)">
                                        <path d="M24.2663 12.2765C24.2663 11.4608 24.2001 10.6406 24.059 9.83813H12.7402V14.4591H19.222C18.953 15.9495 18.0888 17.2679 16.8233 18.1056V21.104H20.6903C22.9611 19.014 24.2663 15.9274 24.2663 12.2765Z" fill="#4285F4" />
                                        <path d="M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z" fill="#34A853" />
                                        <path d="M6.00277 14.3002C5.50011 12.8099 5.50011 11.196 6.00277 9.70569V6.61475H2.01674C0.314734 10.0055 0.314734 14.0004 2.01674 17.3912L6.00277 14.3002Z" fill="#FBBC04" />
                                        <path d="M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95065 6.86173 9.60947 4.74966 12.7401 4.74966V4.74966Z" fill="#EA4335" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7917_81863">
                                            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Sign Up with Google</button> */}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <span className='hint-text'>Already have an account?</span>
                    <a href="" className='button'>
                        <Link to='/login'><span className='log'>Log in</span></Link></a>
                        <Link to='/'><a href="" class="log">Go Home</a></Link>
                </div>
            </form>
            </div>


        </div>
    )
}

export default Signup