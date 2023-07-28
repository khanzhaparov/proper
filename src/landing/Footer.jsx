import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <Box
        sx={{
            mt: "40px",
        }}
    >
        <Box
            sx={{
                textAlign: "center",
            }}
        >
            <Typography>ИП pelmenica.kz</Typography>
            <Typography>010000, РК, г. Астана, ул. Жансугурова, 14</Typography>
            <Typography>+7 705 197 9458</Typography>
        </Box>
        <Box
            component="img"
            sx={{
                width: 1,
            }}
            alt="The house from the offer."
            src={footer}
        />
    </Box>
  )
}

export default Footer