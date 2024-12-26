import React from 'react';
import data from "../../src/homeData.json";
import pdf from "../pdf/Azam.CV.pdf.pdf";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";


function Home() {
  console.log("data", data);

  const handlebtn = () => {
    const projectSection = document.getElementById('Projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex justify-center pt-12">
        <div className="w-[90%]">
          {data.map((item) => (
            <div key={item.id} className="text-white flex justify-between lg:flex-row flex-col">
              {/* Left Section */}
              <div className="mt-14">
                <h4 className="lg:text-lg text-2xl font-semibold">{item.greeting}</h4>
                <h1 className="lg:text-7xl md:text-8xl text-7xl font-semibold mt-1">{item.name}</h1>
                <p className="lg:mt-5 mt-8 lg:w-[70%] w-[100%] lg:text-lg text-3xl">{item.description}</p>

                {/* Buttons */}
                <div className="flex justify-between lg:flex-row md:flex-row flex-col lg:w-[45%] md:w-[70%] w-[100%] mt-10 lg:gap-0 gap-5">
                  <a
                    href={pdf} // Path to the CV file
                    download="Azam.CV.pdf.pdf" // Custom file name for download
                    className="bg-blue-900 text-white lg:px-7 lg:py-4 px-10 py-5 lg:text-lg text-2xl rounded hover:bg-blue-700"
                  >
                    Download CV
                  </a>

                  <button
                    onClick={handlebtn}
                    className="border text-white lg:px-4 lg:py-2 px-10 py-5 lg:text-lg text-2xl rounded hover:bg-blue-600 hover:border-blue-600"
                  >
                    View My Projects
                  </button>
                </div>


                <div className='lg:w-[25%] w-[60%] flex justify-between mt-8'>
                    {/* Gmail Icon */}
  <div
    className='border border-1 p-2 rounded-full cursor-pointer hover:border-blue-700 hover:bg-blue-700 hover:shadow-2xl'
    onClick={() => window.open('mailto:azamshah8363@gmail.com', '_blank')}
  >
    <BiLogoGmail size={30} />
  </div>

  {/* LinkedIn Icon */}
  <div
    className='border border-1 p-2 rounded-full cursor-pointer hover:border-blue-700 hover:bg-blue-700 hover:shadow-2xl'
    onClick={() => window.open('https://www.linkedin.com/in/azam-shah-b279bb305/', '_blank')}
  >
    <FaLinkedinIn size={30} />
  </div>

  {/* GitHub Icon */}
  <div
    className='border border-1 p-2 rounded-full cursor-pointer hover:border-blue-700 hover:bg-blue-700 hover:shadow-2xl'
    onClick={() => window.open('https://github.com/azam-shah', '_blank')}
  >
    <FiGithub size={30} />
  </div>
</div>




              </div>

              {/* Right Section */}
              <div className="lg:mt-6 mt-16">
                <img
                  src={item.pic}
                  alt={item.name || "Profile Picture"}
                  className="w-full h-full object-cover rounded-full border-4 shadow-lg animate-boxShadow"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <style jsx>{`
                  @keyframes boxShadowAnimation {
                    0% {
                      border-color: blue;
                      box-shadow: 10px 10px 100px 50px blue;
                      transform: translate(0, 0px);
                    }
                    25% {
                      border-color: rgb(239, 244, 11);
                      box-shadow: 10px 10px 100px 50px rgb(239, 244, 11);
                      transform: translate(0, 0px);
                    }
                    50% {
                      border-color: rgb(12, 12, 199);
                      box-shadow: 10px 10px 100px 50px rgb(12, 12, 199);
                      transform: translate(0, 0px);
                    }
                    75% {
                      border-color: rgb(130, 217, 160);
                      box-shadow: 10px 10px 100px 50px rgb(130, 217, 160);
                    }
                    100% {
                      border-color: rgb(50, 55, 205);
                      box-shadow: 10px 10px 100px 50px rgb(50, 55, 205);
                      transform: translate(0, -0px);
                    }
                  }

                  .animate-boxShadow {
                    animation: boxShadowAnimation 5s infinite;
                  }
                `}</style>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
