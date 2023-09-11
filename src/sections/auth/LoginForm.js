import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import  FormProvider  from "../../components/hook-form/FormProvider";
import { Alert, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const LoginForm = () => {
  const [showPassord, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is Required"),
  });

  const defaultValues = {
    email: "demo@glific.com",
    password: "demo123",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      <RHFTextField name="email" label="Email address" />
      </Stack>
    </FormProvider>
  );
};

export default LoginForm;
