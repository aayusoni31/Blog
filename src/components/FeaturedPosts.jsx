import React from "react";
import Image from "./Image";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first post  */}
      <div className="w-full lg:w/12 flex flex-col gap-4">
        {/* Image */}
        <Image src="1.jpg" className="rounded-3xl" />
        {/* details  */}
        {/* title */}
      </div>
      {/* other post  */}
      <div className="w-full lg:w/12 flex flex-col gap-4">others</div>
    </div>
  );
};

export default FeaturedPosts;
