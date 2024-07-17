import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import { selectDarkMode } from "../app/themeSlice";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";






const PostCard = ({ d ,fetchPosts}) => {
  const { _id, imageUrl, content, createdAt,fetchData,author } = d;
  const {fullname,username,profileImageUrl} = author;
  const authorId = author._id;
  const shortedContent = content.slice(0, 300);
  const shortStringDate = createdAt.slice(0,10);
  const darkMode = useSelector(selectDarkMode);
  const[isMyProfile,setisMyProfile] = useState(false);
  const [isSuperAdmin,setisSuperAdmin] = useState(false);
  const superAdminId = "668e3cf934372ced0f6d6283"
  const [fillColor, setFillColor] = useState('black');


  const user = useSelector((store) => store.user.user);




  console.log("Inside post card")
  console.log("author",author)
  console.log("fullname",fullname)
  // Function to remove HTML tags
  function stripHtmlTags(str) {
    let doc = new DOMParser().parseFromString(str, "text/html");
    return doc.body.textContent || "";
  }

  // Get the new string without HTML tags
  let cleanString = stripHtmlTags(shortedContent);
  const relativeTime = formatDistanceToNow(new Date(createdAt), { addSuffix: true });


  const isUser = useSelector((store) => store.user.isUser);

  const handleDelete = async (id) => {
    // Assuming _id is passed as an argument

    console.log("inside news handel delete");
    try {
      const response = await fetch(
        `https://flockfeed-media.onrender.com/blog/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include credentials if needed (e.g., for cookies)
        }
      );

      if (!response.ok) {
        const errorData = await response.json(); // Parse error response
        throw new Error(errorData.message || "Failed to delete post");
      }

      const deletedPostData = await response.json(); // Parse success response (if any)
      console.log("Post deleted successfully:", deletedPostData);
      
      fetchPosts();
      toast.success('Deleted successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
          
      // Handle UI updates or other actions upon successful deletion
    } catch (error) {
      console.error("Error deleting post:", error.message);
      // Handle error (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    if(user.data._id === authorId){
      setisMyProfile(true)
    }

    if(user.data._id === superAdminId){
      setisSuperAdmin(true) 
    }
    
  },[user, d])

  return (
    
   
    <div  className={` dark:bg-black  mr-64 sm:mr-24 flex ${darkMode ? 'dark-mode' : 'light-mode'} items-center justify-center`}>
    <div className={`bg-white dark:bg-gray-800  text-black dark:border-gray-800 p-4 ${darkMode ? 'dark-mode' : 'light-mode'} rounded-xl border min-w-80  max-w-80 sm:max-w-xl`}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="h-11 w-11 rounded-full" src={profileImageUrl || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' } alt="Profile"/>
          <div className="ml-1.5 text-sm leading-tight">
            <span className=" dark:text-white font-bold block ">{fullname}</span>
            <span className="text-gray-500 dark:text-gray-400 font-normal block">@{username}</span>
          </div>
        </div>
       
      </div>
      <p className=" dark:text-white max-w-64 min-w-64  sm:min-w-[505px] block text-sm leading-snug mt-3">{cleanString}</p>
     { imageUrl && <img className="mt-2 w-3/2 h-64 object-contain aspect-square rounded-2xl border border-gray-100 dark:border-gray-700" src={imageUrl} alt="Tweet"/>}
      <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">{relativeTime}</p>
      <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
      <div className="text-gray-500 dark:text-gray-400 flex mt-3">
        <div className="flex items-center mr-6">
          <svg onClick={() => setFillColor(fillColor === 'black' ? 'red' : 'black')} style={{fill: fillColor}} viewBox="0 0 24 24" className="fill-current cursor-pointer h-5 w-auto">
            <g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g>
          </svg>
          <span className="ml-3"> {fillColor==='black' ? '0' : '1'} </span>
        </div>
        <div className="flex items-center mr-6">
          <svg viewBox="0 0 24 24" className="fill-current h-5 w-auto" >
            <g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g>
          </svg>
          {/* <div className="ml-3 px-32">post</div> */}
         { isMyProfile && <div onClick={()=>handleDelete(_id)} className=" ml-24 sm:ml-64 text-lg cursor-pointer"><AiOutlineDelete/></div>}
         { isSuperAdmin && <div onClick={()=>handleDelete(_id)} className=" ml-24 sm:ml-64 text-lg cursor-pointer"><AiOutlineDelete/></div>}

        </div>

      </div>
    </div>
  </div>
  
  );
};

export default PostCard;


