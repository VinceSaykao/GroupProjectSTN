import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function UserProfileEditForm() {
  const dispatch = useDispatch();
  //   const { id } = useParams();
  // const updateProfile = useSelector(store => store.updateProfile);
  //   const fetchProfile = useSelector((store) => store.fetchProfile);
  const user = useSelector((store) => store.user);
  //   const [profileUser, setProfileUser] = useState(user.id);

  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleUpdateUser = () => {
    dispatch({
      type: "SET_UPDATE_PROFILE_SAGA",
      payload: {
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        bio: bio,
        email: email,
      },
    });
  };
  console.log("bio, email= ", firstName, lastName, bio, email);
  return (
    <>
      <form>
        <h4>First Name</h4>
        <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <h4>Last Name</h4>
        <input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        <h4>Bio</h4>
        <input type="text" name="Bio" value={bio} onChange={(event) => setBio(event.target.value)} />
        <h4>Email</h4>
        <input type="text" name="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <h4>Image</h4>
        {/* <input type="text" name="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} /> */}
        {/*  TODO: Image upload input  */}
      </form>
      <button onClick={handleUpdateUser}>Update</button>
    </>
  );
}
// Comment
export default UserProfileEditForm;
