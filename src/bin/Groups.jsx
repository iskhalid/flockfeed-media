import { useNavigate } from "react-router-dom";
import TextImg from "../assets/image@2x.png";
import { MdArrowForwardIos } from "react-icons/md";


const Groups = () => {
  const Navigate = useNavigate();
  const handleNavigate = () => {
    Navigate("/about");
  };

  return (
    <div className="absolute right-[480px] bottom-[0px] bg-white w-[747px] flex flex-col items-start justify-start pt-1 pb-10 pr-6 pl-[41px] box-border gap-[130px] max-w-full text-left text-14xl text-gray-200 font-inter">
      <div className="w-[748px] h-[799px] relative bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[63px] max-w-full">
        <h2 className=' absolute -right-16 -top-80 transform rotate-90 ml-16 font-bold  text-8xl tracking-tighter text-gray-900 leading-tight cursor-pointer mx-8 mt-8 mb-10 font-sans '>hōra</h2>
          <div
            onClick={handleNavigate}
            className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[113px] z-[1] mq450:text-xl mq767:text-7xl cursor-pointer "
          >
            <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative inline-flex items-center text-black font-bold transition-colors duration-300 ease-in-out group-hover:text-white">
      <span className="mr-1 text-3xl tracking-tighter font-sans">ENTER</span>
      <MdArrowForwardIos className="text-black group-hover:text-white" />
    </span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="w-[279px] flex flex-row items-start justify-start gap-[3px] text-xl text-gray-400">
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
          <div className="w-[190px] flex flex-row items-start justify-start py-0 px-px box-border">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
              <div className="w-[27px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative z-[1]">RE</div>
              </div>
              <div className="w-[113px] uppercase relative text-base text-gray-500 flex items-center shrink-0 z-[1]">
                Defining
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-gray-600 z-[1]">
            World oF BeＡuTy
          </div>
        </div>
        <div className="w-[45px] relative text-xl text-gray-300 flex items-center shrink-0 z-[1] mq450:text-base">
          the
        </div>
      </div> */}
      <div className=" font-sans  font-bold tracking-widest text-xl text-gray-600">
        <pre> RE    DEFINING  <br></br> 
           THE WORLD OF BEAUTY
     </pre> </div> 
    </div>
  );
};

export default Groups;
