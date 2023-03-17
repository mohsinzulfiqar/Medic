import { Box, Divider, Grid, ToggleButtonGroup } from "@mui/material";
import React from "react";
import theme from "../assets/Theme";
import MDBadge from "../components/MDBadge";
import MDButton from "../components/MDButton";
import MDContainer from "../components/MDContainer";
import MDHeading from "../components/MDHeading";
import MDHeadingSub from "../components/MDHeadingSub";
import MDLabel from "../components/MDLabel";
import MDLabelPrimary from "../components/MDLabelPrimary";
import MDSearchField from "../components/MDSearchField";
import MDTextField from "../components/MDTextField";
import MDToggle from "../components/MDToggle";
import AddIcon from '@mui/icons-material/Add';
import DoctorCard from "../components/sharedcomponents/doctor-card";
import InfoCard from "../components/sharedcomponents/info-card";
import MDToggleButton from "../components/MDToggleButton";
import MDTable from "../components/MDTable";
import Navbar from "../layouts/Navbar";
// import MyCustomTable from "./MyCustomTable";

const MedicalStaff = () => {
    const [alignment, setAlignment] = React.useState("web");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (  <>
        <Navbar />
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={10}>
                    {/* Analytics Section */}
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} lg={6}>
                            <MDContainer
                                sx={{
                                    background: `${theme.palette.primary.main}`,
                                }}
                            >
                                <Box
                                    sx={{
                                        background: `${theme.palette.primary.main}`,
                                        display: "flex",
                                        flex: 1,
                                        justifyContent: "space-between",
                                        alignItems: "center ",
                                    }}
                                >
                                    <Box>
                                        <MDHeading
                                            sx={{
                                                color: `${theme.palette.white.main}`,
                                            }}
                                        >
                                            Doctors
                                        </MDHeading>
                                    </Box>
                                    <MDHeadingSub
                                        sx={{
                                            color: `${theme.palette.white.main}`,
                                            fontSize: {
                                                xs: "2rem!important",
                                                sm: "3rem!important",
                                                md: "3.7rem!important",
                                                lg: "5.8rem!important",
                                            },
                                        }}
                                    >
                                        20
                                    </MDHeadingSub>
                                </Box>
                            </MDContainer>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <MDContainer
                                sx={{
                                    background: `${theme.palette.secondary.main}`,
                                }}
                            >
                                <Box
                                    sx={{
                                        // background: `${theme.palette.primary.main}`,
                                        display: "flex",
                                        flex: 1,
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box>
                                        <MDHeading>Nurses</MDHeading>
                                    </Box>
                                    <MDHeadingSub
                                        sx={{
                                            color: `${theme.palette.white.main}`,
                                            fontSize: {
                                                xs: "2rem!important",
                                                sm: "3rem!important",
                                                md: "3.7rem!important",
                                                lg: "5.8rem!important",
                                            },
                                        }}
                                    >
                                        100
                                    </MDHeadingSub>
                                </Box>
                            </MDContainer>
                        </Grid>
                    </Grid>
                    {/* Hero Section */}
                    <MDContainer
                        sx={{
                            background: `${theme.palette.mintcream.main}`,
                            display: "flex",
                            alignItems: "center",
                            mt:2
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Name"/>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Specialization"/>
                                    </Grid>{" "}
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={1}>
                                        <MDTextField placeholder="500"/>
                                    </Grid>{" "}
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2 }>
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
                                            <MDToggleButton value="web">Nurse</MDToggleButton>
                                            <MDToggleButton value="android">Doctor</MDToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Phone"/>
                                    </Grid>{" "}
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Timing"/>
                                    </Grid>{" "}
                                    <Grid item xs={12} sm={12} md={12} lg={3} xl={1}>
                                    <MDButton sx={{width:{xs:"100%",lg:"80px!important"}}}><AddIcon sx={{fontSize:"28px",width:"80px!important"}}/></MDButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MDContainer>

                    {/* Patient Section */}

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
                            <MDHeading>Staff Management</MDHeading>
                            <MDSearchField placeholder="Search" />
                        </Box>
                        <Divider
                            sx={{
                                background: `${theme.palette.secondary.main}`,
                                my: 4,
                                height: "1px",
                            }}
                        ></Divider>
                        <MDTable/>

                        {/* <MyCustomTable/> */}
                    </MDContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={2}>
                    <MDContainer
                        sx={{
                            background: `${theme.palette.primary.main}`,
                            display: "flex",
                            justifyContent: "center",
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
                    <MDContainer
                        sx={{
                            background: `${theme.palette.mintcream.main}`,
                            mt:2
                        }}
                    >
                         <MDHeadingSub  sx={{
                                                color: `${theme.palette.black.main}`,mb:1.6,ml:1}}>Medical Staff</MDHeadingSub>
                       <DoctorCard/>
                       <DoctorCard/>
                       <DoctorCard/>
                       <DoctorCard/>
                       <DoctorCard/>

                    </MDContainer>
                    <InfoCard/>
                </Grid>
            </Grid>
        </Box>
    </>

    );
};

export default MedicalStaff;
