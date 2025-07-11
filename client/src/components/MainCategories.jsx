// it is the white line on home page containing the categories

import React from "react";
import { Link } from "react-router-dom";
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 ">
      {/* links */}
      <div className="flex-1 items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Post
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=Fashion"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Fashion
        </Link>
        <Link
          to="/posts?cat=personal"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Personal
        </Link>
        <Link
          to="/posts?cat=News"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          News
        </Link>
        <Link
          to="/posts?cat=Food"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Food
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search  */}

      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/org"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" r="7.5" cy="10.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
