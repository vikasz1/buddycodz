import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
import Courses from "./components/Courses-section/Courses";
import LearnCode from "./components/Why-learn-code/learnCode";
import RegistrationForm from "./components/Registration/registrationForm";
import Curriculums from "./components/Curriculum/curriculums";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Courses />
      <LearnCode />
      <ToastContainer autoClose={6000}/>
      <RegistrationForm />
      <Curriculums />
      <Footer />
    </>
  );
}

export default App;
