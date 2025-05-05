import React from "react";
import FormSection from "../UI/FormSection";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <p className="text-xl font-semibold border-l-2 ps-3  inline-block">
          Add Job Application
        </p>
      </div>
      <FormSection />
    </div>
  );
};

export default HeroSection;
