import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import ScoutingPopUp from "./ScoutingPopUp";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

// function Responsive() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className=''>

//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



const Scouting = () => {
  // const navigate = useNavigate();
  const [scoutingData, setScoutingData] = useState([]);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const navigate = useNavigate();
  const isUser = useSelector((store) => store.user.isUser)


  const handleAddBlog = () => {
    setLoginPopUp(true);
  };

  const closePopUp = () => {
    setLoginPopUp(false);
    window.location.reload();
  };
  const fetchData = async () => {
    try {
      const response = await fetch('https://blogbackend-qdow.onrender.com/scouting');
      const jsonData = await response.json();
      setScoutingData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   if(scoutingData.length<=0){
    console.log(scoutingData.length)
    fetchData()
   }
  }, []);

  const handleDelete = async (id) => { // Assuming _id is passed as an argument

    console.log("inside news handel delete")
    try {
        const response = await fetch(`https://blogbackend-qdow.onrender.com/scouting/${id}`, {
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
        // navigate("/scouting")
        // Handle UI updates or other actions upon successful deletion
    } catch (error) {
        console.error('Error deleting post:', error.message);
        // Handle error (e.g., show error message to the user)
    }
};

  return (
    <div>
      <div className=" m-3 p-3  ">
        <h1 className=" font-bold text-2xl m-2 font-sans ">Scouting</h1>
        <div className=" max-w-[200px] mx-auto"> 
        {/* <img className=" w-[100px]" src='/image-1@2x.png' /> */}
        {/* <h2 className=' ml-16 font-bold  text-3xl tracking-tighter text-gray-700 leading-tight cursor-pointer mx-8  '>FACES</h2> */}

         </div>
        <h2 className="font-bold text-2xl m-2 pt-8 pb-4 font-sans">The New Faces</h2>
      </div>
      <div className=" max-w-[1200px] mx-auto">
        <Carousel responsive={responsive}>
          {scoutingData.length>0 && scoutingData.map((d) => (
            <div className=" w-[300px] relative" key={d._id}>
              <img loading="" className=" w-full h-[400px] object-cover z-10 " src={d.imageUrl} />
              <p className=" text-center p-2 font-semibold font-sans text-xl">{d.title}</p>
             { isUser && <button onClick={()=>handleDelete(d._id)} className=" px-2 py-1 hover:bg-gray-600 bg-gray-500 text-white absolute z-20 top-0 right-0 rounded-md text-xs">Delete</button>}
            </div>
          ))}
        </Carousel>
      </div>
      <div className=" text-center mr-24">
        <button
          className=" m-5 px-4 py-2 border-2 border-black hover:bg-white hover:border-2 hover:border-black hover:text-black duration-75 transition-all font-sans bg-black text-white font-bold w-32 mx-auto rounded-md"
          onClick={() => {
            navigate("/form");
          }}
        >
          ENTER
        </button>
        {/* {
          <button
            onClick={handleAddBlog}
            className="bg-blue-500 px-6 py-2 text-white rounded-md"
          >
            Add Blog
          </button>
        } */}
        {loginPopUp && <ScoutingPopUp closePopUp={closePopUp} />}
      </div>
      {isUser && <div onClick={handleAddBlog}  className=' cursor-pointer  flex items-center bg-blue-600 px-4 py-2 text-white absolute top-32 right-16 text-2xl rounded-md border-black hover:bg-blue-800 hover:text-gray-100 transition-all duration-100 '>
<h2>Add</h2>
<FaPlus  />
</div>}
    </div>
  );
};

export default Scouting;
