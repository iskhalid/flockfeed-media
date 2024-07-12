import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useBlog } from '../utils/useBlog';
import parse from 'html-react-parser';


const BlogInfo = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  // console.log(id);
  const blogData = useSelector((store) => store.data.blog);
  const isUser = useSelector((store) => store.user.isUser);

  console.log(blogData);

 useBlog()

  if (!blogData) return;

  const filterData = blogData.filter((blog) => blog._id === id);
  console.log(filterData);
  const content = filterData[0].content;

 

  const handleDelete = async (id) => { // Assuming _id is passed as an argument

    console.log("inside news handel delete")
    try {
        const response = await fetch(`https://flockfeed-media.onrender.com/${id}`, {
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
        // fetchData()
        navigate("/")
        // Handle UI updates or other actions upon successful deletion
    } catch (error) {
        console.error('Error deleting post:', error.message);
        // Handle error (e.g., show error message to the user)
    }
};

  return (
    <>
 <div className=' max-w-[1100px] mx-auto flex gap-20 my-28'>
    {/* left part */}
    <div className=' text-justify font-sans w-8/12'>
      <h2 className=' font-sans text-3xl font-bold my-4 py-2'>{filterData[0].title}</h2>
      {/* <div className='w-11/12 whitespace-pre-wrap break-words   font-sans   tracking-wider m-2 p-2 mt-20' >{filterData[0].content}</div> */}
      {parse(content)}
      {/* whitespace-pre-wrap break-words */}

    </div>
    {/* right part */}
    <div >
      <img className=' mt-11 object-contain w-[400px] h-[500px]' src={filterData[0].imageUrl} />
    </div>
    </div>
    {isUser && <div onClick={()=>handleDelete(id)}  className=' cursor-pointer  flex items-center bg-red-600 px-4 py-2 text-white absolute top-32 right-16 text-2xl font-sans rounded-md border-black hover:bg-blue-800 hover:text-gray-100 transition-all duration-100 '>
<h2>Delete</h2>
{/* <FaPlus  /> */}
</div>}
    </>
   
  )
}

export default BlogInfo