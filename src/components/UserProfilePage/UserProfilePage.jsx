import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import UserProfileItem from "./UserProfileItem";
import UserSavedProfileEvent from "./UserSavedProfileEvent";
import { actionChannel } from "redux-saga/effects";
import { useParams, Link, useHistory } from "react-router-dom";

import { Container, Box, Typography, TextField, Button, FormControl, Grid } from "@mui/material";

import { SettingsBrightnessOutlined } from "@mui/icons-material";



export default function UserProfile() {

  const dispatch = useDispatch();
  const history = useHistory();
  
    useEffect(() => {
      dispatch({ type: "SET_PROFILE_SAGA" });
    }, []);

  const fetchProfile = useSelector((store) => store.fetchProfile);
  // const fetchProfileEvent = useSelector((store) => store.fetchProfileEvent);
  // const user = useSelector((store) => store.user);




  const handleEditClick = () => {
    history.push("/userprofileedit");
  };




  console.log("profile", fetchProfile);
  return (
    <div>
    <h1>HELLO</h1>

    
  {fetchProfile?.map((info,i) => {
        return (
            <div id={i}>
            <UserProfileItem 
            info={info}
            />
            </div>
        )
    })}


{/* 
    {fetchProfileEvent.map((event,i) => {
        return (
            <div id={i}>
                <UserSavedProfileEvent 
                event={event}
                />
    
            </div>
        )
    })}  */}







</div>
  );
}
// end of UserProfile
