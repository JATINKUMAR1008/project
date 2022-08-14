import React from "react";

const FirstPage = () => {
  return (
    <div className=" w-[100%]">
    <div className=" bg-black">
      <div className="p-9 text-white my-4 gap-4 md:flex items-center">
        <div className="text-white w-screen-md">
          <h1 className="sm:text-8xl font-bold justify-center items-center my-4 text-3xl">
            The site you want -- without the dev time
          </h1>
        </div>
        <div>
        <h3 className="text-xl my-5 p-4 sm:text-3xl">
          Your website should be a marketing asset, not an engineering
          challenge.
        </h3>
        <button className="bg-blue-500 sm:p-5 text-xl rounded-xl p-3 ">
          Start Building
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default FirstPage;
