import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import arrow from '../../assets/arrow.png';
import { useAuth0 } from '../../Auth0Provider';

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { auth0Client } = useAuth0();
  const logout = () => auth0Client.logout();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(logout);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img style={{ width: '3vw' }} src={arrow} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
}
