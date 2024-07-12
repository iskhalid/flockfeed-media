import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormPopUp from './FormPopUp';

const FormImages = () => {

   

    const [scoutingData, setScoutingData] = useState([]);
    const [loginPopUp, setLoginPopUp] = useState(false);
    const navigate = useNavigate();
  
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
      fetchData();
    }, []);

  return (
    <>
         <div className='max-w-[1000px] mx-auto mt-10 flex flex-wrap gap-5  '>
{scoutingData.length>0 && scoutingData.map((d) => (<div className=' border border-black' key={d._id}>
        <img className=' w-[200px] h-[200px] object-cover ' src={d.imageUrl}/>
</div>))}
     
    </div>
    <h2 className=' text-center text-gray-400 text-2xl mt-16 font-bold my-6 p-2'>Faces of the Moment</h2>
    {/* {
          <button
            onClick={handleAddBlog}
            className="bg-blue-500 px-6 py-2 text-white rounded-md"
          >
            Add Blog
          </button>
        }
        {loginPopUp && <FormPopUp closePopUp={closePopUp} />} */}
    </>
   
  )
}

export default FormImages