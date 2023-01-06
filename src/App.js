import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import HeroSection from './components/Hero-Section/HeroSection'
import Courses from './components/Courses-section/Courses'
import LearnCode from './components/Why-learn-code/learnCode';
import RegistrationForm from './components/Registration/registrationForm'
import Curriculums from './components/Curriculum/curriculums';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Courses/>
    <LearnCode/>
    <RegistrationForm/>
    <Curriculums/>
    <Footer/>
    </>
  );
}

export default App;
