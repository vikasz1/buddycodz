import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./registrationForm.css";
const API = process.env.REACT_APP_API_KEY;
// const API = "http://localhost:5000/api/data";
const RegsitrationForm = () => {
  let name, value;
  // const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    parentName: "",
    studentName: "",
    phone: "",
    message: "",
    qualification: "",
    hasLaptop: "",
  });

  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    const data = { name, value };
    console.log(data);
    setUser({ ...user, [name]: value });
    console.log(data.name);
    console.log(data.value);
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      email,
      parentName,
      studentName,
      phone,
      message,
      qualification,
      hasLaptop,
    } = user;

    axios
      .post(API, user)
      .then((response) => {
        if (response.status === 200) {
          console.log("User saved successfully.");
          toast.success("Success");
        } else {
          console.log("Error saving user.");
          toast.success("Failed");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        toast.error(error.response.data);
      });
  };

  return (
    <>
      <ToastContainer />
      <section id="register-class">
        <form className="mb-5 mt-3">
          <div className="text-center">
            <h1 className="bg-primary text-white p-3">
              Book a Free class Now!
            </h1>
          </div>
          <div className="container border-primary p-4">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="StudentName">Enter Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    className="form-control"
                    id="StudentName"
                    value={user.studentName}
                    onChange={(e) => handleInputs(e)}
                    placeholder="Enter Student Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ParentName">Enter Parent's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.parentName}
                    onChange={handleInputs}
                    name="parentName"
                    id="ParentName"
                    placeholder="Enter Parent's Name"
                  />
                </div>
              </div>
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="HasLaptop">Do you have Laptop?</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.hasLaptop}
                    name="hasLaptop"
                    onChange={handleInputs}
                    id="HasLaptop"
                    placeholder="Yes/No"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="HighestQualification">
                    Highest Qualification
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInputs}
                    value={user.qualification}
                    name="qualification"
                    id="HighestQualification"
                    placeholder="5th/6th...etc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="PhoneNumber">Phone Number</label>
                  <input
                    type="text"
                    onChange={handleInputs}
                    value={user.phone}
                    name="phone"
                    className="form-control"
                    id="PhoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-sm">
                <div className="form-group h-75">
                  <label htmlFor="Messege">Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="message"
                    value={user.message}
                    onChange={handleInputs}
                    id="Messege"
                    placeholder=""
                  />
                </div>
                <div className="form-group"></div>
                <div className="form-group text-center">
                  <button
                    className="btn btn-primary submitbtn"
                    onClick={PostData}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2 btn-primary"></div>
        </form>
      </section>
    </>
  );
};

export default RegsitrationForm;
