import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LanguageIcon from '@mui/icons-material/Language';
import Link from '@mui/material/Link';
import { green, pink, red, indigo } from '@mui/material/colors';

import orderImage from '../assets/order.png'

const Socials = () => {
  return (
    <div className='socials'>
        <Box
            sx={{
                mt: "40px",
                p: "10px",
            }}
        >
            <a href='https://drive.google.com/file/d/14c_XnDAhCZLELI14pDRCMNcIjLOTBDX1/view?usp=sharing'>
                <Button 
                    variant="contained" 
                    startIcon={<RestaurantIcon />}
                    sx={{
                        backgroundColor: red[500],
                        p: "10px",
                        width: 1,
                    }}
                >
                    Меню для заказа по телефону
                </Button>
            </a>
            <a href='https://wa.me/77051979458'>
                <Button 
                    variant="contained" 
                    startIcon={<WhatsAppIcon />}
                    sx={{
                        backgroundColor: green[500],
                        mt: "15px",
                        p: "10px",
                        width: 1,
                    }}
                >
                    Заказать online
                </Button>
            </a>
        </Box>
        <Box
            component="img"
            sx={{
                width: 1,
            }}
            alt="The house from the offer."
            src="http://taplink.st/p/f/b/7/5/57610952.png?4"
        />
        <Box
            sx={{
                mt: "40px",
                p: "10px",
            }}
        >
            <a href='https://www.instagram.com/pelmenica.kz/'>
                <Button 
                    variant="contained" 
                    startIcon={<InstagramIcon />}
                    sx={{
                        backgroundColor: pink[500],
                        p: "10px",
                        width: 1,
                        mb: "10px",
                    }}
                >
                    Instagram
                </Button>
            </a>
            {/* <Button 
                variant="contained" 
                startIcon={<LanguageIcon />}
                sx={{
                    backgroundColor: indigo[500],
                    p: "10px",
                    width: 1,
                    mb: "10px",
                }}
            >
                Сайт
            </Button> */}
        </Box>
    </div>
  )
}

export default Socials