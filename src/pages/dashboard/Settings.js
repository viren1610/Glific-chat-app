import React from "react";
import { Stack, Box, IconButton, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material";
import { ArrowLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Bell } from "phosphor-react";
const Settings = () => {
  const theme = useTheme();

  const List = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onClick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onClick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onClick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onClick: () => {},
    },
    {
      key: 3,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onClick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onClick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "KeyBoard Shortcuts",
      //onClick: handleOpenShortcuts,
      onClick:()=>{},
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onClick: () => {},
    },
  ];
  return (
    <Stack direction={"row"} width={"100%"}>
      {/*Chota Box */}
      <Box
        sx={{
          width: 320,
          height: "100vh",
          overflowY: "scroll",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0 0 2 rgba(0,0,0,0.25)",
        }}
      >
        {/* All the contents in column */}
        <Stack direction={"column"} p={3} spacing={5}>
          {/*Header */}
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <ArrowLeft sx={24} />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Stack>
          {/*Avatar */}
          <Stack direction={"row"} spacing={4}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
              sx={{ height: 56, width: 56 }}
            />
            <Stack direction={"column"} spacing={0.5}>
              <Typography variant="article">{faker.name.fullName()}</Typography>
              <Typography variant="body2">{faker.random.words()}</Typography>
            </Stack>
          </Stack>
          {/*List of Options*/}
          
        </Stack>
      </Box>
    </Stack>
  );
};

export default Settings;
