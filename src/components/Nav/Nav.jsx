import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';

//DRAWER
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ForumIcon from '@mui/icons-material/Forum';

function Nav() {
  const user = useSelector((store) => store.user);




    // start of drawer ******

    const [state, setState] = React.useState({
      left: false
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box id='box'
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List id='footer-list'>
          {[<p id='footer-profile-label' >Profile</p>,<p id='footer-client-label' >Client Info</p>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountBoxIcon 
                id='footer-profile'
            
                fontSize='large'
                /> : <GroupIcon id='footer-client' />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List id='second-footer-list'>
          {[<p id='footer-add-label' >Add Timesheet</p>, <p id='footer-chat-label' >Chat</p>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <AddCircleOutlineIcon id='footer-add' /> : <ForumIcon id='footer-chat' />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
  
        <List id='second-footer-list'>
          {[<p id='footer-add-label' >Feedback</p>, <p id='footer-chat-label'>Settings</p>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ContactSupportIcon id='footer-add'/> : <SettingsIcon id='footer-chat'/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
  
        <Divider />
        <List id='footer-footer'>
          {[<h4 id='logout-footer'><LogOutButton /></h4>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <LogoutIcon 
                id='logout-footer-icon'
          
                /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      
        
      </Box>
    );
    const [value, setValue] = React.useState(0);
    // end of drawer *****



    





  return (
    <div className="nav">



{/* <Box sx={{ width: '414px' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        <BottomNavigationAction label="Home" icon={<ListAltIcon />} />
        <BottomNavigationAction  label="Profile" icon={<GroupsIcon  />} />
      </BottomNavigation>
    </Box> */}




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
  
          {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}


          {/* <Link className="navLink" to="/userprofile">
            <MenuIcon
              fontSize='large'
              
            />
            <br></br>
            Menu
          </Link> */}


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
