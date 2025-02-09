import React from "react";
import "./AboutUs.css"; // Import the CSS file for this component
// wrote this line to invoke dev action pipeline
function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Buddycodz</h1>
        <p>Welcome to Buddycodz - Your Path to Coding Excellence!</p>
        <p>
          Buddycodz is a leading coding school dedicated to providing top-notch
          coding education for aspiring programmers. Whether you're a complete
          beginner or an experienced coder looking to enhance your skills, we've
          got you covered, Yes Bro.
        </p>
        <p>
          Our mission is to make coding accessible to everyone and empower
          individuals to build amazing software solutions. We offer a wide range
          of courses, workshops, and resources to help you succeed in your
          coding journey.
        </p>
        <h2>Meet the Author - Vikas Maury</h2>
        <p>
          Vikas Maury, the founder of Buddycodz, is a passionate coder and
          educator. With over 3 years of experience in the tech industry, Vikas
          is committed to sharing his knowledge and helping others achieve their
          coding goals.
        </p>
        <p>
          His vision for Buddycodz is to create a supportive and vibrant
          community of coders where learning is fun and rewarding.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
