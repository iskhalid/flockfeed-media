import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const FormPopUp = ({ closePopUp }) => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState("");

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/scouting", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      closePopUp();
    }
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="bg-white p-8 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4">
          Add blog with title,description and 
        </h2>

        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          className=" my-4 border border-gray-500 p-2 rounded-lg w-full"
        />

        <input
          className=" my-4  p-2 rounded-lg w-full"
          type="file"
          onChange={(ev) => {
            const file = ev.target.files[0];
            const maxSizeInBytes = 5 * 1024 * 1024; // 5MB (example)

            if (file.size > maxSizeInBytes) {
              alert("File size exceeds the limit (5MB max)");
              // Optionally, you can reset the file input to clear the selection
              ev.target.value = null;
            } else {
              // Proceed with the upload or further processing
              setFiles(ev.target.files);
            }
          }}
        />

        <div className="flex justify-between">
          <button
            onClick={closePopUp}
            className="bg-white bg-opacity-70 px-2 py-1 border"
          >
            Cancel
          </button>
          <button
            onClick={createNewPost}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPopUp;
