import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from "react-redux";
import { FaCamera } from 'react-icons/fa';
import { selectDarkMode } from "../app/themeSlice";
import { Bounce, toast } from "react-toastify";


const BlogPopUp = ({ closePopUp }) => {
  const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading,setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [characterCount,setCharacterCount] = useState(0);
  const [imageUplaod, setImageUplaod] = useState(false);
  const darkMode = useSelector(selectDarkMode);



  const user = useSelector((store) => store.user.user);



  // const Navigate = useNavigate()khkh

  async function createNewPost(ev) {
    console.log(content)

    if(  !content ){
      alert("Please input value")
      return
    }

    if (loading) return;
    setLoading(true)

    const data = new FormData();
    data.set("content", content);
    if(image){
      data.set("file", image[0]);
    }
    data.set("author", user.data._id);
    ev.preventDefault();
    const response = await fetch('https://flockfeed-media.onrender.com/blogs', {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
    //   setRedirect(true);
    setLoading(false)
    closePopUp()
  
  } }




  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-25">
      
      <form className={`p-4 relative border rounded-lg shadow-md bg-white w-full sm:w-1/2 mx-auto mt-10 ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="text-xl mx-12 font-semibold mb-4">Create Post</h2>
        <textarea
          className={`w-full h-36 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? 'dark-mode' : ''}`}
          placeholder="What's happening?"
          value={content}
          onChange={(ev) => {
            setContent(ev.target.value);
            setCharacterCount(ev.target.value.length);
          }}
          maxLength={280}
        ></textarea>
        {imageUplaod && (
          <div className="mt-2 ">
            <img src={imageUplaod} alt="Upload Preview" className="w-1/2 max-h-60 object-contain aspect-square rounded-lg" />
          </div>
        )}
        <div className="flex justify-between items-center mt-2">
          <label className="cursor-pointer text-blue-500 hover:text-blue-600">
            <FaCamera size={24} />
            <input type="file" className="hidden" onChange={(ev)=> {
              console.log(ev.target.files[0])
                 const file = ev.target.files[0];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB (example)

      if (file.size > maxSizeInBytes) {
        alert("File size exceeds the limit (5MB max)");
        // Optionally, you can reset the file input to clear the selection
        ev.target.value = null;
      } else {
        // Proceed with the upload or further processing
        setImage(ev.target.files);
        setImageUplaod(URL.createObjectURL(ev.target.files[0]));
      }
            }} />
          </label>
          <span className="text-sm text-gray-500">{characterCount}/280</span>
          <button
      onClick={closePopUp}
      className="bg-white text-black absolute top-4 bg-opacity-70 px-2 py-1 border"
    >
      X
    </button>
          <button
            type="submit"
            onClick={createNewPost}
            className={`bg-blue-500 ${loading?'cursor-not-allowed opacity-50':'cursor-pointer'} text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            disabled={characterCount === 0 && !image}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPopUp;



{/* <div
className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
>
<form className="bg-white p-8 rounded-md w-1/2">
  <h2 className="text-xl font-bold mb-4">Add blog with title,photo and content</h2>

  <input
    type="title"
    required
    placeholder={"Title"}
    value={title}
    onChange={(ev) => setTitle(ev.target.value)}
    className=" my-4 border border-gray-500 p-2 rounded-lg w-full"
  />
  {/* <input type="summary"
       placeholder={'Summary'}
       value={summary}
       onChange={ev => setSummary(ev.target.value)} /> */}
//   <input
//     className=" my-4  p-2 rounded-lg w-full"
//     required
//     type="file"
//     onChange={(ev) => {
//       const file = ev.target.image[0];
//       const maxSizeInBytes = 5 * 1024 * 1024; // 5MB (example)

//       if (file.size > maxSizeInBytes) {
//         alert("File size exceeds the limit (5MB max)");
//         // Optionally, you can reset the file input to clear the selection
//         ev.target.value = null;
//       } else {
//         // Proceed with the upload or further processing
//         setImage(ev.target.image);
//       }
//     }}
//   />
//   {/* <Editor  value={content} onChange={setContent} /> */}
//   <ReactQuill
//     className="w-full  h-[40vh] resize-none p-2 text-base "
//     required
//     rows={4}
//     cols={50}
//     placeholder="Write the content"
//     value={content}
//     onChange={setContent}
//   />
//   {/* <button
//   className=" bg-blue-600 text-white px-8 py-3 rounded-lg"
//   style={{ marginTop: "10px" }}
// >
//   Create post
// </button> */}
//   <div className="flex mt-16 justify-between">
//     <button
//       onClick={closePopUp}
//       className="bg-white bg-opacity-70 px-2 py-1 border"
//     >
//       Cancel
//     </button>
//     <button
//       type="submit"
//       onClick={createNewPost}
//       className={`bg-blue-500 ${loading?'cursor-not-allowed opacity-50':'cursor-pointer'} text-white px-4 py-2 rounded-md`}
//     >
//       Add
//     </button>
//   </div>
// </form>
// </div> */}