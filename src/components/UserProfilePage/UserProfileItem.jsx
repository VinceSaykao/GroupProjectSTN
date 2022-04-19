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
      

        <p>{info.name}</p>
    

    </div>
  );
}

export default UserProfileItem;
