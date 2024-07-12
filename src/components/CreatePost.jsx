import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
    setCharacterCount(event.target.value.length);
  };

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    // Handle post submission logic here
    console.log('Post submitted:', postContent, image);
    setPostContent('');
    setCharacterCount(0);
    setImage(null);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Create Post</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="w-full h-24 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="What's happening?"
          value={postContent}
          onChange={handleInputChange}
          maxLength={280}
        ></textarea>
        {image && (
          <div className="mt-2">
            <img src={image} alt="Upload Preview" className="w-full h-auto rounded-lg" />
          </div>
        )}
        <div className="flex justify-between items-center mt-2">
          <label className="cursor-pointer text-blue-500 hover:text-blue-600">
            <FaCamera size={24} />
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
          <span className="text-sm text-gray-500">{characterCount}/280</span>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={characterCount === 0 && !image}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
