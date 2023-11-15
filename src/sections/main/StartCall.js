import { Dialog, DialogContent, DialogTitle, Slide } from '@mui/material'
import React from 'react'






const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const StartCall = ({open,handleClose}) => {
  return (
    <>
       <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ padding: 4 }}
      onClose={handleClose}
    >
         {/*Title */}
      <DialogTitle sx={{mb:3}}>Create New Call</DialogTitle>
      {/*Content */}
      <DialogContent>
        {/*Form */}
       
      </DialogContent>
    </Dialog>
    </>
  )
}

export default StartCall
