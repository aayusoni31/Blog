import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
const PostListPage = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl"> Development Blog</h1>
      <button
        onClick={() => setopen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-xl md:hidden "
      >
        {open ? "close" : "Filter or Search"}
      </button>
      <div className="flex gap-8">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
