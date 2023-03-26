import React from "react";
import { useLocation } from "react-router";

const FormInfo = () => {
  const { state } = useLocation();
  const { formData, other } = state;
  const {
    name,
    email,
    password,
    skill,
    phonenum,
    gender,
    profilepicture,
    address,
    city,
  } = formData;

  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Gender: {gender}</p>
      <p>Phone number: {phonenum}</p>
      <p>Address: {address}</p>

      <p>Profile Pic: {profilepicture}</p>
      {city === "other" && <p>City: {other} </p>}

      {city !== "other" && <p>City: {city}</p>}
      <div>
        <p>Skill</p>
        {skill.map((item, key) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default FormInfo;
