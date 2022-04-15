import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
  const user = useSelector((store) => store.user);



  

  return (
    <div className="nav">
    

  

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              <HomeIcon 
              fontSize='large'
              />
               <br></br>
              Home
            </Link>

            <Link className="navLink" to="/userprofile">
              <PersonIcon 
              fontSize='large'
              flexDirection='column'
              />
              <br></br>
              Profile
            </Link>

  
          <Link className="navLink" to="/userprofile">
          <MenuIcon 
          fontSize='large'
          />
           <br></br>
              Menu
            </Link>


            {/* <LogOutButton className="navLink" /> */}
          </>
        )}

        {/* <Link className="navLink" to="/about">
          <ExitToAppIcon 
          fontSize='large'
          />
        </Link> */}


    </div>
  );
}

export default Nav;
