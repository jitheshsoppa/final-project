
import React from 'react';
import pic from './profilepic.jpeg'
const card = ({blog}) => {
  return (
    <div className="cardmain">
         <div class="cardimgdiv"><img className="cardimg" src="https://lumiere-a.akamaihd.net/v1/images/pp_thejunglebook2016_herobanner_mobile_19907_22212b81.jpeg?region=0,0,640,480"/></div>
        {/* <div className="cardimgdiv"><img className="cardimg" src="https://images.shiksha.com/mediadata/images/articles/1429273800php5OPdVh.jpeg"/></div> */}
        <p className="cardcategory">{blog.category_name}</p>
        <h1 className="cardtitle">{blog.title}</h1>
        <p className="cardcontent">{blog.description}</p>
        <div className="cardprofile">
          <img className="caedprofileimg" src={pic}></img>
          <div class="cardprofiletext">
            <p className="cardauthor">{blog.author}</p>
            <p className="carddate">{blog.date.split(' ')[0]}</p>
          </div>
        </div>
    </div>
  );
}

export default card;
