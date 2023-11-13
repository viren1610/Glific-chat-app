import React from 'react'
import { Stack,Typography,Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'

const ResetPassword = () => {
  return (
    <>
    <Stack spacing={2} sx={{mb:5, position:"relative"}}>
        <Typography variant="h3" paragraph>
            Forgot Passowrd
        </Typography>
  <Typography sx={{color:"text.secondary", mb:5}}>
    Please enter E-mail address associated with your account and We 
    will email you a link to reset your password
  </Typography>
    </Stack> 
    {/*Reset Password Form */}
   <ResetPasswordForm/>

    <Link component={RouterLink} to="/auth/login" color="inherit" variant='subtitle2' sx={{mt:3,mx:"auto",alignItems:"center",display:"inline-flex"}}>
        <CaretLeft/>
        Return To Login
    </Link>

    </>
  )
}

export default ResetPassword
