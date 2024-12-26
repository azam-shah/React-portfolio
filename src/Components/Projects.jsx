import React from "react";
import data from "../../src/projectData.json";

function Projects() {
  console.log("data", data);

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%]">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-blue-950 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-3 mt-10"
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg  border border-blue-900"
              />
            </div>
            <div className="pt-6 pb-6">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300 mt-4">{item.description}</p>
              <a
                href={item.url} // Dynamically pass the URL
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Prevent security vulnerabilities
                className="mt-6 inline-block px-4 py-2 bg-blue-900 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
              >
                {item.btn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
