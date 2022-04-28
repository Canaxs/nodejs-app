import React, { useState,useEffect } from 'react'
import { getBlog } from '../api/ApiCalls';
import BlogCard from '../fixed/BlogCard';
import Navbar from '../fixed/Navbar';

const Blogs = () => {
    const [blog,setBlog] = useState();

    useEffect(() => {
        getBlogs();
    },[]);

    const getBlogs = () => {
        getBlog().then(res => {
            setBlog(res.data)
        })
    }

  return (
    <div>
        <Navbar/>
        {blog && blog.map(e =>(
             <BlogCard title={e.title} text={e.text} tag={e.tag}/>
        ))}
    </div>
  )
}

export default Blogs;
