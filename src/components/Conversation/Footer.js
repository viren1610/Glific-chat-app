import React, { useState } from "react";
import {
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
  Fab,
  Tooltip,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Sticker,Camera,File,Image,LinkSimple, Smiley, PaperPlaneTilt } from "phosphor-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "&.MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Action = [
  {
    color:"#4da5fe",
    icon:<Image size={24}/>,
    y:102,
    title:"Photo/Video"
  },
  {
    color:"#1b8cfe",
    icon:<Sticker size={24}/>,
    y:172,
    title:"Stickers"
  },
  {
    color:"#0172e4",
    icon:<Camera size={24}/>,
    y:242,
    title:"Image"
  },
  {
    color:"#0159b2",
    icon:<File size={24}/>,
    y:312,
    title:"Contact"
  }
]

const ChatInput = ({setOpenPicker}) => {
  const [openAction,setOpenActions] = useState(false)
  return (
    <StyledInput
      alignItems={"center"}
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack direction={"column"} sx={{ position: "relative",display: openAction?'inline':"none"}}>
              {Action.map((el) => (
                <Tooltip title={el.title} placement="right">
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={()=>{
                setOpenActions((prev)=>!prev);
              }}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setOpenPicker((prev) => !prev);
              }}
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const theme = useTheme();
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
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Box sx={{ display:openPicker ?"inline" :"none",zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>
          <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput  setOpenPicker={setOpenPicker}/>
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="white" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;