import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiAccenture, SiMeta, SiTcs, SiTesla, SiWipro } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Kolkata",
      openPositions: 105,
      icon: <FaMicrosoft />,
    },
   
    {
      id: 2,
      title: "Apple",
      location: "India",
      openPositions: 75,
      icon: <FaApple />,
    },
    {
      id: 3,
      title: "TCS",
      location: "India",
      openPositions: 99,
      icon: <SiTcs/>,
    },
    {
      id: 4,
      title: "Accenture",
      location: "Kolkata",
      openPositions: 360,
      icon: <SiAccenture />,
    },
    
    {
      id: 5,
      title: "Wipro",
      location: "India,USA",
      openPositions: 14,
      icon: <SiWipro />,
    },
    
    {
      id: 6,
      title: "Meta",
      location: "Chenni",
      openPositions: 100,
      icon: <SiMeta />,
    },
    
   

  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
