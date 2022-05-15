import * as React from 'react';
import { AppBar, Box, Link, Container, Badge,Typography, IconButton, Menu, MenuItem, useScrollTrigger, Modal, Tab, TextField, Button} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

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
    border: '1px solid #e8d089',
    boxShadow: 24,
    p: 4,
    opacity:'100%',
    borderRadius:3
  };
export default function ButtonAppBar(props) {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const [tabValue, setTabValue] = React.useState('1');

    const handleLoginOpen = () => {setTabValue('1'); setOpen(true);}
    const handleRegisterOpen = () => {setTabValue('2'); setOpen(true);} 
    const handleClose = (param) => {setOpen(false);}

    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };
  
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

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        width:'100%',
        marginTop:'2rem',
        marginBottom:'1rem',
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));

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
                            <Link underline='none' href="#" onClick={handleLoginOpen}  color={'white'} >Login</Link>
                            <Link underline='none' href="#" onClick={handleRegisterOpen} color={'white'} >Register</Link>
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
                <Stack direction={'column'} justifyContent={'space-betweeen'} alignItems={'center'} spacing={2}>
                    <Box component="img" sx={{height: '88px'}} src="/static/img/logo.png"/>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}>
                                <Tab label="Login" value="1" />
                                <Tab label="Register" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{textAlign:'center'}}>
                            <TextField id="usernameOrEmail" label="Username or Email" fullWidth variant="standard" placeholder='Enter your username or email'/>
                            <TextField id="password" label="Password" variant="standard" fullWidth placeholder='Enter your password'/>
                            <ColorButton variant="contained">Login</ColorButton>
                            <Typography variant='h7' sx={{color:'#ddd', fontSize:'small'}}>Don't have an account?<Link href="#" onClick={handleRegisterOpen} px={1}>Register Here</Link></Typography>
                        </TabPanel>
                        <TabPanel value="2" sx={{textAlign:'center'}}>
                            <TextField id="username" label="Username" fullWidth variant="standard" placeholder='Enter your Username'/>
                            <TextField id="email" label="Email" fullWidth variant="standard" placeholder='Enter your Email'/>
                            <TextField id="password" label="Password" variant="standard" fullWidth placeholder='Enter your password'/>
                            <TextField id="confirmPassword" label="Confirm Password" variant="standard" fullWidth placeholder='Confirm your password'/>
                            <ColorButton variant="contained">Register</ColorButton>
                            <Typography variant='h9' sx={{color:'#ddd', fontSize:'small'}} >Already have an account?<Link href="#" onClick={handleLoginOpen} px={1}>Login Here</Link></Typography>
                        </TabPanel>
                    </TabContext>
                </Stack>
            </Box>
        </Modal>
    </Box>
  );
}