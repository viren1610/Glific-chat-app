import { Box, Stack } from '@mui/material'
import React from 'react'
import palette from '../../theme/palette'

const Group = () => {
  return (
    <>
     <Stack direction={"row"} sx={{width:"100%"}}>
        {/*Left sided box */}
        <Box sx={{height:"100vh",background:(theme)=>theme.palette.mode === 'light' ? "F8FAFF" : theme.palette.background}}>

        </Box>
        
        {/*Right sided box */}
    </Stack> 
    </>
  )
}

export default Group
