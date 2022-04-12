

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function UserProfileEditForm() {
  const dispatch = useDispatch();
  // const updateProfile = useSelector(store => store.updateProfile);
  const fetchProfile = useSelector((store) => store.fetchProfile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState([]);

  const handleUpdateUser = () => {
    let updateForm = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    };
    dispatch({ type: "SET_UPDATE_PROFILE_SAGA", payload: updateForm });
  };

  return (
    <>
      <form>
        <h3>Name</h3>
        <input type="text" name="Name" required onChange={(event) => setName(event.target.value)} />
        <h3>Email</h3>
        <input type="text" name="Email" onChange={(event) => setEmail(event.target.value)} />
        <h3>Phone Number</h3>
        <input type="text" name="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} />
        {/*  TODO: Image upload input  */}
      </form>
      <button onClick={handleUpdateUser}>Update</button>
    </>
  );
}
// Comment
export default UserProfileEditForm;
