import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { MediaMsg, Timeline, ReplyMsg, TextMsgs, LinkMsg,DocMsg } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3} sx={{ overflow: "hidden" }}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />; //Timeline

            case "msg":
              switch (el.subtype) {
                case "img":
                  //img
                  return <MediaMsg el={el} />;
                 

                case "doc":
                  return <DocMsg el={el}/>
                case "link":
                 return <LinkMsg el={el}/>

                case "reply":
                 return <ReplyMsg el={el} />;
                 

                default:
                  return <TextMsgs el={el} />;
                  
              }
              break;

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
