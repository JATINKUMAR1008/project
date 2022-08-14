import React from "react";
import Image from "next/image";
const Infosection = () => {
  return (
    <div className="mt-[5rem] p-2 w-full">
      <div className="my-5">
        <div className="w-full">
          <h1 className="sm:text-6xl font-bold text-3xl sm:text-4xl ">
            Webflow is used by more than 3,500,000 designers and teams to
            create, collaborate on, and scale beautiful websites in a completely
            visual canvas —
            {
              <h1 className="text-blue-600 text-3xl sm:text-4xl">
                {" "}
                no code needed
              </h1>
            }
          </h1>

          <h3 className="text-3xl my-7 sm:text-4xl">
            So everyone can focus on what they do best.
          </h3>
        </div>
        <div className="my-20">
          <div className=" bg-purple-400  ">
            <div className="relative z-10 top-[-2rem] ">
              <div className="flex-col justify-center items-center  ">
                <div className="flex justify-center items-center">
                  <img
                    className=" sm:h-[80vh] shadow-lg h-[20vh] ml-[90%] sm:ml-0  mx-5 sm:mx-0 "
                    src="https://images.pexels.com/photos/11545053/pexels-photo-11545053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Image"
                  />
                </div>
                <div className="relative text-white text-3xl flex justify-center top-[-20rem] items-center backdrop-blur-sm  h-[10vh] ">
                  <h1 className=" ">webflow new way to create your website.</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="m-5">
            <ul className="flex justify-between p-3 text-xl text-blue-500">
              <li className="cursor-pointer border-2 p-2 rounded-lg">
                Documentation.
              </li>
              <li className="cursor-pointer border-2 p-2 rounded-lg">
                Markerters.
              </li>
              <li className="cursor-pointer border-2 p-2 rounded-lg">
                Developers.
              </li>
            </ul>
          </div>
          <div className="m-5">
            <p className="m-3 max-width-screen-sm text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias cumque provident delectus libero excepturi officiis commodi voluptatibus doloribus rem nisi possimus fugit id quam expedita, natus porro dignissimos deleniti? Cupiditate?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infosection;
