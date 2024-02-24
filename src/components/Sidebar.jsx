/* eslint-disable react/prop-types */
import { Drawer,Box } from '@mui/material'
import {Typography} from '@mui/material'



export default function Sidebar() {
   

    return (
        <>
            <Drawer 
                variant="permanent"      
                anchor="left"
                open={true}    
            >
                <Box width='240px'>
                    <Typography >
                        Food House
                    </Typography>
                     <Typography fontSize='12px'>
                        Dashboard Owner
                    </Typography>
                    <Typography fontSize='11px'>
                        Open Dashboard
                    </Typography>
                </Box>
                
            </Drawer>
            
            


           
        </>
    )
}