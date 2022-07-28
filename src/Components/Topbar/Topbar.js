import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import logoo from '../../Pictures/kelki.png'

import Popper from '@mui/material/Popper';

import MenuList from '@mui/material/MenuList';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Topbar.css'
import { FcShop } from "react-icons/fc";
import { FcMenu } from "react-icons/fc";

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { BsX } from "react-icons/bs";
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";


import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';


import { useNavigate } from 'react-router-dom';
import logo from '../../Pictures/Toysshopp.png';
import { Button } from '@mui/material';
import { height } from '@mui/system';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));




const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));





const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Topbar({ totalItems, changeSearch }) {





  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');
  const changeSearchText = event => {
    setSearchText(event.target.value)
    console.log(searchText + "ss")
    changeSearch(searchText)
  }

  const emptysearch = () => {
    setSearchText('')
  }


  const GoToSearch = () => {
    if (searchText !== '') {
      navigate('/search')
    }
  }


  useEffect(() => {
    changeSearch(searchText);
  }, [searchText])




  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };





  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>

      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (

    <div className='appbardiv'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="sstyle" style={{
          backgroundColor: 'gold',

        }}
        >

          <Toolbar>



            {/*
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
    */}
            {/*
              <Button className='image-button'
                component={Link} to="/"
              ><img src={logo} alt="" className='logopicture' /></Button>
  */ }

            {
              <div >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  className="topbarbuttonss"
                  component={Link} to="/"
                >
                  <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}

                  >

                    {<FcShop size="2em" />}

                  </Typography>
                </IconButton>
              </div>


            }
            <div className='logoooodiv'>
              <img src={logoo} alt="" className='logopicc' />
            </div>











            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              className="topbarbuttons"
            >
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}
                style={{
                  color: 'blue'
                }}
              >
                <b>NEW</b>
              </Typography>
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              className="topbarbuttons"
            >
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{
                color: 'blue'
              }}>
                <b>GIRLS</b>

              </Typography>
            </IconButton  >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              className="topbarbuttons"
            >
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}
                style={{
                  color: 'blue'
                }}

              >
                <b>BOYS</b>

              </Typography>
            </IconButton  >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              className="topbarbuttons"
            >
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}
                style={{
                  color: 'blue'
                }}
              >
                <b>SALE</b>

              </Typography>


            </IconButton  >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              className="topbarbuttons"
            >

              {
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}
                  style={{
                    color: 'blue'
                  }}
                >
                  <b>CONTACT</b>

                </Typography>
              }
            </IconButton  >



            <Paper
              component="form"
              sx={{ display: 'flex', alignItems: 'center', width: 300, color: 'success.dark' }}
              className="searchbutton"
            >

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <IconButton onClick={emptysearch} sx={{ p: '10px' }} aria-label="search">
                <BsX />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={GoToSearch} >
                <SearchIcon />
              </IconButton>
            </Paper>




            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                className="topbarbuttons"
                style={{

                }}
                component={Link} to="/cart"
              >
                <Badge badgeContent={totalItems} color="error">
                  <AddShoppingCartIcon style={{
                    color: 'red'
                  }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className="topbarbuttons"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className="menuicon"
              >
                <FcMenu size="2em" color="white" />
              </IconButton>







            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box >
    </div>

  );
}
