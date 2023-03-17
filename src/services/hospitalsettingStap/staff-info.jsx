import { Box, Divider, Grid, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import theme from '../../assets/Theme'
import MDButton from '../../components/MDButton'
import MDContainer from '../../components/MDContainer'
import MDTextField from '../../components/MDTextField'
import MDToggleButton from '../../components/MDToggleButton'
import AddIcon from '@mui/icons-material/Add';
import MDTable from '../../components/MDTable'
import MDSearchField from '../../components/MDSearchField'
import MDHeading from '../../components/MDHeading'


const StaffInfo = () => {
    const [alignment, setAlignment] = React.useState("web");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
  return (
    <>
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
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={3} xl={1}>
                                    <MDButton sx={{width:{xs:"100%",lg:"80px!important"}}}><AddIcon sx={{fontSize:"28px",width:"80px!important"}}/></MDButton>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </MDContainer>
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
                         <MDHeading>Medical Staff</MDHeading>
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
                 </>
  )
}

export default StaffInfo