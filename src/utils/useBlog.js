import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../app/dataSlice";

export const useBlog = () => {
  const dispatch = useDispatch();
  const blog = useSelector((store) => store.data.blog);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://flockfeed-media.onrender.com/blogs');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      dispatch(addBlog(jsonData));
      } catch (error) {
        console.log(error);
      }
      
    };

   !blog && fetchData();
  }, []); // Pass the URL as a dependency to the useEffect hook

  // Return the data, loading, and error states
};