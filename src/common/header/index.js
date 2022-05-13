import * as React from 'react';
import { AppBar, Box, Link, Container, Badge,Typography, IconButton, Menu, MenuItem, useScrollTrigger} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

const pages = ['HOME', 'ABOUT', 'SHOP', 'PORFOLIO', 'LOGIN'];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ButtonAppBar(props) {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = (e,i) => {
      setAnchorElNav(null);
    };
    const handleMenuItemClick = (e,i) => {
      setAnchorElNav(null);
      switch (i) {
        case 0:
            navigate('/Home');
            break;
        case 1:
            navigate('/About');
            break;
        case 2:
            navigate('/Shop');
            break;
        case 3:
            navigate('/Portfolio');
            break;
        case 4:
            window.open('/Login','_blank')
            break;
      }
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar position="static" sx={{borderBottomLeftRadius:50, borderBottomRightRadius:50, padding:2, opacity:{xs:'100%',md:'80%'}, width:'100%'}}>
          <Container maxWidth="xl">
                  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Box sx={{display: { xs: 'flex', md: 'none'} }}>
                          <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          > <MenuIcon /> </IconButton>
                          <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}} 
                          keepMounted transformOrigin={{ vertical: 'top',horizontal: 'left',}}
                          open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }}>
                          {pages.map((page,index) => (
                              <MenuItem key={page} onClick={(event) => handleMenuItemClick(event, index)}>
                                  <Typography textAlign="center">{page}</Typography>
                              </MenuItem>
                          ))}
                          </Menu>
                      </Box>
                      <Link onClick={() => {navigate('/');}}>
                          <Box component="img" sx={{height: '88px', ml:{xs:'0px',md:'29px'}}} src="/static/img/logo.png"/>
                      </Link>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} display={{xs:'none', md:'flex'}}>
                          <Link underline='none' href="/" color={'white'} >OfferWall</Link>
                          <Link underline='none' href="/About"  color={'white'} >Login</Link>
                          <Link underline='none' href="#" color={'white'} >Register</Link>
                      </Stack>
                      <Box sx={{ display: { xs: 'flex', md: 'none'}, alignItems:"center"}}>
                          <Badge badgeContent={4} color="success">
                              <ShoppingCartCheckoutIcon sx={{color:"black", fontSize:30}}></ShoppingCartCheckoutIcon>
                          </Badge>
                      </Box>
                  </Stack>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}