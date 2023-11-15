import { Box, Typography, Stack, Divider, IconButton } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import React from "react";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { CallLogElement } from "../../components/CallElement";
import { CallList } from "../../data";
import { useState } from "react";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left Box */}
        <Box
          sx={{
            height: "100vh",
            background: (theme) =>
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25) ",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack
              alignItems={"center"}
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="h5">Call Logs</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography variant="subtitle2" component={Link}>
                Start Converstation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={3}
              sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
            >
              <Stack spacing={2.5}>
                {/*Call Logs */}
                {CallList.map((el) => (
                  <CallLogElement {...el} />
                ))}
              </Stack>

              <Stack spacing={2.5}>{/* */}</Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
    </>
  );
};

export default Call;
