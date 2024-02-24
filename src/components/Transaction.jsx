/* eslint-disable react/prop-types */
import { useState } from "react";
import { Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/material'

export function handleClick() {

}

export default function People({data}) {
const [bata, setdata] = useState(data);

    return (
        <>
        <Grid position="relative" sx={{ background:'lightgrey', color:'black', borderRadius:'10px'}}>
            <Toolbar sx={{alignItems:'center'}}>
                <Box sx={{margin: 0}}>
                    <Typography variant="h6" >
                        Transactions
                    </Typography>
                </Box>
                <Box sx={{ marginRight: 2, overflowY: 'auto', maxHeight:'100px'}}>
                    {bata &&
                        bata.map((peeps,idx) => {
                            return <Typography key={idx} variant="body2" >
                            Name: {peeps.user} <br/>
                            Cost: {peeps.cost} <br/> 
                            Date: {peeps.date} 
                            </Typography>
                        })
                    }
                </Box>
            </Toolbar>
        </Grid>
        </>
    )
}