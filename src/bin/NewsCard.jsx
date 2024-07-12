import React from 'react';


const NewsCard = ({data,isUser,handleDelete}) => {
    const{content,heading,imageUrl,title,createdAt,_id} = data; 
    const name = "khalid";
    const shortString = createdAt.slice(0,10);
    // const id = data?._id;

    // console.log(data?._id);
    
  
  // Example usage: Call handleDelete with the post ID
  // const postIdToDelete = 'your-post-id';
  // handleDelete(postIdToDelete);
  
     

  return (
    <div  className=' font-sans shadow-lg m-2 p-10 border-b-[3px] border-black  flex max-w-[1000px] mx-auto gap-12 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:shadow-gray-300 hover:bg-gray-50  duration-100 transition-all ease-in'>
      <div className=' shrink-0'>
        <img loading='lazy' className=' w-[300px] object-cover aspect-square' src={imageUrl} />
      </div>
      <div>
      <div className=' items-center my-3 flex gap-3'>
      <h2 className=' font-bold text-gray-600 text-lg uppercase font-sans'>{heading}</h2><p className=' font-sans text-xs text-gray-400'>{shortString}</p>
      </div>
      <div className=' w-[500px]  ' style={{ position: 'relative', zIndex: 10 }}>
  <hr
    style={{
      color: '#000000',
      backgroundColor: '#000000',
      height: '3px',
      borderColor: '#000000',
    }}
  />
</div>
      <h1 className=' font-sans font-bold text-3xl mb-3'>{title}</h1>
      <p className=' w-[600px] font-sans tracking-wider leading-5'>{content}</p>
     { isUser && <button className=' font-sans mt-6 px-3 py-2 bg-red-600 font-bold rounded-md hover:bg-red-700 hover:text-gray-100 transition-all duration-100 ' onClick={()=>handleDelete(_id)}>Delete</button>}
       

      </div>
    </div>
  )
}

export default NewsCard