import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./style.css";
import profile from "../../assets/profile.png";
import { ProfileModel } from "../../models/ProfileModel";
// import axios from 'axios';

const url = "http://localhost:3001/profile";

const Profile: React.FC = () => {
  const value = "Profile";
  const [formState, setFormState] = useState({
    displayName: "",
    firstName: "",
    lastName: "",
    about: "",
    areaOfInterest: {
      designer: false,
      developer: false,
      projectManager: false,
      sales: false,
    },
    profession: "",
    experience: "",
    expertise: "",
    role: "",
  });

  const onchange = (e: any) => {
    console.log("On change called", e.target.type)
    const {id, name, value} = e.target;
    console.log(name);
    if(e.target.type === "checkbox") {
      const id = e.target.id;
      setFormState((prev: any) => {
        return {...prev, areaOfInterest: {...prev.areaOfInterest, [id]: !prev.areaOfInterest[id]}}
      })
    }
    else if(e.target.type === "radio") {
      console.log("else if")
      setFormState((prev) => {
        return {...prev, [name]: id}
      })
    }
    else {
      setFormState((prev) => {
        return {...prev, [name]: value}
      })
    }
    
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formState);
  }

  useEffect(() => {
    console.log("Form State", formState)
  }, [formState])

  return (
    <div className="container">
      <Header heading={value} />
      <div className="card">
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-2 border-right">
              <div className="d-flex flex-column align-items-end">
                <img
                  className="profilePic square mt-2"
                  width="100%"
                  src={profile}
                />
              </div>
            </div>
            <div className="col-md-10">
              <form onSubmit={handleSubmit}>
                <div className="p-3 py-5">
                  <div className="row mt-2">
                    <div className="col-md-4">
                      <label className="labels">Display Name</label>
                      <input
                        type="text"
                        id="displayname"
                        className="form-control"
                        placeholder="display name"
                        value={formState.displayName}
                        name="displayName"
                        onChange={onchange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="labels">First Name</label>
                      <input
                        type="text"
                        id="firstname"
                        className="form-control"
                        placeholder="first name"
                        value={formState.firstName}
                        name="firstName"
                        onChange={onchange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        id="lastname"
                        className="form-control"
                        value={formState.lastName}
                        name="lastName"
                        placeholder="last name"
                        onChange={onchange}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-8">
                      <label className="labels">About yourself</label>
                      <textarea className="form-control" id="about" name="about" value={formState.about} onChange={onchange}></textarea>
                    </div>
                    <div className="col-md-8 p-2">
                      <label className="labels">Your Area of interest</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={formState.areaOfInterest.designer}
                          id="designer"
                          onChange={onchange}
                        />
                        <label className="labels">Designer</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={formState.areaOfInterest.developer}
                          id="developer"
                          onChange={onchange}
                        />
                        <label className="labels">Developer</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="projectManager"
                          onChange={onchange}
                        />
                        <label className="labels">Project Manager</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="sales"
                          onChange={onchange}
                        />
                        <label className="labels">Sales</label>
                      </div>
                    </div>

                    <div className="col-md-8 p-2">
                      <label className="labels">
                        Are you a student or professional
                      </label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="profession"
                          id="student"
                          value={formState.profession}
                          onChange = {onchange}
                        />
                        <label className="labels">Student</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="profession"
                          id="professional"
                          value={formState.profession}
                          onChange = {onchange}
                        />
                        <label className="labels">Professional</label>
                      </div>
                    </div>

                    <div className="card col-md-8 p-2">
                      <div className="col-md-8 p-1">
                        <label className="labels">
                          How much of experience you have?
                        </label>
                        <div className="form-check">
                          <div className="form-check-inline pr-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="experience"
                              id="lessthan5"
                              onChange={onchange}
                              value={formState.experience}
                            />
                            <label className="labels">0-5</label>
                          </div>
                          <div className="form-check-inline pr-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="experience"
                              id="intermediate"
                              onChange={onchange}
                              value={formState.experience}
                            />
                            <label className="labels">5-10</label>
                          </div>
                          <div className="form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="experience"
                              id="senior"
                              onChange={onchange}
                              value={formState.experience}
                            />
                            <label className="labels">10 and Above</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-8 p-1">
                        <label className="labels">What is your expertise</label>
                        <div className="form-check">
                          <div className="form-check-inline pr-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="expertise"
                              id="java"
                              onChange={onchange}
                              value={formState.expertise}
                            />
                            <label className="labels">Java</label>
                          </div>
                          <div className="form-check-inline pr-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="expertise"
                              id="react"
                              onChange={onchange}
                              value={formState.expertise}
                            />
                            <label className="labels">React</label>
                          </div>
                          <div className="form-check-inline pr-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="expertise"
                              id="backend"
                              onChange={onchange}
                              value={formState.expertise}
                            />
                            <label className="labels">Backend</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 p-1">
                        <label className="labels">Mention your role</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formState.role}
                          id="role"
                          name="role"
                          onChange={onchange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      className="btn btn-primary profile-button"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
