import React from "react";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Stack,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";

import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from "phosphor-react";
import StyledBadge from "../StyledBadge";
import { ToggleSidebar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "F8FAFF",
        boxShadow: "0,0,0,0.25",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          onClick={() => {
            dispatch(ToggleSidebar());
          }}
          direction="row"
          spacing={2}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation={"vertical"} flexItem={"true"} />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
