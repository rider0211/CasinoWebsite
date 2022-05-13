import React from 'react';
import {Stack, Box, Typography, Container} from '@mui/material';
const Footer = () => {
    return (
        <Box sx={{backgroundColor:'#311b92', textAlign:'center', padding:2, borderTopLeftRadius:50, borderTopRightRadius:50, boxShadow:5}}>
            <Container maxWidth='lg'>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={5} padding={5}>
                    <Typography variant="h5">Copyright © 2022 River VC - All Rights Reserved.</Typography>
                    <Typography variant="h5">Powered by GoDaddy</Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer