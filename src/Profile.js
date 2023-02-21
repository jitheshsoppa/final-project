import React, { useState } from 'react';
import Navbar from './Navbar';


const Profile = ({content}) => {
    const [name,setName]=useState(content.name);
    const[email,setEmail]=useState(content.email);
    const[password,setPassword]=useState(content.pass);
    const[username,setUsername]=useState(content.username);
    const[designation,setDesignation]=useState(content.designation);
    const[allvalue,setallvalue]=useState({name:name,email:email,password:password,username:username,designation:designation});
    const onAdd=(e)=>{
        console.log(allvalue)
        e.preventDefault();
        setallvalue({name:name,email:email,password:password,username:username,desination:designation});        
    };
  return (
    <div>
      <Navbar />
      <div calss="container">
        <div className="header">
          <div>
            <h2 className='text1'>Welcome to  your Profile</h2>
          </div>
        </div>
        <div className="content2">
          <form className="form2" onSubmit={onAdd}>
            <div className='internal-form'>
            <div className="input-field">
                <label className='freetrial'>Profile picture </label>
                {/* <input type="text" placeholder="Update your name" className='name-input' /> */}
                <div className='settings'>
                    <img
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="" height='100' width='100'/>
                </div>
            </div>
              <div className="input-field">
                <label className='name'>Name *</label>
                <input type="text" placeholder="Update your name" className='name-input' value={name}  onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="input-field">
                <label className='name'>Email *</label>
                <input type="text" placeholder='Update  your Email' className='name-input' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="input-field">
                <label className='name'>Username *</label>
                <input type="text" placeholder="Update your username" className='name-input' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              </div>
              <div className="input-field">
                <label className='name'>Password *</label>
                <input type="text" placeholder='Update  your password' className='name-input' value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div className="input-field">
                <label className='name'>Designation *</label>
                <input type="text" placeholder="Update your Designation" className='name-input'value={designation} onChange={(e)=>setDesignation(e.target.value)} />
              </div>
            </div>
            <div className="act">
              <div className='get-started'>
                <button type="submit" className='text-get' >Update</button>
              </div>
              <div className='google'>
                <button type="submit" className='deletebut'  >Delete Your Profile</button>
              </div>

            </div>
          </form>

        </div>


      </div>



    </div>
  ) 
}


export default Profile