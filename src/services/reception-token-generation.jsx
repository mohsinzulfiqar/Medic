import { Box, Divider, Grid, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../assets/Theme";
import MDBadge from "../components/MDBadge";
import MDButton from "../components/MDButton";
import MDContainer from "../components/MDContainer";
import MDHeading from "../components/MDHeading";
import MDHeadingSub from "../components/MDHeadingSub";
import MDLabel from "../components/MDLabel";
import MDLabelPrimary from "../components/MDLabelPrimary";
import MDSearchField from "../components/MDSearchField";
import MDTable from "../components/MDTable";
import MDTextField from "../components/MDTextField";
import MDToggle from "../components/MDToggle";
import MDToggleButton from "../components/MDToggleButton";
import DoctorCard from "../components/sharedcomponents/doctor-card";
import InfoCard from "../components/sharedcomponents/info-card";
import Navbar from "../layouts/Navbar";
// import MyCustomTable from "./MyCustomTable";

const ReceptionTokenGeneration = () => {
    const [alignment, setAlignment] = React.useState("web");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Navbar />
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}  xl={10}>
                        <Grid container spacing={{ xs: 2 }}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <MDContainer
                                    sx={{
                                        background: `${theme.palette.mintcream.main}`,
                                    }}
                                >
                                    <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }}>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Box>
                                                <MDHeading
                                                    sx={{
                                                        color: `${theme.palette.primary.main}`,
                                                    }}
                                                >
                                                    New Patient
                                                </MDHeading>
                                                <MDHeadingSub
                                                    sx={{
                                                        color: `${theme.palette.lightgreen.main}`,
                                                        mt: "-10px",
                                                    }}
                                                >
                                                    in OPD
                                                </MDHeadingSub>
                                                <Divider
                                                    sx={{
                                                        background: `${theme.palette.lightgreen.main}`,
                                                        mt: 0.6,
                                                        height: "1px",
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <MDTextField placeholder="Patient Name" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <MDTextField placeholder="Father Name" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <MDTextField placeholder="NIC (Optional)" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <MDTextField placeholder="Age" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <ToggleButtonGroup
                                                color="primary"
                                                value={alignment}
                                                onChange={handleChange}
                                                exclusive
                                                aria-label="Platform"
                                                sx={{
                                                    background: "#F5F5F5",
                                                    border: "none",
                                                    borderRadius: "50px",
                                                    width: "100%",
                                                }}
                                            >
                                                <MDToggleButton value="web">Male</MDToggleButton>
                                                <MDToggleButton value="android">Female</MDToggleButton>
                                            </ToggleButtonGroup>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <MDTextField placeholder="Doctor/ Specialization" />
                                        </Grid>
                                        <Grid
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
                                                Print
                                            </MDButton>
                                        </Grid>
                                    </Grid>
                                </MDContainer>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                <MDContainer
                                    sx={{
                                        background: `${theme.palette.primary.main}`,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flex: 1,
                                            justifyContent: "space-between",
                                            alignItems: "start",
                                        }}
                                    >
                                        <Box>
                                            <MDHeading
                                                sx={{
                                                    color: `${theme.palette.mintastic.main}`,
                                                }}
                                            >
                                                Invoice
                                            </MDHeading>
                                            <br></br>
                                            <MDHeadingSub
                                                sx={{
                                                    mt: { xs: "-6px", sm: "-16px" },
                                                    color: `${theme.palette.lightgreen.main}`,
                                                }}
                                            >
                                                Saturday 27/ 09/ 2023
                                            </MDHeadingSub>
                                        </Box>
                                        <Box>
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.white.main}`,
                                                    fontSize: {
                                                        xs: "2rem!important",
                                                        sm: "3rem!important",
                                                        md: "5rem!important",
                                                        lg: "6rem!important",
                                                        xl: "8rem!important",
                                                    },
                                                    lineHeight: {
                                                        xs: "16px",
                                                        sm: "24px",
                                                        md: "40px",
                                                        lg: "48px",
                                                        xl: "80px",
                                                    },
                                                }}
                                            >
                                                00331
                                            </MDHeadingSub>
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.lightgreen.main}`,
                                                    width: "100%",
                                                    textAlign: "end",
                                                    mt: { sm: "-5px", md: "-6px", xl: "-4px" },
                                                }}
                                            >
                                                Token#
                                            </MDHeadingSub>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: "center" }}>
                                        <MDHeading
                                            sx={{
                                                color: `${theme.palette.mintastic.main}`,
                                                mt: { xs: 1, md: 4 },
                                                display: "inline-block",
                                                borderBottom: "1px solid #AFFFE0",
                                                px: 4,
                                            }}
                                        >
                                            Hospital Name
                                        </MDHeading>
                                    </Box>
                                    <Grid container spacing={{ xs: 2 }} sx={{ py: {xs:1, md:3} }}>
                                        <Grid item xs={4} md={6} lg={6} xl={3}>
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.lightgreen.main}`,
                                                    fontSize: { lg: "22px" },
                                                }}
                                            >
                                                Name
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={8} md={6} lg={6} xl={3}>
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.white.main}`,
                                                    fontSize: { lg: "22px" },
                                                    textAlign:{xs:"start",md:"center"}
                                                }}
                                            >
                                                Davis John
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={4} md={6} lg={6} xl={3}>
                                            {" "}
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.lightgreen.main}`,
                                                    fontSize: { lg: "22px" },
                                                }}
                                            >
                                                Age/ Gender:
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={8} md={6} lg={6} xl={3}>
                                            {" "}
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.white.main}`,
                                                    fontSize: { lg: "22px" },
                                                    textAlign:{xs:"start",md:"center"}

                                                }}
                                            >
                                                23/ M
                                            </MDHeadingSub>
                                        </Grid>
                                    </Grid>
                                    <Divider
                                        sx={{
                                            background: `${theme.palette.mintastic.main}`,
                                            mt: { xs: 1 },
                                            height: "1px",
                                        }}
                                    />
                                    <Grid container spacing={{ xs: 2 }} sx={{ py: 3 }}>
                                        <Grid item xs={3} >
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.lightgreen.main}`,
                                                    fontSize: { lg: "22px" },

                                                }}
                                            >
                                                Sr#
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={3} >
                                            {" "}
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.lightgreen.main}`,
                                                    fontSize: { lg: "22px" },

                                                }}
                                            >
                                                Doctor
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={3} >
                                            {" "}
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.lightgreen.main}`,
                                                    fontSize: { lg: "22px" },

                                                }}
                                            >
                                                Specialization
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={3} >
                                    
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.lightgreen.main}`,
                                                    fontSize: { lg: "22px" },
                                                    textAlign:"center"

                                                }}
                                            >
                                                Fee
                                            </MDHeadingSub>
                                        </Grid>
                                    </Grid>
                                    <Divider
                                        sx={{
                                            background: `${theme.palette.mintastic.main}`,
                                            height: "1px",
                                        }}
                                    />
                                    <Grid container spacing={{ xs: 2 }} sx={{ py: 3 }}>
                                        <Grid item xs={3} >
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.white.main}`,
                                                    fontSize: { lg: "22px" },
                                                }}
                                            >
                                            1.
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.white.main}`,
                                                    fontSize: { lg: "22px" },
                                                }}
                                            >
                                                umair
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.white.main}`,
                                                    fontSize: { lg: "22px" },
                                                }}
                                            >
                                                Child Specialist
                                            </MDHeadingSub>
                                        </Grid>
                                        <Grid item xs={3} >
                                            <MDHeadingSub
                                                sx={{
                                                    color: `${theme.palette.white.main}`,
                                                    fontSize: { lg: "22px" },
                                                    textAlign:"center"

                                                }}
                                            >
                                                500
                                            </MDHeadingSub>
                                        </Grid>
                                    </Grid>
                                 

                                    <Divider
                                        sx={{
                                            background: `${theme.palette.mintastic.main}`,
                                            mt: { xs: 1, md: 3, lg: 6 },
                                            height: "1px",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flex: 1,
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <MDHeading
                                            sx={{
                                                color: `${theme.palette.white.main}`,
                                            }}
                                        >
                                            Total:
                                        </MDHeading>
                                        <MDHeadingSub
                                            sx={{
                                                color: `${theme.palette.mintastic.main}`,
                                                fontSize: {
                                                    xs: "2rem!important",
                                                    sm: "3rem!important",
                                                    md: "4rem!important",
                                                    lg: "5rem!important",
                                                },
                                            }}
                                        >
                                            8000 PKR
                                        </MDHeadingSub>
                                    </Box>
                                </MDContainer>
                            </Grid>
                        </Grid>
                        <MDContainer
                        sx={{
                            background: `${theme.palette.mintcream.main}`,
                            mt: 3,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                justifyContent: { xs: "center", sm: "space-between" },
                                alignItems: { xs: "start", sm: "center" },
                                flex: 1,
                            }}
                        >
                            <MDHeading>Patients
                            <MDHeadingSub  sx={{
                                                color: `${theme.palette.gray.main}`,display:"inline-block",ml:{xs:1,md:3}}}>in OPD</MDHeadingSub>
                            </MDHeading>
                            <MDSearchField placeholder="Search" />
                        </Box>
                        <Divider
                            sx={{
                                background: `${theme.palette.secondary.main}`,
                                my: 4,
                                height: "1px",
                            }}></Divider>
                        <MDTable/>

                        {/* <MyCustomTable/> */}
                    </MDContainer>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={2}
                        display="flex"
                        flexDirection="column"
                    >
                        <MDContainer
                            sx={{
                                background: `${theme.palette.primary.main}`,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <MDLabelPrimary>Unveil new features</MDLabelPrimary>
                            <MDHeading
                                sx={{
                                    color: `${theme.palette.mintastic.main}`,
                                    fontSize: { xs: "3rem!important", md: "4rem!important" },
                                }}
                            >
                                Upgrade Now
                            </MDHeading>
                        </MDContainer>
                        <InfoCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ReceptionTokenGeneration;
