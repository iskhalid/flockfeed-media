import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import PostCard from './PostCard';
import Sidebar from './Sidebar';
import Header from './Header';
import { useNavigate, useParams } from 'react-router-dom';
import { selectDarkMode } from '../app/themeSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileContainer = () => {
    const [posts, setPosts] = useState([]);
    const [profile,setProfile] = useState([]);
    const {id} = useParams();
    const darkMode = useSelector(selectDarkMode);


    // console.log(user)
    const navigate = useNavigate();

    
    const fetchPosts = async () => {
      try {
        const posts = await fetch('https://flockfeed-media.onrender.com/posts/'+id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        const jsonData = await posts.json();
        setPosts(jsonData.data);
        console.log(jsonData)
      } catch (error) {
        console.log(error)
      }
  };

  const fetchProfile = async () => {
    try {
      const response = await fetch('https://flockfeed-media.onrender.com/user/'+id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const jsonData = await response.json();
      setProfile(jsonData);
      console.log("profile",jsonData)
      // setProfile(jsonData.data)
      }
     catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('inside profile container')
      // if(!user){
      //   navigate('/login')
      // }
      fetchPosts();
      fetchProfile();
  }

  , [])



  return (
    <div className={`bg-gray-100 p-6 items-center ${darkMode ? 'dark-mode' : 'light-mode'} flex flex-wrap w-screen justify-center flex-col mx-auto -mt-3`}>
       <Header/>
       <div className=' -ml-3'>
       <Profile user={profile} />
       
       {posts.length>0 ? posts.map((post) => (
         <PostCard key={post._id} d={post} fetchPosts={fetchPosts} />
       )): <div className=' text-xl mr-48 sm:mr-0  sm:text-3xl m-2 p-3 text-gray-500'>No Posts created yet.</div>}
       </div>
      
        <Sidebar/>
        <ToastContainer/>
    </div>
  )
}

export default ProfileContainer