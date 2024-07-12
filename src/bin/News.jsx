import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useNews } from '../utils/useNews';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { addNews } from '../app/dataSlice';

// import CreateNews from './CreateNews';

const News = () => {
  // const[newsData,setNewsData] = useState([]);
  // const editable = false;
  const newsData = useSelector((store) => store.data.news);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isUser = useSelector((store) => store.user.isUser)

  useNews()
  const fetchData = async () => {
    try {
      const response = await fetch('https://blogbackend-qdow.onrender.com/news');
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    dispatch(addNews(jsonData));
    } catch (error) {
      console.log(error);
    }
    
  };


 

  const handleDelete = async (id) => { // Assuming _id is passed as an argument

    console.log("inside news handel delete")
    try {
        const response = await fetch(`https://blogbackend-qdow.onrender.com/post/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // Include credentials if needed (e.g., for cookies)
        });

        if (!response.ok) {
            const errorData = await response.json(); // Parse error response
            throw new Error(errorData.message || 'Failed to delete post');
        }

        const deletedPostData = await response.json(); // Parse success response (if any)
        console.log('Post deleted successfully:', deletedPostData);
        fetchData()
        // Handle UI updates or other actions upon successful deletion
    } catch (error) {
        console.error('Error deleting post:', error.message);
        // Handle error (e.g., show error message to the user)
    }
};

const handleNavigate = () => {
  navigate("/create-news")
}

if(!newsData){
  return(
   <div className='max-w-[1000px] mx-auto flex flex-col'>
   <div role="status" className="  space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
   <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
       <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
           <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
       </svg>
   </div>
   <div className="w-full">
       <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
   </div>
   <span className="sr-only">Loading...</span>
</div>
<div role="status" className=" space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
   <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
       <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
           <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
       </svg>
   </div>
   <div className="w-full">
       <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
   </div>
   <span className="sr-only">Loading...</span>
</div><div role="status" className="  space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
   <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
       <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
           <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
       </svg>
   </div>
   <div className="w-full">
       <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
       <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
   </div>
   <span className="sr-only">Loading...</span>
</div>
</div>
    
    )
}


  return (
    <div className=' font-sans m-4 p-4'>
   {newsData && newsData.map(d => ( <NewsCard key={d.title} data={d} isUser={isUser} handleDelete={handleDelete} />))}
    {/* {loginPopUp && <CreateNews closePopUp={closePopUp}  />} */}

{isUser && (<div onClick={handleNavigate} className=' cursor-pointer  flex items-center bg-blue-600 px-4 py-2 text-white absolute top-32 right-24 text-2xl rounded-md border-black hover:bg-blue-800 hover:text-gray-100 transition-all duration-100 '>
<h2>Add</h2>
<FaPlus  />
</div>)}
  
    </div>
  )
}

export default News