/* eslint-disable react/prop-types */
import { Typography, Grid, Box } from "@mui/material";
import { useState } from "react";


export default function Revenue ({data}) {
    const [bata, setData] = useState(data);
    

    return (
        <>
        <Grid sx={{ background:'lightgrey', color:'black', borderRadius:'10px'}}>
            <Box>
            <Typography>
                Revenue Generated
            </Typography>
            {bata &&(
                bata.reduce((total, i) => {
                    return +total + +i.cost;
                },0)

            )}
            </Box>
        </Grid>
        </>
    )
}