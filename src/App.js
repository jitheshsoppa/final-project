//import logo from './logo.svg';
import {useState, useEffect} from 'react';
import React from 'react';
import Login from './Login';
import Signin from './Signin';
import Single from './Single';
import Articlelist from './ArticleList'; 
import Profile from './Profile';
import Profileshow from './Profileshow';
import Write from './Write';
import axios from 'axios';
import EditArticle from './EditArticle';
import Navigate from'react-router-dom';

import { Routes, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import ArticleView from './ArticleView';



function App() {
  const[blogs,setBlogs]=useState([ {
    "id": 1,
    "title": "UX review presentations",
    "Poster":"https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75",
    "author": "Olivia Rhye",
    "date": "2010-01-01 00",
    "description": "As per the latest, The first Match Between India vs Australia Border – Gavaskar Trophy Series 2023 will be played in Nagpur. The remaining three matches will be played in Delhi,",
    "content": "A UX presentation should have three core elements: your research process and findings, data-backed recommendations for next steps, and room for team collaboration so you can explore ideas.Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
    "category_name": "Design"
},
{
    "id": 2,
    "title": "Migrating to Linear 101",
    "Poster":"https://www.ivyarc.com/static/media/Frame%201983.5d920d4d1f13d9ae0428.png",
    "author": "Phoenix Baker",
    "date": "1950-05-07",
    "description": "As per the latest, The first Match Between India vs Australia Border – Gavaskar Trophy Series 2023 will be played in Nagpur. The remaining three matches will be played in Delhi,",
    "content": "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
    "category_name": "Technology"
},{
  "id": 3,
  "title": "Never have I ever",
  "Poster":"https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75",
  "author": "pavan karthik",
  "date": "1980-09-02",
  "description": "As per the latest, The first Match Between India vs Australia Border – Gavaskar Trophy Series 2023 will be played in Nagpur. The remaining three matches will be played in Delhi,",
  "content": "Never Have I Ever season four is definitely happening, but we are still waiting on exactly when the Netflix hit will return. But perhaps we should savour the wait – it is the final season, after all.Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
  "category_name": "Books"
},{
  "id": 4,
  "title": "Jungle Book",
  "Poster":"https://lumiere-a.akamaihd.net/v1/images/pp_thejunglebook2016_herobanner_mobile_19907_22212b81.jpeg?region=0,0,640,480",
  "author": "Vineet Kumar",
  "date": "1974-01-05",
  "description": "As per the latest, The first Match Between India vs Australia Border – Gavaskar Trophy Series 2023 will be played in Nagpur. The remaining three matches will be played in Delhi,",
  "content": "The Jungle Book is not based on a true story. The Jungle Book is a collection of short stories, or fables, that use animal characters to teach a moral or lesson. The narrator tells the story in this book as if they are legends, but they are made-up stories created by Rudyard KiplingMi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
  "category_name": "Comics"
},{
  "id": 5,
  "title": "Border Gavaskar Trophy",
  "Poster":"https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/border-gavaskar-trophy-1674379225417-original.jpg",
  "author": "Aakash Chopra",
  "date": "2023-01-05",
  "description": "As per the latest, The first Match Between India vs Australia Border – Gavaskar Trophy Series 2023 will be played in Nagpur. The remaining three matches will be played in Delhi,",
  "category_name": "Comics"
},{
  "id": 6,
  "title": "Political Updates",
  "Poster":"https://images.shiksha.com/mediadata/images/articles/1429273800php5OPdVh.jpeg",
  "author": "Ravish Kumar",
  "date": "1974-01-05",
  "description": "As per the latest, The first Match Between India vs Australia Border – Gavaskar Trophy Series 2023 will be played in Nagpur. The remaining three matches will be played in Delhi,",
  "content": "India is a Sovereign Socialist Secular Democratic Republic with a Parliamentary form of government which is federal in structure with unitary features. There is a Council of Ministers with the Prime Minster as its head to advice the President who is the constitutional head of the country Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat,Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
  "category_name": "Comics"
},
]);
//const url='http://172.25.26.160:3000/article_all';
const getblogs = async function () {
  //alert('hi')
  const list = await axios.get('http://172.25.26.160:3000/article_all');
  alert('hi')
  setBlogs([...blogs,...list.data]);
  };
  useEffect(() => {
    return () => {
      getblogs();
    };
  }, []);



  
  const[signinname,setsiginname]=useState('');
  const[signinemail,setsiginemail]=useState('');
  const[signinpass,setsiginpass]=useState('');
  const[signinconfirmpass,setsiginconfirmpass]=useState('');
  const[signindesignation,setsigindesignation]=useState('');
  const[allsignup,setallsignup]=useState({name:signinname,email:signinemail,password:signinpass,password_confirmation:signinconfirmpass,designation:signindesignation});

  


  const content = {'name':'jithesh',"email":'jithesh@gmail.com',"designation":'B.Tech',"pass":'jithesh@2002',"con_pass":'jithesh@2002', "username":'jithesh_soppa'};



  const changesiginname=(e)=>
  {   //console.log(e.target.value)
      setsiginname(e.target.value);
  }
  const chan123=(e)=>

  { //e.preventDefault();  
    //console.log(e.target.value)
    setsiginemail(e.target.value);
  }
  const pass123=(e)=>
  { //console.log(e.target.value)
    setsiginpass(e.target.value);
  }
  const changesiginconfirmpass=(e)=>
  {   //console.log(e.target.value)
      setsiginconfirmpass(e.target.value);
  }
  const changesigindesignation=(e)=>
  {   //console.log(e.target.value)
      setsigindesignation(e.target.value);
  }
  
  const onsignup=async (e)=>
  {e.preventDefault();
    setallsignup({name:signinname,email:signinemail,password:signinpass,password_confirmation:signinconfirmpass,designation:signindesignation});
    const data = allsignup;
    console.log(allsignup);
    await axios.post("http://192.168.36.69:3000/signup",data)
      // .then(function (response){
      //   console.log(response);
      //   Navigate('/login');
      // })
      .catch(function (error){
        console.log(error);
        alert('error');
      })
       
    }

  
  return (
      <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signin signupname={changesiginname} changesiginemail={chan123} changesiginpass={pass123} signupconfirmpass={changesiginconfirmpass} signupdesignation={changesigindesignation} onsignup={onsignup}/>}/>
              <Route path="/" element={<Articlelist blogs={blogs}/>}/>
              <Route path="/article/:id" element={<Single blogs={blogs}/>}/> 
              <Route path='/profile' element={<Profile content={content}/>}/>
              <Route path='/profileshow' element={<Profileshow content={content}/>} /> 
              <Route path='/write' element={<Write />}/>
              <Route path='/articleview' element={<ArticleView />}/>
              <Route path='/editarticle' element={<EditArticle />}/>
            

      </Routes>

  );
}

export default App;
