import React from 'react';
import Card from './card';
import Articleheader from './Articleheader';
import { Routes, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Article from './Article';
import Navbar from './Navbar';

const ArticleList=({blogs})=> {
   return (
   <div className="home">
    <Navbar />
   {/* 
   '<Articleheader/> */}
    <Article blogs={blogs}/>
   </div>
    
   )

  }
  

export default ArticleList;