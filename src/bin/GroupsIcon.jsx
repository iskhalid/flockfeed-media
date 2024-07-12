import MainPic from "../assets/groups@2x.png"

const GroupsIcon = () => {
    return (
      <img
        className="absolute  top-[0px] right-[0px] bottom-[0px]  w-[470px] object-cover z-[2]"
        loading="lazy"
        alt=""
        src={MainPic}
      />
    );
  };
  
  export default GroupsIcon;