
import { useTheme } from '@mui/material';
import {Box, Typography, Divider, IconButton, InputBase} from "@mui/material";
import { useState } from "react";
import {shades} from "../../themes"
const Footer = () => {
    const {palette : {neutral}} = useTheme();
  return (
    <Box mt="70px" p="40px 0 " backgroundColor={neutral.light}>
        <Box 
       width="80%"
       margin="auto"
       display="flex"
       justifyContent="space-between"
       flexWrap="wrap"
       rowGap="30px"
       columnGap="clamp(20px, 30px, 40px)" >
            <Box width= "clamp(20%, 30%, 40%)">
                <Typography variant='h4' fontWeight="bold" mb="30px" color={shades.secondary[500]}>The Shop</Typography>
            <div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
        
            </div>
            </Box>
            <Box>
                <Typography variant='h4' fontWeight="bold" mb = "30px">About Us</Typography>
                <Typography  mb="30px">Careers</Typography>
                <Typography  mb="30px">Our Stores</Typography>
                <Typography  mb="30px">Terms & Conditions</Typography>
                <Typography  mb="30px">Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant='h4' fontWeight="bold" mb = "30px">Customer Care</Typography>
                <Typography  mb="30px">Help Centre</Typography>
                <Typography  mb="30px">Track Your Order</Typography>
                <Typography  mb="30px">Corporate & Bulk Purchasing </Typography>
                <Typography  mb="30px">Returns and Refunds</Typography>
            </Box>
            <Box width= "clamp(20%, 25%, 30%)">
                <Typography variant='h4' fontWeight="bold" mb = "30px">Contact Us</Typography>

                <Typography  mb="30px">Olepolos, Ngong</Typography>
                <Typography  mb="30px"> Email : Iwilbeabillionaire72@gmail.com</Typography>
                <Typography  mb="30px">(222)333-4444</Typography>
            
            </Box>
        </Box>
    </Box>

  );
}

export default Footer;
