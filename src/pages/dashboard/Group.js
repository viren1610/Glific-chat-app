import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import ChatEle from "../../components/ChatEle";
import CreateGroup from "../../sections/main/CreateGroup";
import { useState } from "react";

const Group = () => {
  const theme = useTheme();
  const [openDialog,setOpenDialog] = useState(false);

  const handleCloseDialog = () =>{
    setOpenDialog(false);
  }

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/*Left sided box */}
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
              <Typography variant="h5">Groups</Typography>
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
                Create New Group
              </Typography>
              <IconButton onClick={()=>{
                setOpenDialog(true);
              }}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={3}
              sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
            >
              <Stack spacing={2.5}>
                {/* */}
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography>
                {/*Chat List */}
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatEle {...el} />;
                })}
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Groups
                </Typography>
                {/*Chat List */}
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatEle {...el} />;
                })}
              </Stack>

              <Stack spacing={2.5}>{/* */}</Stack>
            </Stack>
          </Stack>
        </Box>

        {/*Right sided box */}
        {/*Implememt /Reuse conversation component */}
      </Stack>
      {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog}/>}
    </>
  );
};

export default Group;
