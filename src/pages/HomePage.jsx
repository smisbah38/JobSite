import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewButton from "../components/ViewButton";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewButton />
    </>
  );
};

export default HomePage;
