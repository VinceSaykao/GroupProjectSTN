import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
            </Link>

            <Link className="navLink" to="/info">
              <PersonIcon 
              fontSize='large'
              />
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          <ExitToAppIcon 
          fontSize='large'
          />
        </Link>

    </div>
  );
}

export default Nav;
