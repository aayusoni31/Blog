import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Image";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first post  */}
      <div className="w-full lg:w/12 flex flex-col gap-4">
        {/* Image */}
        <Image src="1.jpg" className="rounded-3xl object-cover" />
        {/* details  */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg"> Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
          to="/test"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
          autem natus.
        </Link>
      </div>
      {/* other post  */}
      <div className="w-full lg:w/12 flex flex-col gap-4">others</div>
    </div>
  );
};

export default FeaturedPosts;
