import React from 'react'
import {Toolbar, CssBaseline, Box, Container, Grid, Typography, Divider} from '@mui/material';
import OfferwallSlides from './offerwallSlides';
import GameLists from './gameLists';
import TopGame from './topGame';
import LatestBetTable from './latestBetTable';
import Header from '../common/header';
import Footer from '../common/footer';

function index(props){
    return(
        <React.Fragment>
            <CssBaseline />
                <Header />
                <Box my={5}>
                    <Toolbar />
                </Box>
                <Box>
                    <Container sx={{textAlign:'-webkit-center'}}>
                        <Grid container spacing={2} my={5}>
                            <Grid item xs={8}>
                                <Typography variant='h4' fontFamily={'Railway'}>Let the crypto games begin!
                                Win more often than ever in the world's highest odds roulette games run entirely and fairly on the blockchain.</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Box component="img" src="/static/img/right.png"/>
                            </Grid>
                        </Grid>
                        <Divider textAlign="left">OfferWall</Divider>
                        <Box py={5} borderBottom={2} borderColor={'#e8d089'}>
                            <OfferwallSlides />
                        </Box>
                        <Box component="img" my={2} sx={{justifyContent:'center', height: '88px' }} src="/static/img/middle.png"/>
                        <Divider textAlign="left">Funny Games</Divider>
                        <Box py={5} borderBottom={2} borderColor={'#e8d089'}>
                            <GameLists />
                        </Box>
                        <Box component="img" my={2} sx={{justifyContent:'center', height: '88px' }} src="/static/img/middle.png"/>
                        <Divider textAlign="left">Best Winner Today</Divider>
                        <Box py={5} borderBottom={2} borderColor={'#e8d089'}>
                            <TopGame />
                        </Box>
                        <Box component="img" my={2} sx={{justifyContent:'center', height: '88px' }} src="/static/img/middle.png"/>
                        <Divider textAlign="left">Best Winner Today</Divider>
                        <Box py={5}>
                            <LatestBetTable />
                        </Box>
                    </Container>
                </Box>
                <Footer />
        </React.Fragment>
    )
}

export default index;