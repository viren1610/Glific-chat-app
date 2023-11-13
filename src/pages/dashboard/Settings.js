import React from "react";
import {
  Stack,
  Box,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material";
import {
  ArrowLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Bell } from "phosphor-react";
import Shortcuts from "../../sections/settings/Shortcuts";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Settings = () => {
  const [openShortcuts, setShortcuts] = useState(false);

  function handleOpenShortcuts() {
    setShortcuts(true);
  }
  function handleCloseShortcuts() {
    setShortcuts(false);
  }
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
      onClick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onClick: () => {},
    },
  ];
  return (
    <>
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
              <Link component={RouterLink} to="/app">
                <IconButton>
                  <ArrowLeft sx={24} />
                </IconButton>
              </Link>
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
                <Typography variant="article">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2">{faker.random.words()}</Typography>
              </Stack>
            </Stack>
            {/*List of Options*/}
            <Stack spacing={4}>
              {List.map(({ key, icon, title, onClick }) => (
                <Stack sx={{ cursor: "pointer" }} spacing={2} onClick={onClick}>
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    {icon}

                    <Typography variant="caption2">{title}</Typography>
                  </Stack>
                  {key !== 7 && <Divider />}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/*Right Side vala pannel */}
      </Stack>
      {openShortcuts && (
        <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />
      )}
    </>
  );
};

export default Settings;
