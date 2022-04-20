import { InfoRounded } from "@mui/icons-material";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { actionChannel } from "redux-saga/effects";
import UserProfileEditForm from "./UserProfileEditForm";
import { Container, Box, Typography, TextField, Button, FormControl, Grid } from "@mui/material";

function UserProfileItem({ info, detail }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  console.log("info = ", info);

  const handleFaveEventClick = () => {
    dispatch({type:"DELETE_FAVE_EVENT", payload: {user_id: info.user_id, event_id: info.event_id}});
  }


  console.log('info', info);
  return (
    <div>
      

        <p>{info.name}</p>

        <Button onClick={handleFaveEventClick} className="edit-button" size="small" variant="contained">Delete</Button>
    

    </div>
  );
}

export default UserProfileItem;
