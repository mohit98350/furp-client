import * as React from 'react';
import { useState,useEffect } from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Menu as MenuIcon } from "@material-ui/icons";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Axios from 'axios';



const pages = ['Product', 'About Us', 'Contact Us'];


const Nav = () => {

    const history = useHistory();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [userData,setUserData] = React.useState(1);
    // const getUser = () => {
    //     Axios({
    //       method: "GET",
    //       withCredentials: true,
    //       url: "http://localhost:4000/user",
    //     }).then((res) => {
    //       setUserData(res.data);
    //       console.log(res.data);
    //     });
    //   };
    // getUser();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    //   const handleOpenUserMenu = (event) => {
    //       setAnchorElUser(event.currentTarget);
    //   };


    const handleCloseNavMenu = (pageurl) => {
        setAnchorElNav(null);
        history.push(pageurl)

    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleAccount = () => {
        setUserData(!userData)

        if (userData) {                                           /*  Added a condition if user data is present then redirect to account page */
            history.push('/account')
        }
        else {
            history.push('/login')
        }
    }
    const handleCart = () => {
        if (totalQuantities == 0) {
            alert('Your Cart is empty!!')


        }
        else {
            history.push('/cart')
        }
    }

    

    const { totalQuantities } = useSelector(state => state.CartReducer);
    return (
        <>

            <AppBar position="fixed" style={{ background: 'white', height: '100px' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link to="/">
                                <img src="/images/furpaaws.jpeg" className='logo' alt="Logo" />
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="secondary"
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


                                <MenuItem key={2} onClick={() => handleCloseNavMenu('/about')}>
                                    <Typography sx={{ fontSize: '15px', margin: 'auto', color: 'black' }} textAlign="center" >About </Typography>
                                </MenuItem>
                                <MenuItem key={3} onClick={() => handleCloseNavMenu('/contact')}>
                                    <Typography sx={{ fontSize: '15px', margin: 'auto', color: 'black' }} textAlign="center" >Contact </Typography>
                                </MenuItem>
                                <MenuItem key={1} >
                                    <a href="https://www.furpaaws.in/blog"><Typography textAlign="center"
                                        style={{ fontSize: '15px', marginRight: '-65px', color: 'black' }}  >Blog</Typography></a>
                                </MenuItem>






                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link to="/">
                                <img src="/images/furpaaws.jpeg" className='logo' alt="Logo" />
                            </Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                            <Button onClick={() => handleCloseNavMenu('/about')}
                                sx={{ fontSize: '16px', my: 2, color: 'black', display: 'block', 'margin-right': '1rem!important' }}>
                                About
                            </Button>
                            <Button onClick={() => handleCloseNavMenu('/contact')}
                                sx={{ fontSize: '16px', my: 2, color: 'black', display: 'block' }}>Contact</Button>
                            <a href="https://www.furpaaws.in/blog">


                                <Button
                                    // onClick={()=>handleCloseNavMenu('')}
                                    sx={{ fontSize: '16px', my: 2, color: 'black', display: 'block', 'margin-right': '1rem!important' }}>Blog</Button>
                            </a>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>

                            <Stack direction="row" >
                                <Tooltip title="My Cart">

                                    <IconButton sx={{ p: 0 }} onClick={handleCart}>

                                        <div className="basket">
                                            <BsFillBagFill className="cart-icon" />
                                            <span>{totalQuantities}</span>
                                        </div>


                                    </IconButton>


                                </Tooltip>

                                <div className="spacing_nav" style={{ padding: '18px' }}> </div>
                                <Tooltip title="Account">



                                    <IconButton xs={{ display: 'none' }}
                                        onClick={handleAccount}

                                    >

                                    <Avatar src="/broken-image.jpg" />



                                    </IconButton>



                                </Tooltip>

                            </Stack>






                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}

                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >



                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )
}

export default Nav
