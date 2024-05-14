import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How <span style={{"color":"#D84315"}}>J</span><span style={{"color":"blue"}}>ob</span><span style={{"color":"green"}}>P</span><span style={{"color":"brown"}}>oint</span> Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
             Step 1:First Create Account<br/> 
               i.As a Employee <br/>
               or<br/>
               ii.As a Job Seeker

              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
               i.If you Are a Employe You Can Post The Job or Check User Profile Who have to Apply For Your Job<br/>
               ii.If you are Job seeker then you See All Jobs and Apply for job 
               </p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
