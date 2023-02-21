import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const profileshow = ({content}) => {
  return (
    <div>
      <Navbar />
      <div calss="container">
        <div className="header">

          <div >
            <h2 className='text1'>Profile</h2>
          </div>
        </div>
        <div className="content2">
          <div className="form2">
            <div className='internal-form'>
            <div className="input-field">
                <label className='name'>Profile picture </label>                
                <div className='settings'>
                <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" height='100' width='100'/></div>
              </div>
              <div className="input-field">
                <label className='name'>Name* </label>
                <p className='name-dis'>{content.name}</p>
                
              </div>
              <div className="input-field">
                <label className='name'>Email* </label>
                <p className='name-dis'>{content.email}</p>
              </div>
              <div className="input-field">
                <label className='name'>Username* </label>
                <p className='name-dis'>{content.username}</p>
              </div>
              
              <div className="input-field">
                <label className='name'>Designation* </label>
                <p className='name-dis'>{content.designation}</p>
              </div>
              <div className='get-edit'>
                <Link to='/profile'><button type="submit" className='deletebut' >Edit Profile</button></Link>
              </div>
            </div>
            
          </div>

        </div>


      </div>



    </div>
    
  )
}

export default profileshow