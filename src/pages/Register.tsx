import React, { FormHTMLAttributes, useReducer, useState } from "react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cfPassword: "",
  });
  const [errForm, setErrForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cfPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">User Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mail">Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="number" name="phone" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cfPassword">Confirm Password:</label>
          <input type="text" name="cfPassword" onChange={handleChange} />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Register;

//username: accept 8-20 character, includes @&*
//email
//age: from 10-40
//using useReducer to manage state
