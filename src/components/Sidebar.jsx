// <!-- component -->
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" /> */}


//   <!-- Sidebar -->

import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import BlogPopUp from './BlogPopUp';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../app/themeSlice';
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdAddCircle } from "react-icons/md";





const Sidebar = () => { 
  const [loginPopUp, setLoginPopUp] = useState(false);
  const user = useSelector((state) => state.user.user);
  const darkMode = useSelector(selectDarkMode);
  // console.log(user)
  const {_id,profileImageUrl,fullname,username} = user.data;
  console.log("aaaaaaaaaa",user)
  console.log("kdflskflsjfdks",profileImageUrl)

  const closePopUp = () => {
    setLoginPopUp(false);
    window.location.reload();
  }

  return (
    <div className={`fixed ${darkMode ? 'dark-mode' : 'light-mode'} flex mt-4  flex-col top-14 left-0  border border-gray-600  w-14 hover:w-64 md:hover:w-80 md:w-40 lg:w-80 bg-white h-full text-gray-600 transition-all duration-300 border-none z-10 sidebar`}>
    <div className="overflow-y-auto overflow-x-hidden    flex flex-col justify-between flex-grow">
      <ul className="flex flex-col py-4  space-y-1">
        <li>
          <Link to={"/"} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-500 hover:text-gray-800  border-transparent">
            {/* <!-- Icono Home de Font Awesome --> */}
            <span className="inline-flex text-3xl justify-center items-center ml-4">
             <IoMdHome/>
            </span>
            <span className="ml-6 text-lg tracking-wide truncate">Home</span>
          </Link>
        </li>
        <li>
          <a href={"/profile/"+_id}  className="relative  flex flex-row items-center h-11 transition duration-300 ease-in-out  hover:bg-gray-500 focus:outline-none   hover:text-gray-800  border-transparent">
            {/* <!-- Icono Check Circle de Font Awesome --> */}
            <span className="inline-flex text-3xl justify-center items-center ml-4">
             <CgProfile/>
            </span>
            <span className="ml-6 text-lg tracking-wide  truncate">Profile</span>
          </a>
        </li>
        <li>
          <a href="#" className="relative flex flex-row mt-8 items-center h-11 hover:bg-gray-400 hover:text-black hover:rounded-2xl hover:bg-opacity-80 py-8 focus:outline-none  border-l-4 border-transparent">
            {/* <!-- Icono Sign Out de Font Awesome --> */}
            <div className="flex ml-2 items-center">
          <img className="h-11 w-11 rounded-full" src={profileImageUrl} alt="Profijdjle"/>
          <div className=' hidden md:block'>
          <div>{fullname}</div>

        <div className=' text-sm text-gray-500 block'>@{username}</div>

          </div>
        </div>
            </a>
        </li>
        <li>
          <a href="#" className="relative flex flex-row mt-8 items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent">
            {/* <!-- Icono Sign Out de Font Awesome --> */}
            <span className=" inline-flex sm:hidden justify-center text-3xl items-center ml-4">
             <MdAddCircle className='' onClick={() => setLoginPopUp(true)} />
            </span>
            <button onClick={() => setLoginPopUp(true)} type="button" className="text-white hidden md:block w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Post</button>
            </a>
        </li>
        
      </ul>
      <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
    </div>
    {loginPopUp && <BlogPopUp closePopUp={closePopUp} />}
  </div>
  )
}

export default Sidebar



