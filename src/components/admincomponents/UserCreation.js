import React from "react";
import { useState } from "react";
import "./componentscss/UserCreation.css"
import { Link} from 'react-router-dom';
import {fetchPostApi} from "../../api/singlecall"

const UserCreation = () => {

  const [values, setValues] = useState({userid:"", username:"", employid:"", department:"", usertype:"", phonenumber:"", email:"", password:"", userstatus:"active"});

  const HanleSubmit = async (event) => {
    event.preventDefault();
    console.log("====finalobj====", values);
    const {userid, username, employid, department, usertype, phonenumber, email,userstatus} = values;
    const password = `${username.substring(0, 3)}${phonenumber.slice(-3)}`;
    const newUser = { userid, username, employid, department, usertype, phonenumber, email, password, userstatus };
   const API="https://automatic-reporting-system.onrender.com/api/addusers"


      try {
        const result = await fetchPostApi(API, newUser);
        console.log(result); // do something with the result
      } catch (error) {
        console.log(error); // handle the error
      }
  

  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setValues({
      ...values,
      usertype: value
    });
    console.log(values);
  };


  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };
  return (
    <div className="usercreation-div">
      <label >
        <h1 className="usercreation-h1">Create New User</h1>
      </label>
      
      <form className="usercreation-form" onSubmit={HanleSubmit}>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">User ID</label>
          <input className="usercreation-input"
            type="text"
            id="userid"
            name="userid"
            value={values.userid}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Username</label>
          <input className="usercreation-input"
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Employee ID</label>
          <input
          className="usercreation-input"
            type="text"
            id="employid"
            name="employid"
            value={values.employid}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Department</label>
          <input
          className="usercreation-input"
            type="text"
            id="department"
            name="department"
            value={values.department}
            onChange={changeHandler}
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">User Type</label>
          <select
          className="usercreation-select"
            id="usertype"
            name="usertype"
            onChange={changeHandler}
            required
          >
            <option className="usercreation-label-2" value="">Select User Type</option>
            <option className="usercreation-input" value="admin">Admin</option>
            <option className="usercreation-input" value="approver">Approver</option>
            <option className="usercreation-input" value="checker">Checker</option>
            <option className="usercreation-input" value="creator">Creator</option>
          </select>
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Phone Number*</label>
          <input 
          className="usercreation-input"
            type="tel"
            id="phonenumber"
            name="phonenumber"
            value={values.phonenumber}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="usercreation-div2">
          <label className="usercreation-label-2">Email*</label>
          <input
          className="usercreation-input"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
        <button className="usercreation-button" type="submit"><Link to="/admin">Back</Link></button>

        <button className="usercreation-button" type="submit">Enter</button>
        {/* <button type="button" onClick={(()=>console.log(values))}> </button> */}
        </div>
      </form>
    </div>
  );
};

export default UserCreation;
