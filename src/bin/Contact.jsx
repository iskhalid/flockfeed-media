import React from 'react'

const Contact = () => {
  return (
    <>
  <div className=' mb-40 font-sans mt-20 max-w-[1000px] justify-center flex mx-auto '>
    <div className=' my-4 py-6 font-thin text-gray-600 font-sans uppercase text-2xl'>
        <h2 className=' ml-[8px]'>Want to join us Or</h2>
        <h2>Want to contribute</h2>
        <p className=' lowercase ml-5  mt-20'>contact@hora.com</p>
    </div>
    {/* <img className=' w-[310px] h-[410px] object-cover  ' src='/contactImage.png' /> */}
    </div>
    <div className=' w-full mt-16  ' style={{ position: 'relative', zIndex: 10 }}>
  <hr
    style={{
      color: '#000000',
      backgroundColor: '#000000',
      height: '3px',
      borderColor: '#000000',
    }}
  />
</div>
<div className=' font-sans text-center m-4 p-4'>
<p className=' font-bold text-gray-600 p-2 mb-2 text-2xl'>hora</p>
<p className=' '>INSTAGRAM</p>
<p>TWITTER</p>
</div>

    </>
  
  )
}

export default Contact