import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  Switch,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  X,
  Phone,
  VideoCamera,
  CaretRight,
  Star,
  Bell,
  Flag,
  Trash,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
            spacing={3}
          >
            <Typography>Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems={"center"} direction="row" spacing={3}>
            <Avatar src={faker.image.avatar()} sx={{ height: 64, width: 64 }} />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {"+91 729 3839 3301"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-evenly"
          >
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              Imagination is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Docs</Typography>
            <Button
              onClick={() => {
                dispatch(updateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            {[1, 2, 3].map((el) => (
              <div key={el}>
                <img src={faker.image.food()} alt={`Food ${el}`} />
              </div>
            ))}
          </Stack>
          <Divider />
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Star />
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
          <IconButton
            onClick={() => {
              dispatch(updateSidebarType("STARRED"));
            }}
          >
            <CaretRight />
          </IconButton>
          <Divider />
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Bell />
            <Typography variant="subtitle2">Mute Notifications</Typography>
            <Switch defaultChecked />
          </Stack>
          <Divider />
          <Stack direction={"row"} alignItems={"flex-start"} spacing={0.8}>
            <Typography variant="body2">1 group in common</Typography>
          </Stack>
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar src={faker.image.avatar()} alt="Group Avatar" />
            <Stack spacing={0.8}>
              <Typography variant="subtitle2">Camel's Gang</Typography>
              <Typography variant="caption">Owl, Lion, Cat, Dog, You</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button startIcon={<Flag />} variant="outlined" fullWidth>
              Block
            </Button>
            <Button startIcon={<Trash />} variant="outlined" fullWidth>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
