import Groups from "../components/Groups";
import GroupsIcon from "../components/GroupsIcon";
import { useBlog } from "../utils/useBlog";
import { useNews } from "../utils/useNews";

const MainPage = () => {
   useNews();
   useBlog();
  return (
    <div className="w-full relative bg-gray-700 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="h-[100vh] flex-1 relative bg-white max-w-full">
        <Groups />
        {/* <GroupsIcon /> */}
      </main>
    </div>
  );
};

export default MainPage;