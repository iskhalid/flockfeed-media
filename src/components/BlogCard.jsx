import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import { selectDarkMode } from "../app/themeSlice";


const BlogCard = ({ d }) => {
  const { _id, imageUrl, content, createdAt,fetchData,author } = d;
  const {fullname,username,profileImageUrl} = author;
  const shortedContent = content.slice(0, 400);
  const shortStringDate = createdAt.slice(0,10);
  const darkMode = useSelector(selectDarkMode);


  console.log(author)

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
        `http://localhost:4000/post/${id}`,
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
      fetchData();
      // Handle UI updates or other actions upon successful deletion
    } catch (error) {
      console.error("Error deleting post:", error.message);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    
   
    <div  className={`bg-gray-50 ${darkMode ? "dark-mode" : "light-mode"}  dark:bg-black py-4   flex items-center justify-center`}>
    <div  className={`bg-white ${darkMode ? 'dark-mode' : 'light-mode'} dark:hover:bg-red-600 ${darkMode ? ' hover:bg-black' : 'light-mode'} hover:bg-gray-100  transition-all duration-100 dark:bg-gray-800 border-gray-200 dark:border-gray-800 dark:text-gray-100 p-4 rounded-xl border min-w-72  max-w-72 sm:max-w-xl`}>
      <div className="flex  justify-between">
        <div className="flex   items-center">
          <Link className="border-2 border-black rounded-full hover:border-red-500" to={"/profile/"+author._id}  ><img  className="h-11  w-11 rounded-full" src={profileImageUrl} alt="Profile"/></Link>
          <div className="ml-1.5 text-sm leading-tight">
            <span className={`text-black ${darkMode ? 'dark-mode' : 'light-mode'} dark:text-white font-bold block `}>{fullname}</span>
            <span className={`text-gray-500 ${darkMode ? 'dark-mode' : 'light-mode'} dark:text-gray-400 font-normal block`}>@{username}</span>
          </div>
        </div>

      </div>
      <p className={`text-black dark:text-gray-300 block text-sm max-w-56 min-w-56  sm:min-w-[505px] ${darkMode ? 'dark-mode' : 'light-mode'} leading-snug mt-3`}>{cleanString}</p>
     {imageUrl &&  <img className="mt-2 w-full h-64 object-contain aspect-square rounded-2xl border border-gray-100 dark:border-gray-700" src={imageUrl} alt="Tweet"/>}
      <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">{relativeTime}</p>
      <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
      <div className="text-gray-500 dark:text-gray-400 flex mt-3">
        <div className="flex items-center mr-6">
          <svg viewBox="0 0 24 24" className="fill-current h-5 w-auto">
            <g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g>
          </svg>
          <span className="ml-3">615</span>
        </div>
        <div className="flex items-center mr-6">
          <svg viewBox="0 0 24 24" className="fill-current h-5 w-auto">
            <g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g>
          </svg>
          {/* <span className="ml-3">93 people are Tweeting about this</span> */}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default BlogCard;


