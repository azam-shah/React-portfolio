import React from "react";
import data from "../../src/skillData.json";

function Skills() {
  console.log("data", data);

  return (
    <div className="flex justify-center text-center mt-40">
      <div className="lg:w-[60%] w-[90%]">
        {data.map((item) => (
          <div key={item.id} className="mb-10">
            <div className="flex justify-center">
                <div className="lg:w-[80%] w-[90%]">
                   <h1 className="lg:text-7xl text-5xl text-white font-semibold">{item.head}</h1>
                   <p className="lg:text-2xl text-xl mt-6 text-white">{item.pera}</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
              <div className="text-center border border-blue-600 rounded-xl py-7 ">
                <img
                  src={item.image1}
                  alt="HTML"
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-white mt-4 text-lg">HTML</p>
              </div>
              <div className="text-center border border-blue-600 rounded-xl py-7">
                <img
                  src={item.image2}
                  alt="CSS"
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-white mt-4 text-lg">CSS</p>
              </div>
              <div className="text-center border border-blue-600 rounded-xl py-7">
                <img
                  src={item.image3}
                  alt="Bootstrap"
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-white mt-4 text-lg">Bootstrap</p>
              </div>
              <div className="text-center border border-blue-600 rounded-xl py-7">
                <img
                  src={item.image4}
                  alt="JavaScript"
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-white mt-4 text-lg">JavaScript</p>
              </div>
              <div className="text-center border border-blue-600 rounded-xl py-7">
                <img
                  src={item.image5}
                  alt="React"
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-white mt-4 text-lg">React</p>
              </div>
              <div className="text-center border border-blue-600 rounded-xl py-7">
                <img
                  src={item.image6}
                  alt="Firebase"
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-white mt-4 text-lg">Firebase</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
