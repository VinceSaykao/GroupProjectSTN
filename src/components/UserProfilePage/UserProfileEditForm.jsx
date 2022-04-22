import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { Container, Box, Typography, TextField, Button, FormControl } from "@mui/material";

function UserProfileEditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const { id } = useParams();
  // const updateProfile = useSelector((store) => store.updateProfile);
  const fetchProfile = useSelector((store) => store.fetchProfile[0]);
  const user = useSelector((store) => store.user);
  //   const [profileUser, setProfileUser] = useState(user.id);
  const [image, setImage] = useState(fetchProfile?.image);
  const [bio, setBio] = useState(fetchProfile?.bio);
  const [email, setEmail] = useState(fetchProfile?.email);
  const [firstName, setFirstName] = useState(fetchProfile?.first_name);
  const [lastName, setLastName] = useState(fetchProfile?.last_name);


  const handleUpdateUser = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_UPDATE_PROFILE_SAGA",
      payload: {
        id: user.id,
        image: image,
        first_name: firstName,
        last_name: lastName,
        bio: bio,
        email: email,
      },
    });
    history.push("/userprofile");
  };

  return (
    <>
      <Container sx={{ mt: "30px", display: "flex", justifyContent: "center" }}>
        <Box
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "500px",
            p: "20px",
          }}
        >
          <FormControl sx={{ width: "100%" }}>
          <form encType="multipart/form-data" >
            <TextField
              sx={{ margin: "10px" }}
              // autoComplete="off"
              type='file'
              name='file'
              placeholder="image"
              onChange={(e) => setImage(e.target.files[0])}
            />

    
            <TextField
              sx={{ margin: "10px" }}
              // autoComplete="off"
              type="text"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            {/* <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              /> */}
            <TextField
              sx={{ margin: "10px" }}
              // autoComplete="off"
              type="text"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

        
            <TextField
              sx={{ margin: "10px" }}
              // autoComplete="off"
              type="text"
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
         
            <TextField
              sx={{ margin: "10px" }}
              // autoComplete="off"
              type="text"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
         </form>
          </FormControl>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: "10px",
            }}
          >
            <Button variant="outlined" onClick={handleUpdateUser} sx={{ margin: "10px" }}>
              <Typography variant="h6">Update</Typography>
            </Button>
          </Box>
         
        </Box>
      </Container>
    </>
  );
}
// Comment
export default UserProfileEditForm;
