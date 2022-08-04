<<<<<<< HEAD
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../images/uop-logo.png";
import { useNavigate } from "react-router-dom";

const pages = ["Projects", "People"];

const NavbarHome = () => {
  // Navigate to pages
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const gotoLogin = () => {
    navigate("/login");
  };

  const gotoSignup = () => {
    navigate("/register");
  };
=======
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../images/uop-logo.png';


const pages = ['Projects', 'People'];



const NavbarHome = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
<<<<<<< HEAD
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 80,
            }}
            alt="Your logo."
            src={Logo}
          />

          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Typography
=======

    <AppBar position='fixed'>

      <Container maxWidth="xl">

        <Toolbar disableGutters>

            <Box
                component="img"
                sx={{
                height: 80
                }}
                alt="Your logo."
                src={Logo}
            />

                
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Typography

>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
            variant="h6"
            noWrap
            component="a"
            href="http://www.ce.pdn.ac.lk/"
            sx={{
              mr: 2,
<<<<<<< HEAD
              display: { xs: "none", md: "flex" },
              fontFamily: "serif",
              fontWeight: 400,
              fontSize: "28px",
              marginLeft: "30px",
              letterSpacing: ".0rem",
              color: "inherit",
              textDecoration: "none",
=======
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'serif',
              fontWeight: 400,
              fontSize: '28px',
              marginLeft: '30px',
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
            }}
          >
            Post Graduate Students
          </Typography>

<<<<<<< HEAD
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
=======

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >

                    <MenuIcon />

                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}

                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}

                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}

                >


                {pages.map((page) => (
                    <MenuItem key={page} 
                    onClick={handleCloseNavMenu}>

                    <Typography textAlign= 'center'>
                        {page}
                    </Typography>

                </MenuItem>
              ))}

            </Menu>

>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
          </Box>

          {/* Page Buttons */}

<<<<<<< HEAD
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
=======
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
<<<<<<< HEAD
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "serif",
                  fontWeight: 400,
                  fontSize: "25px",
                  marginLeft: "30px",
                  letterSpacing: ".0rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
=======
                sx={{ 
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'serif',
                    fontWeight: 400,
                    fontSize: '25px',
                    marginLeft: '30px',
                    letterSpacing: '.0rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
                {page}
              </Button>
            ))}
          </Box>

          {/* Login And Register Buttons */}

<<<<<<< HEAD
          <Box sx={{ flexGrow: 0 }}>
            <Button
              style={{ fontSize: "20px" }}
              variant="secondary"
              onClick={() => gotoLogin()}
            >
              Login
            </Button>

            <Button
              style={{ marginLeft: "25px", fontSize: "20px" }}
              variant="secondary"
              onClick={() => gotoSignup()}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
=======
            <Box sx={{ flexGrow: 0 }}>

                <Button style={{fontSize: '20px'}} variant="secondary">Login</Button>

                <Button style={{marginLeft: '25px', fontSize:'20px'}} variant="secondary">Register</Button>

            </Box>

        </Toolbar>

      </Container>

>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
    </AppBar>
  );
};
export default NavbarHome;
