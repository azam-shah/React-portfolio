import React from 'react';
import data from "../../src/aboutData.json";

function About() {
  console.log("data", data);

  const handlehire = () =>{
    const contactSection = document.getElementById('Contact');
    if(contactSection){
      contactSection.scrollIntoView({behavior : 'smooth'});
    }
  };

  return (
    <div className="flex justify-center items-center lg:mt-52 mt-56">
      <div className="w-[90%]">
        {data.map((item) => (
          <div key={item.id} className="text-white flex justify-between lg:flex-row flex-col-reverse">
            {/* Left Section */}
            <div className='lg:mt-0 mt-28'>
              <img
                src={item.pic}
                alt={item.title}
                className="lg:w-80 lg:h-80 w-full h-full rounded-full object-cover border-4 border-purple-300 shadow-lg"
              />
            </div>

            {/* Right Section */}
            <div className='lg:w-[65%] w-[100%]'>
              <h3 className="lg:text-xl text-3xl font-semibold">{item.title}</h3>
              <h1 className="lg:text-5xl md:text-6xl text-4xl font-bold mt-2">{item.profession}</h1>
              <p className="mt-4 lg:text-lg text-2xl leading-relaxed w-[100%]">{item.description}</p>
              <button onClick={handlehire} className="lg:mt-6 mt-9 bg-blue-900 text-white lg:text-lg text-2xl lg:px-12 lg:py-3 px-16 py-4 rounded hover:bg-blue-700 transition">
                {item.Hire}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
