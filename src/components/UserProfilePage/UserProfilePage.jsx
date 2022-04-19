import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import UserProfileItem from "./UserProfileItem";
import UserSavedProfileEvent from "./UserSavedProfileEvent";
import { actionChannel } from "redux-saga/effects";
import { useParams, Link, useHistory } from "react-router-dom";

import { Container, Box, Typography, TextField, Button, FormControl, Grid } from "@mui/material";

import { SettingsBrightnessOutlined } from "@mui/icons-material";



export default function UserProfile() {


  const history = useHistory();
  const dispatch = useDispatch();


  const fetchProfile = useSelector((store) => store.fetchProfile[0]);
  const fetchSave = useSelector((store) => store.fetchSave);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_SAVE_EVENT" });
    dispatch({ type: "SET_PROFILE_SAGA" });
  }, []);


  const handleEditClick = () => {
    history.push("/userprofileedit");
  };



console.log(fetchProfile)
  return (
    <div>
      <h3>Profile</h3>

      <Grid container justifyContent="center">

        <div className="org-box">
          <Box
            component="img"
            sx={{
              height: "auto",
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src="https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
          />

          <Button className="edit-button" size="small" variant="contained" onClick={handleEditClick}>
            Edit
          </Button>
        </div>
      </Grid>

      <Typography gutterBottom variant="body2" component="div">
        <p>{fetchProfile?.first_name}</p>
        <p>{fetchProfile?.last_name}</p>
        <p>{fetchProfile?.bio}</p>
        <p>{fetchProfile?.email}</p>
      </Typography>




      {fetchSave?.map((info, i) => {
        return (
          <div key={i}>
          <UserProfileItem
            info={info}
          />
          </div>
        )
      })}
    </div>
  );
}
// end of UserProfile
