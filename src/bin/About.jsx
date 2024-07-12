import React from "react";

const About = () => {
  return (
    <>
      <div className=" -mt-4 w-[] flex overflow-hidden -z-10">
        {/* left part */}
        <div className=" bg-red-600 w-6/12 p-8 ">
          <h2 className=" font-sans font-bold text-xl my-6 -mt-5 ml-10">
            About
          </h2>
          <h2 className=" font-sans font-bold text-6xl my-6 px-10">
            BEAUTY BEYOND FACES
          </h2>
          <div className=" flex gap-10">
            <img
              loading="lazy"
              className=" w-[290px] h-[390px] ml-10  object-cover border-2 border-black "
              src="https://res.cloudinary.com/davqae3ky/image/upload/v1719054862/zgzudukdvyiqaf8tuslg.jpg"
            />
            <p className=" w-3/12 -ml-4 pt-60 text-xs leading-4 tracking-widest font-sans font-semibold  ">
              A PASSION PRJECT, THAT IS DEDICATED TO DEVELOPING AND SCOUTING NEW
              FACES. HELPING THEM BECOME THE NEW GENERATION OF SUPERMODELS.{" "}
            </p>
          </div>
        </div>
        {/* right part */}
        <div className=" w-1/2">
          {/* <h2 className=' text-7xl p-4 mb-10'>FACES</h2> */}
          <h2 className=" ml-16 font-bold  text-4xl tracking-tighter text-gray-700 leading-tight cursor-pointer mx-8 mt-8 mb-10 font-sans ">
            {/* FACES */}
          </h2>
          <p className=" px-10 py-8 mx-8 my-4 text-xs leading-4 tracking-widest font-sans font-medium text-black  ">
            WELCOME TO HORA, A PROJECT COMMITTED TO SHEDDING LIGHT ON THE
            UNDERREPRESENTED VOICES WITHIN THE MALE MODELING INDUSTRY. FACES IS
            DEDICATED TO THE BEAUTY OF DIVERSITY, RESEARCH, AND CHALLENGING THE
            STATUS QUO IN FASHION. THIS INITIATIVE WAS BORN FROM EXPERIENCE
            WORKING IN THE INDUSTRY AS A BOOKING ASSISTANT, INTRIGUED BY THE
            CONCEPT OF BEAUTY AND EAGER TO UNDERSTAND THE INDUSTRY'S PERCEPTION
            OF IT, ESPECIALLY THE ROLE DIVERSITY PLAYS. AT FACES, WE RECOGNIZE
            THE PROFOUND IMPACT OF BEAUTY STANDARDS AND THE LACK OF
            REPRESENTATION IN SHAPING SOCIETAL NORMS AND INDIVIDUAL
            SELF-PERCEPTION. THROUGH THIS PLATFORM, WE AIM TO ADDRESS THE
            SYSTEMIC ISSUES WITHIN THE MALE MODELING INDUSTRY, PARTICULARLY
            CONCERNING DIVERSITY AND EUROCENTRIC BEAUTY IDEALS.
            <br />
            <br/>
            OUR WEBSITE OFFERS EDUCATION, DISCUSSION, NEWS, AND INSIGHTS INTO
            THE INDUSTRY, WHERE PROFESSIONALS AND ENTHUSIASTS CAN COME TOGETHER
            TO ENCOURAGE CHANGE AND SHARE A VISION FOR THE FUTURE. JOIN US ON
            THIS JOURNEY AS WE CHALLENGE CONVENTIONS, ELEVATE DIVERSE
            NARRATIVES, AND WORK TOWARDS A FUTURE WHERE EVERY INDIVIDUAL FEELS
            SEEN, VALUED, AND REPRESENTED IN THE MALE MODELING INDUSTRY AND
            BEYOND. TOGETHER, WE CAN REDEFINE STANDARDS OF BEAUTY, CULTIVATE
            INCLUSIVITY, AND PAVE THE WAY FOR A MORE EQUITABLE AND DIVERSE
            FASHION LANDSCAPE.
          </p>
        </div>
      </div>
      <div
        className=" w-[1450px] mx-auto "
        style={{ position: "relative", zIndex: 10 }}
      >
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: "2px",
            borderColor: "#000000",
          }}
        />
      </div>
    </>
  );
};

export default About;
