import React from "react";
import { useContext } from "react";
import { Context } from "../../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorks from "../HowItWork/HowItWorks";
import PopularCategories from "../PopularCategories/PopularCategories";
import PopularCompanies from "../PopularCompany/PopularCompanies";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;
