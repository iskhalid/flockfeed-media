import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import { selectDarkMode } from '../app/themeSlice';


const Profile = (data) => {

  const[isMyProfile,setisMyProfile] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const darkMode = useSelector(selectDarkMode);


  
   console.log("checking",user)


  // if(!user){
  //   navigate('/login')
  // }


const{fullname,username,profileImageUrl,createdAt} = data.user;
console.log(createdAt+"sljfsjfskdj")
const date = String(new Date(createdAt))
const slicedDate = date.slice(0, 16);
console.log(slicedDate)

// const formattedDate = format(date, 'MMMM d, yyyy');
// console.log(formattedDate)
// console.log("sdfjslj",data)

useEffect(() => {
  if(user.data._id === data.user._id){
    setisMyProfile(true)
  }
  
},[user, data.user])

  return (
<div className="m-10 mr-80 mt-28 max-w-sm">
  <div className={`rounded-lg ${darkMode ? 'dark-mode' : 'light-mode'} border ml-8 sm:ml-0 min-w-[300px] sm:min-w-[650px] bg-white px-4 pt-8 pb-10 shadow-lg`}>
    <div className="relative mx-auto  w-36 rounded-full">
      <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
      <img className="mx-auto h-36  w-full rounded-full" src={profileImageUrl || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="Profile" />
    </div>
    <h1 className={`my-1 text-center text-xl font-bold leading-8 text-gray-900 ${darkMode ? 'dark-mode' : 'light-mode'}`}>{fullname}</h1>
    {/* <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3> */}
    <p className="text-center text-sm leading-6 text-gray-500   hover:text-gray-600">@{username}</p>
    <p className="text-center text-sm leading-6 text-gray-500   hover:text-gray-600">bio</p>

    <ul className={`mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 ${darkMode ? 'dark-mode' : 'light-mode'} shadow-sm hover:text-gray-400 hover:shadow`}>
      <li className="flex items-center py-3 text-sm">
        <span>Status</span>
        <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Active</span></span>
      </li>
      <li className="flex items-center py-3 text-sm">
        <span>Joined On</span>
        <span className="ml-auto">{slicedDate}</span>
      </li>
    </ul>
   
   { isMyProfile &&  <Link to={'/profile-edit'}> <button  className='bg-blue-500 m-3 text-white px-4 py-2 rounded'>Edit</button></Link>}
  </div>
</div>

  )
}

export default Profile