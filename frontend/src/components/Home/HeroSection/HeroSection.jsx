import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "12",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "20",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "10",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
        
          <div className="title">
          <h1 > <span style={{"color":"#D84315"}}>J</span><span style={{"color":"blue"}}>ob</span><span style={{"color":"green"}}>P</span><span style={{"color":"brown"}}>oint</span></h1>
            <h1 style={{"color":"blue"}}>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            <p>
              We
              are a technology company on a mission to equip students with
              relevant skills & practical exposure to help them get the best
              possible start to their careers. Imagine a world full of freedom
              and possibilities. A world where you can discover your passion and
              turn it into your career. A world where you graduate fully
              assured, confident, and prepared to stake a claim on your place in
              the world.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
