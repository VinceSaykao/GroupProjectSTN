import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = React.useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  console.log(value);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        access_level: value,

      },
    });
    history.push('/organization-register-form');
  }; // end registerUser

  return (
    <Box component="form" container onSubmit={registerUser} textAlign="center" sx={{ mt:"33.33%"}}>
      <h2>Register</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <TextField
          htmlFor="username"
          id="username"
          maxRows={5}
          sx={{ color: 'white', mt: 1, mb: 1, width: 300 }}
          required
          label="Username"
          color="primary"
          autoComplete="off"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></TextField>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <FormControl>
        <FormLabel id="user-type-radio-buttons-group-label">
          Select User Type
        </FormLabel>
        <RadioGroup row value={value} onChange={handleChange}>
          <FormControlLabel value="1" control={<Radio />} label="Volunteer" />
          <FormControlLabel value="2" control={<Radio />}label="Organization" />
        </RadioGroup>
      </FormControl>
      <div>
        <Button variant="outlined" type="submit" name="submit" value="Register">
          Register
        </Button>
      </div>
      <div>
      <Button variant="filled" value="Login" onClick={() => { history.push('/login') }}>Login</Button>
      </div>
    </Box>
  );
}

export default RegisterForm;
