import React, { useEffect, useState } from "react";
import FormImages from "./FormImages";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ModelForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [fullBodyImage, setFullBodyImage] = useState(null);
  const [waistImage, setWaistImage] = useState(null);
  const [shoulderImage, setShoulderImage] = useState(null);
  const [shoulderThreeImage, setShoulderThreeImage] = useState(null);
  const [checked, setChecked] = useState(false);



  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFullBodyImage(reader.result); // Set the image URL as state
    };

    if (file) {
      reader.readAsDataURL(file); // Convert image to data URL
    }
  };

  return (
    <div>
      <FormImages />
      <form
        action="https://getform.io/f/paqgyqla"
        method="POST"
        encType="multipart/form-data"
        className=" mt-20 font-sans  max-w-[1000px] max-h-[90vh] overflow-y-auto rounded-md border-gray-300 border-2 mx-auto my-10"
      >
        <div className=" m-3 px-20 py-5 text-center text-3xl font-semibold tracking-wide text-gray-600 border-b-4">
          Become a Model
        </div>
        <div className=" w-11/12">
          <div className=" flex gap-4 flex-col m-3 px-20 py-5">
            <label className=" font-semibold" htmlFor="">
              First Name
            </label>
            <input
              name="first-name"
              className=" border-gray-400  border-b-2 focus:outline-none"
            />
          </div>
          <div className="  flex flex-col m-3 px-20 py-5">
            <label className=" font-semibold" htmlFor="">
              Last Name
            </label>
            <input
              name="last-name"
              className="  border-gray-400   border-b-2 focus:outline-none"
            />
          </div>
          <div className="  flex flex-col m-3 px-20 py-5">
            {/* <label htmlFor=''>country Name</label> */}
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          <div className=" flex flex-col m-3 px-20 py-5">
            <label className=" font-semibold" htmlFor="">
              Instagram
            </label>
            <input
              name="instagram"
              className="  border-b-2 focus:outline-none"
            />
          </div>
          <h2 className=" font-bold text-slate-600 text-2xl m-3 px-20 py-5">
            Measurements:
          </h2>
          <div className=" flex flex-col m-3 px-20 py-5">
            <label className=" font-semibold" htmlFor="">
              size units
            </label>
            <input
              name="size-units"
              className=" border-gray-400   border-b-2 focus:outline-none"
            />
          </div>

          <div className=" w-11/12 flex flex-wrap">
            <div className=" flex flex-col m-3 px-20 py-5">
              <label className=" font-semibold" htmlFor="">
                Height
              </label>
              <input
                name="height"
                className="  border-gray-400  border-b-2 focus:outline-none"
              />
            </div>
            <div className=" flex flex-col m-3 px-20 py-5">
              <label className=" font-semibold" htmlFor="">
                chest
              </label>
              <input
                name="chest"
                className="  border-gray-400  border-b-2 focus:outline-none"
              />
            </div>{" "}
            <div className=" flex flex-col m-3 px-20 py-5">
              <label className=" font-semibold" htmlFor="">
                Waist
              </label>
              <input
                name="waist"
                className="  border-gray-400  border-b-2 focus:outline-none"
              />
            </div>{" "}
            <div className=" flex flex-col m-3 px-20 py-5">
              <label className=" font-semibold" htmlFor="">
                Hips
              </label>
              <input
                name="hips"
                className="  border-gray-400  border-b-2 focus:outline-none"
              />
            </div>{" "}
            <div className=" flex flex-col m-3 px-20 py-5">
              <label className=" font-semibold" htmlFor="">
                Shoes
              </label>
              <input
                name="shoes"
                className=" border-gray-400   border-b-2 focus:outline-none"
              />
            </div>
          </div>
          <h2 className=" font-bold text-slate-600 text-2xl m-3 px-20 py-5">
            Add Photos of Yourself
          </h2>

          <div className=" flex  mx-20 overflow-y-hidden overflow-x-hidden font-semibold  ">
            <div className=" w-[180px] ">
              <p>Full Body</p>
              <div className=" my-2 w-[150px] h-[200px] border text-center">
                {fullBodyImage && <img className=" h-full w-full object-cover" src={fullBodyImage} />}
              </div>
              <input
                onChange={handleImage}
                className=" hidden"
                type="file"
                id="full-body"
                name="full-body"
              />
              <label
                className=" text-center font-semibold cursor-pointer text-3xl"
                htmlFor="full-body"
              >
                +
              </label>
            </div>
            <div className=" w-[200px]">
              <p>Waist UP</p>
              <div className=" my-2 w-[150px] h-[200px] border text-center">
                {waistImage && <img className=" h-full w-full object-cover" src={waistImage} />}{" "}
              </div>
              <label
                className=" cursor-pointer text-center font-semibold text-3xl"
                htmlFor="waist-up"
              >
                +
              </label>
              <input
                onChange={(event) => {
                  const file = event.target.files[0];
                  // console.log(file);

                  const reader = new FileReader();

                  reader.onload = () => {
                    setWaistImage(reader.result); // Set the image URL as state
                  };

                  if (file) {
                    reader.readAsDataURL(file); // Convert image to data URL
                  }
                }}
                className=" hidden"
                type="file"
                id="waist-up"
                name="waist-up"
              />
            </div>{" "}
            <div className=" w-[200px]">
              <p>Shoulder Up Front</p>
              <div className=" my-2 w-[150px] h-[200px] border text-center"> {shoulderImage && <img className=" h-full w-full object-cover" src={shoulderImage} />} </div>
              <label
                className=" cursor-pointer text-center font-semibold text-3xl"
                htmlFor="shoulder-upfront"
              >
                +
              </label>
              <input
                onChange={(event) => {
                  const file = event.target.files[0];
                  // console.log(file);

                  const reader = new FileReader();

                  reader.onload = () => {
                    setShoulderImage(reader.result); // Set the image URL as state
                  };

                  if (file) {
                    reader.readAsDataURL(file); // Convert image to data URL
                  }
                }}
                className=" hidden"
                type="file"
                id="shoulder-upfront"
                name="shoulder-upfront"
              />
            </div>{" "}
            <div className=" w-[200px]">
              <p>Shoulder Up 3/4</p>
              <div className=" my-2 w-[150px] h-[200px] border text-center"> {shoulderThreeImage && <img className=" h-full w-full object-cover" src={shoulderThreeImage} />} </div>
              <label
                className=" cursor-pointer text-center font-semibold text-3xl"
                htmlFor="shoulder-up3/4"
              >
                +
              </label>
              <input
                onChange={(event) => {
                  const file = event.target.files[0];
                  // console.log(file);

                  const reader = new FileReader();

                  reader.onload = () => {
                    setShoulderThreeImage(reader.result); // Set the image URL as state
                  };

                  if (file) {
                    reader.readAsDataURL(file); // Convert image to data URL
                  }
                }}
                className="  hidden"
                type="file"
                id="shoulder-up3/4"
                name="shoulder-up3/4"
              />
            </div>
          </div>

          <div className=" flex items-baseline gap-2 flex-row m-3 px-20 py-5">
            <input
              id="terms"
              name="terms"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
              className=""
              type="checkbox"
            />
            <label className=" cursor-pointer text-sm text-gray-500" htmlFor="terms">I have read all the terms and conditions.</label>
          </div>

          <button
            type="submit"
            className={`${
              !checked ? "pointer-events-none" : ""
            } mx-20 px-20 mb-10  py-2 bg-gray-700 text-white  rounded-md mr-auto `}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModelForm;
