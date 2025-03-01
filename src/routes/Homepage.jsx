import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BreadCrumps  */}
      <div className=" flex gap-4">
        <Link to="/">Home</Link>
        <span>..</span>
        <span className="text-blue-800">Blogs & Articles</span>
      </div>
      {/* Introduction  */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold">
            Create a blog
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Share your story with the world. Create a beautiful, personalized
            blog that fits your brand. Grow your audience with built-in
            marketing tools, or transform your passion into revenue by gating
            access with a paywall.
          </p>
        </div>
        {/* animated button */}
        <Link to="write" className="relative hidden md:block">
          <svg
            viewBox="=0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animateButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m-75, 0 a 75, 75 0 1, 1 150,0 a 75, 75 0 1, 1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto  bg-blue-800 rounded-full h-20 w-20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* Categories */}
      <MainCategories />
      {/* // Featured posts  */}
      <FeaturedPosts />
      {/* // Post List  */}
    </div>
  );
};

export default Homepage;
