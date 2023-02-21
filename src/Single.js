import React from 'react'
import Navbar from './Navbar';
import './single.css';
const Single = ({blogs}) => {
    const path=window.location.pathname;
   // alert(path.slice(9));
    const staticval = blogs.filter((blog) => blog.id == path.slice(9));
    console.log(staticval);
  return (
    <>
      <Navbar/>
    <div className='header12'>
      
        <div className='Container'>
                <div className='content'>
                    <div className='headingandsupportingtext'>
                        <div className='headingandsubheading'>
                            <div className='subheading'>
                                Published on {staticval[0].date}
                            </div>
                            <div className='heading'>
                                {staticval[0].title}
                            </div>
                        </div>
                        <div className='supportingtext'>
                            {staticval[0].description}
                        </div>
                 </div>
            </div>
        </div>
        <div className='Container-1'>
            <div className='content'>
                <img class="imagesingle"src={staticval[0].Poster} width='720' height='480'></img>
            </div>
        </div>
        <div className='Container'>
            <div className='Introduction'>
                Introduction
            </div>
            <div className='para'>
                {staticval[0].content}
            </div>
        </div>
    </div>
    </>
  )
}

export default Single