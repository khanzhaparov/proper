import React from 'react'

import Form from './Form/Form';

import logo from '../assets/logo.png';
import family from '../assets/family.jpg'

import Link from '@mui/joy/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/joy/Button';

const Main = () => {
    const [phone, setPhone] = React.useState('')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }

    return (
        <Box 
        component="div"
        sx={{
            backgroundColor: "#95c0d8",
            p: "10px",
            borderRadius: '15px',
            m: '10px',
            textAlign: 'center',
        }}
    >
        <div className='glav__logo'>
            <Box
                component="img"
                sx={{
                    width: 300,
                    maxWidth: { xs: 300, md: 200 },
                }}
                src={logo} 
                alt='logo'
            />
            <Typography 
                variant='subtitle1'
            >
                Доставка полуфабрикатов в Астане
            </Typography>
        </div>
        <Box
            component="img"
            sx={{
                width: 200,
                maxWidth: { xs: 300, md: 200 },
            }}
            src={family} 
            alt='family'
        />
        <Form />

        <Typography level="body1">Нажимая на кнопку, вы соглашаетесь на обработку своих персональных данных в соответствии с <Link href="#basics" color='neutral'>договором-оферты</Link></Typography>
        <Typography 
            level="body1"
            sx={{
                mt: "10px",
                color: "white",
            }}
        >
            Заказы принимаются с 7:00 до 00:00
        </Typography>
        <Typography 
            level="body1"
            sx={{
                color: "white",
            }}
        >
            без выходных
        </Typography>
    </Box>
    )
}

export default Main