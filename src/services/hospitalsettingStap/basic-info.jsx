import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../assets/Theme";
import MDButton from "../../components/MDButton";
import MDContainer from "../../components/MDContainer";
import MDTextField from "../../components/MDTextField";


const BasicInfo = () => {
    return (
        <>
            <Box sx={{mt:5}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <MDContainer
                            sx={{
                                background: `${theme.palette.mintcream.main}`,
                            }}
                        >
                            <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <MDTextField placeholder="Hospital Name" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <MDTextField placeholder="Owner Name" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <MDTextField placeholder="Hospital Name" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <MDTextField placeholder="Landline / Ptcl" type="number" />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <MDTextField placeholder=" +92 | Enter Your Phone Number" />
                                </Grid>
                                {/* <Grid
                                    item
                                    xs={12}
                                    display="flex"
                                    justifyContent="end"
                                    alignItems="center"
                                >
                                    <MDButton
                                        sx={{
                                            background: `${theme.palette.primary.main}`,
                                            color: `${theme.palette.mintastic.main}`,
                                            px: { sm: 9, lg: 12 },
                                        }}
                                    >
                                        Save
                                    </MDButton>
                                </Grid> */}

                                {/* { xs: 0, xl: 2, md: 0 }, */}
                            </Grid>
                        </MDContainer>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};


export default BasicInfo