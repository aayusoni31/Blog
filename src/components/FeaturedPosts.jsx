import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Image";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Main first post  */}
      <div className="w-full lg:w/12 flex flex-col gap-4">
        {/* Image */}
        <Image src="1.jpg" className="rounded-3xl object-cover" w="895" />
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
      {/* Main other post  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="2.jpg"
              className="rounded-3xl object-cover w-full h-full 
            "
              w="298"
            />
          </div>
          {/* for details and title */}
          <div className="w-2/3">
            {/* title */}
            <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              hkjf jdsjjfk s skfd fj dssfnkjs fkn fj ndkfn
            </Link>
          </div>
        </div>
        {/* third */}

        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="3.jpg"
              className="rounded-3xl object-cover w-full h-full 
            "
              w="298"
            />
          </div>

          {/* for details and title */}
          <div className="w-2/3">
            {/* title */}
            <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              hkjf jdsjjfk s skfd fj dssfnkjs fkn fj ndkfn
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="4.jpg"
              className="rounded-3xl object-cover w-full h-full 
            "
              w="298"
            />
          </div>
          {/* for details and title */}
          <div className="w-2/3">
            {/* title */}
            <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              hkjf jdsjjfk s skfd fj dssfnkjs fkn fj ndkfn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
