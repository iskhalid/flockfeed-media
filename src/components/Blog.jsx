import React, { useEffect, useState } from "react";
import BlogPopUp from "./BlogPopUp";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../app/dataSlice";
import { useBlog } from "../utils/useBlog";
import { FaPlus } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSkeleton from "./Skeleton";
import { selectDarkMode } from "../app/themeSlice";
import CountdownTimer from "./CountdownTimer";

const Blog = () => {
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogData = useSelector((store) => store.data.blog);
  const isUser = useSelector((store) => store.user.isUser);
  const darkMode = useSelector(selectDarkMode);

  useBlog();
  console.log(blogData);

  const fetchData = async () => {
    try {
      const timer = setTimeout(() => {
        setShowCountdown(true);
      }, 10000);

      const response = await fetch('https://flockfeed-media.onrender.com/blogs');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      clearTimeout(timer);
      setShowCountdown(false);
      dispatch(addBlog(jsonData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddBlog = () => {
    setLoginPopUp(true);
  };

  const closePopUp = () => {
    setLoginPopUp(false);
    window.location.reload();
  }

  if (!blogData) {
    return (
      <div className="flex flex-wrap w-screen mt-24 items-center justify-center flex-col mx-auto">
        {showCountdown && <CountdownTimer />}
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    )
  }

  return (
    <>
      <div className={`${darkMode ? 'dark-mode' : 'light-mode'} dark:bg-gray-800 flex flex-wrap ${isUser? "":"-ml-5"} w-screen mt-8 py-10 justify-center flex-col mx-auto`}>
        {blogData && blogData.map((d) => (
          <BlogCard fetchData={fetchData} key={d._id} d={d} />
        ))}
      </div>
      {loginPopUp && <BlogPopUp closePopUp={closePopUp} />}
    </>
  );
};

export default Blog;
