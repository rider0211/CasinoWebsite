import * as React from 'react';
import { AppBar, Box, Link, Container, Badge,Typography, IconButton, Menu, MenuItem, useScrollTrigger, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

const pages = ['Login', 'Signup', 'OfferWall'];

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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    opacity:'80%'
  };
export default function ButtonAppBar(props) {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
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
            navigate('/Login');
            break;
        case 1:
            navigate('/Register');
            break;
        case 2:
            navigate('/Offerwall');
            break;
      }
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
    <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
            <AppBar position="fixed" sx={{borderBottom: '2px solid #e8d089', borderBottomLeftRadius:50, borderBottomRightRadius:50, padding:2, opacity:{xs:'100%',md:'100%'},  width:'100%'}}>
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
                            <Box component="img" sx={{height: '88px', ml:{xs:'-24px',md:'29px'}}} src="/static/img/logo.png"/>
                        </Link>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} display={{xs:'none', md:'flex'}}>
                            <Link underline='none' href="/" color={'white'} >OfferWall</Link>
                            <Link underline='none' href="/About"  color={'white'} >Login</Link>
                            <Link underline='none' href="#" onClick={handleOpen} color={'white'} >Register</Link>
                        </Stack>
                    </Stack>
                </Container>
            </AppBar>
        </ElevationScroll>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            </Box>
        </Modal>
    </Box>
  );
}