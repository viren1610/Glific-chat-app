import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Textbox } from "phosphor-react";
import AuthRegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Get Started with Glific</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">Already have an account ?</Typography>
          <Link component={RouterLink} to="/auth/login" variant="subtitle2">
            Sign Up
          </Link>
        </Stack>

        {/* Register Form*/}
        <AuthRegisterForm/>
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signing up, i agree to "}
          <Link underline="always" color="text.primary">
            Terms of Sevice
          </Link>
          {' and '}
          <Link underline="always" color="text.primary">
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial/>
      </Stack>
    </>
  );
};

export default Register;
