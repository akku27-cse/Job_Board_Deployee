import React, { useContext } from "react";
import { Context } from "../../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill, RiProfileLine } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; Created By @Santu Apr-MAy-2024</div>
      <div>
        <Link
          to={
            "https://www.facebook.com/people/AK-A-Sh/pfbid02JkfGTyubRYcu2qRMPqTTXvVym5tVTC89S6e7d1f4jYYszQsGVRBdQshStLuQWV8Cl/"
          }
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/akku27-cse"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/santu-jana-29a923257"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.instagram.com/ak_assh/?igshid=MzNlNGNkZWQ4Mg%3D%3D"}
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
        <Link to={"https://santuprotfolio.web.app/"} target="_blank">
          <RiProfileLine />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
