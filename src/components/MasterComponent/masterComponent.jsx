import React from "react";
import HeroSection from "../Hero-Section/HeroSection";
import Courses from "../Courses-section/Courses";
import LearnCode from "../Why-learn-code/learnCode";
import RegsitrationForm from "../Registration/registrationForm";
import Curriculums from "../Curriculum/curriculums";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MasterComponent = () => {
  return (
    <>
      <HeroSection />
      <Courses />
      <LearnCode />
      <ToastContainer autoClose={6000} />
      <RegsitrationForm />
      <Curriculums />
      <Footer />
    </>
  );
};

export default MasterComponent;
