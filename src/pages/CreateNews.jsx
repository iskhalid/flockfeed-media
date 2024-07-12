import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editor from "../Editor";
import { useSelector } from "react-redux";

export default function CreateNews() {
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()

  const isUser = useSelector((store) => store.user.isUser);

  useEffect(() => {
      if(!isUser) {
        navigate("/login")
      }
  },[])


  async function createNewPost(ev) {

    if(loading) return;
    setLoading(true)


    const data = new FormData();
    data.set("title", title);
    data.set("heading", heading);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch('https://blogbackend-qdow.onrender.com/post', {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
      setLoading(false)
    }
  }

  if (redirect) {
    return <Navigate to={"/news"} />;
  }

  console.log();
  return (
    <form onSubmit={createNewPost} className=" mt-10 max-w-[800px] mx-auto">
      <input
        required
        className="myinput"
        type="text"
        placeholder={"Heading"}
        value={heading}
        onChange={(ev) => setHeading(ev.target.value)}
      />
      <input
        required
        className="myinput"
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      {/* <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} /> */}
      <input
        className="myinput"
        required
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
      {/* <Editor  value={content} onChange={setContent} /> */}
      <textarea
        required
        className="w-full myinput h-[40vh] resize-none p-2 text-base border border-gray-300"
        rows={4}
        cols={50}
        placeholder="Write the content"
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
      />
      <button
        className={`bg-blue-600 text-white px-8 py-3 rounded-lg ${loading?'cursor-not-allowed opacity-50':'cursor-pointer'} `} 
        style={{ marginTop: "10px" }}
      >
        Create post
      </button>
    </form>
  );
}
