





import React, { useEffect, useState } from "react";
import BlogPopUp from "./BlogPopUp";
import { json, useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../app/dataSlice";
import { useBlog } from "../utils/useBlog";
import { FaPlus } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSkeleton from "./Skeleton";
import { selectDarkMode } from "../app/themeSlice";

const Blog = () => {

  const [loginPopUp, setLoginPopUp] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const blogData = useSelector((store) => store.data.blog)
  const isUser = useSelector((store) => store.user.isUser)
  const darkMode = useSelector(selectDarkMode);



  useBlog();
  console.log(blogData)

  const fetchData = async () => {
    try {
      const response = await fetch('https://flockfeed-media.onrender.com/blogs');
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    dispatch(addBlog(jsonData));
    } catch (error) {
      console.log(error);
    }
    
  };

  // useEffect(()=>{

  // },)


  const handleAddBlog = () => {
  
    setLoginPopUp(true);


  };

  const closePopUp = () => {
    setLoginPopUp(false)
    window.location.reload();
  }

 if(!blogData){
  return (
    <div className=" flex  flex-wrap w-screen mt-16 items-center justify-center flex-col mx-auto">
    <LoadingSkeleton  />
    <LoadingSkeleton  />
    <LoadingSkeleton  />
    <LoadingSkeleton  />
    <LoadingSkeleton  />
    <LoadingSkeleton  />
    <LoadingSkeleton  />
    <LoadingSkeleton  />

      
    </div>
  )
 }



  return (
    <>
<div className={`${darkMode ? 'dark-mode' : 'light-mode'} dark:bg-gray-800 flex flex-wrap w-screen mt-8 p-10 justify-center flex-col mx-auto    `}>
      {blogData && blogData.map((d) => (
       <BlogCard fetchData={fetchData} key={d._id} d={d} />
      ))}
    </div>
    {/* {<button onClick={handleAddBlog} className='bg-blue-500 px-6 py-2 text-white rounded-md'>Add Blog</button>} */}
      {loginPopUp && <BlogPopUp closePopUp={closePopUp}  />}
      {/* {isUser && <div onClick={handleAddBlog}  className=' cursor-pointer  flex items-center bg-blue-600 px-4 py-2 text-white absolute top-32 right-16 text-2xl rounded-md border-black hover:bg-blue-800 hover:text-gray-100 transition-all duration-100 '>
<h2>Add</h2>
<FaPlus  />
</div>} */}
    </>
    
  );
};

export default Blog;
