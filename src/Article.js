
import Card from './card';
import { Routes, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import React from 'react';

const Article = ({blogs}) => {
  return (
    <>
        <div className="articlelist">
   {
    blogs.map((blog) => (
        <Link to={`/article/${blog.id}`}><Card  blog={blog}/></Link>
    ))
   }
    </div>
    </>
  );
}

export default Article;
