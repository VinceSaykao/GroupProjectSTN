import { InfoRounded } from "@mui/icons-material";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { actionChannel } from "redux-saga/effects";
import UserProfileEditForm from "./UserProfileEditForm";

function UserProfileItem({ info }) {


  return (
    <div>
      <h3>Profile</h3>
      
      {info.id}
      <div>
        <p>{info.first_name}</p>
        <p>{info.last_name}</p>
        <p>{info.bio}</p>
        <p>{info.email}</p>
      </div>
    </div>
  );
}

export default UserProfileItem;
