import React from "react";
import { Box, Stack} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height="100%" maxHeight="100vh" width="auto">
      <Header />

      {/*chat msgs */}
      <Box sx={{ width: "100%", flexGrow: 1, height:"100%",overflowY:"scroll"}}>
        <Message menu={2}/>
      </Box>

      {/*chat footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
