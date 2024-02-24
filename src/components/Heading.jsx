/* eslint-disable react/prop-types */

import { Grid, Typography } from "@mui/material";


export default function Heading() {

    return (
        <Grid position='top' sx={{top:0, color:'black', borderRadius:'10px' }}>
            <Typography variant="h5" align="left">
                Dashboard
                <Typography ms={{fontsize: '12px'}}>
                    Welcome to the dashboard
                </Typography>
            </Typography>
        </Grid>
    )
}