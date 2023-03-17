import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import theme from "../../assets/Theme";
import MDButton from "../../components/MDButton";
import MDContainer from "../../components/MDContainer";
import MDHeading from "../../components/MDHeading";
import MDHeadingSub from "../../components/MDHeadingSub";
import MDLabelPrimary from "../../components/MDLabelPrimary";
import MDSearchField from "../../components/MDSearchField";
import MDTextField from "../../components/MDTextField";
import DoctorCard from "../../components/sharedcomponents/doctor-card";
import InfoCard from "../../components/sharedcomponents/info-card";
import Navbar from "../../layouts/Navbar";
import IndoorTable from "./Table/indoor-table";
// import MyCustomTable from "./MyCustomTable";

const Indoor = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
            {/* Hero Section */}
            <MDContainer
              sx={{
                background: `${theme.palette.mintcream.main}`,
                display: "flex",
                alignItems: "center",
                p: { sm: "2!important", xl: "0!important" },
                flex: 1,
                width: "100%",
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
                <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
                  <MDContainer
                    sx={{
                      background: `${theme.palette.primary.main}`,
                      mr: { xs: 0, xl: 7 },
                    }}
                  >
                    <Box
                      sx={{
                        background: `${theme.palette.primary.main}`,
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
                          Patients
                        </MDHeading>
                        <MDHeadingSub
                          sx={{
                            color: `${theme.palette.white.main}`,
                            mt: "-10px",
                          }}
                        >
                          in Ward/ Inoor
                        </MDHeadingSub>
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
                        3k*
                      </MDHeadingSub>
                    </Box>
                  </MDContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection: { xs: "column", sm: "row" },
                        }}
                      >
                        <MDTextField type="date" />
                        <spna
                          style={{ display: "inline-block", margin: "0 20px" }}
                        >
                          To
                        </spna>
                        <MDTextField type="date" />
                        <MDButton
                          sx={{
                            ml: { xs: 0, sm: 2 },
                            mt: { xs: 2, sm: 0 },
                            mr: { xs: 0, xl: 2, md: 0 },
                          }}
                        >
                          Export
                        </MDButton>
                      </Box>
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
                <MDHeading>
                  Patients
                  <MDHeadingSub
                    sx={{
                      color: `${theme.palette.gray.main}`,
                      display: "inline-block",
                      ml: { xs: 1, md: 3 },
                    }}
                  >
                    in Ward/ Indoor
                  </MDHeadingSub>
                </MDHeading>
                <MDSearchField placeholder="Search" />
              </Box>
              <Divider
                sx={{
                  background: `${theme.palette.secondary.main}`,
                  my: 4,
                  height: "1px",
                }}
              ></Divider>
              <IndoorTable />

              {/* <MyCustomTable/> */}
            </MDContainer>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={2}
            display="flex"
            flexDirection="column"
            // justifyContent="space-between"
          >
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
                mt: 2,
              }}
            >
              <MDHeadingSub
                sx={{
                  color: `${theme.palette.black.main}`,
                  mb: 1.6,
                  ml: 1,
                }}
              >
                Medical Staff
              </MDHeadingSub>
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </MDContainer>
            <InfoCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Indoor;
