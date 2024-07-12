import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../app/userSlice';
import { selectDarkMode } from '../app/themeSlice';
import { MdArrowBackIosNew } from "react-icons/md";

// import { updateProfile } from '../features/profile/profileSlice'; // Adjust the path as needed

const ProfileEdit = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { data } = user;
  const navigate = useNavigate();
  const darkMode = useSelector(selectDarkMode);


  const [fullname, setFullname] = useState(data.fullname);
  const [profilePicture, setProfilePicture] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState(null); // For storing the file

  const handleFileChange = (ev) => {
    console.log(ev.target.files[0])
    const file = ev.target.files[0];
const maxSizeInBytes = 5 * 1024 * 1024; // 5MB (example)

if (file.size > maxSizeInBytes) {
alert("File size exceeds the limit (5MB max)");
// Optionally, you can reset the file input to clear the selection
ev.target.value = null;
} else {
// Proceed with the upload or further processing
setNewProfilePicture(ev.target.files);
setProfilePicture(URL.createObjectURL(ev.target.files[0]));
}
  };

  const handleSave = async (ev) => {
    ev.preventDefault();

    if (loading) return;

    // Check if fullname or profile picture has changed
    if (fullname === data.fullname && !newProfilePicture) {
      alert("No changes detected");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.set("fullname", fullname);
    if (newProfilePicture) {
      formData.set("file",newProfilePicture[0]);
    }
    
    formData.set("userId", data._id);

    try {
      const response = await fetch('https://flockfeed-media.onrender.com/edit-profile', {
        method: "PATCH",
        body: formData,
        credentials: "include",
      });
      if (response.ok) {
        const updatedProfile = await response.json();
        // console.log(updatedProfile)
        dispatch(addUser(updatedProfile));
        navigate('/profile/' + data._id);
        // alert("Profile updated successfully");
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`h-screen pt-6 bg-gray-100 ${darkMode ? 'dark-mode' : ''}`}>
    <div className={`max-w-lg mx-auto p-6 border  bg-white shadow-md rounded-lg ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="text-2xl text-center font-semibold mb-4">Edit Profile</h2>
      <div className="flex flex-col items-center">
        <div className="mt-8">
          <img
            src={profilePicture || data.profilePicture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSzhiQWKfmkIEgC4nK9ShYjiWz6-DJgxeNyMoBLLabBo1e5kzMq_TE9_rFzSJpPow264&usqp=CAU'} // Default profile picture URL
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border"
          />
        </div>
        <div className="text-start p-6 mt-20 w-full">
          <label className="cursor-pointer text-blue-500 hover:text-blue-600">
            <FaCamera size={24} />
            <input
              type="file"
              accept="image/*"
              className="mb-4 hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="font-bold my-3">Full Name</label>
          <input
            type="text"
            className="w-full my-3 mb-4 p-2 border rounded"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <button
          onClick={handleSave}
          className={`${loading?'cursor-not-allowed opacity-50':'cursor-pointer'}w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600`}
        >
          Save Changes
        </button>
      </div>
      <Link to={'/profile/' + data._id}>
        <button className="absolute top-12 text-2xl"><MdArrowBackIosNew/></button>
      </Link>
    </div>
    </div>
  );
};

export default ProfileEdit;
