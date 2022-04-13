import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function UserProfileEditForm() {
  const dispatch = useDispatch();
    const { id } = useParams();
  // const updateProfile = useSelector(store => store.updateProfile);
  //   const fetchProfile = useSelector((store) => store.fetchProfile);
  const user = useSelector((store) => store.user);
  const [profileUser, setProfileUser] = useState(user.id);

  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState([]);

  const handleUpdateUser = () => {
    let updateForm = {
      id: user.id,
      bio: bio,
      email: email,
      //   phoneNumber: phoneNumber,
    };
    dispatch({ type: "SET_UPDATE_PROFILE_SAGA", payload: updateForm });
    console.log("updateForm =", updateForm);
    console.log("id =", user.id);
    // console.log(profileUser);
  };
  return (
    <>
      <form>
        <h3>Bio</h3>
        <input type="text" name="Bio" value={bio} onChange={(event) => setBio(event.target.value)} />
        <h3>Email</h3>
        <input type="text" name="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <h3>Image</h3>
        {/* <input type="text" name="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} /> */}
        {/*  TODO: Image upload input  */}
      </form>
      <button onClick={handleUpdateUser}>Update</button>
    </>
  );
}
// Comment
export default UserProfileEditForm;
