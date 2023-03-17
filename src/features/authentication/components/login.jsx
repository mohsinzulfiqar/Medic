import { Grid } from "@mui/material";
import { Box, margin } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import login from "../../../assets/images/login.png";
import theme from "../../../assets/Theme";
import MDButton from "../../../components/MDButton";
import MDCheckbox from "../../../components/MDCheckbox";
import MDHeading from "../../../components/MDHeading";
import MDHeadingSub from "../../../components/MDHeadingSub";
import MDTextField from "../../../components/MDTextField";

const Login = () => {
    const navigate=useNavigate()
    return (
        <>
        <Box>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{
                        background: `${theme.palette.primary.main}`,
                        position:"relative"
                        
                    }}
                >
                    <Box
                        sx={{
                            width: "80%",
                            height: "100vh",
                            margin: "auto",
                            py: 6,
                            pr: { md: 5 },
                            display: "flex", justifyContent: "space-between", flexDirection: "column"

                        }}
                    >
                        <MDHeadingSub
                            sx={{
                                color: `${theme.palette.mintastic.main}`,
                                fontFamily: "GontserratBold",
                            }}
                        >
                            Medicdex
                        </MDHeadingSub>
                        <Box>
                            <MDHeading sx={{ color: `${theme.palette.mintastic.main}` }}>
                                Login
                            </MDHeading>
                            <MDTextField type="email" placeholder="Enter Email / hospital ID" sx={{mt:{xs:2,md:5}}}/>
                            <MDTextField type="password" placeholder="Enter Password" sx={{mt:{xs:2,md:4}}}/>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "center",
                                    mt:{xs:1,md:4}

                                }}
                            >
                                <MDCheckbox sx={{mr:1}}/>
                                <MDHeadingSub>I accept all Terms & Conditions.</MDHeadingSub>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "center",
                                    mt:{xs:1,md:2.4}

                                }}
                            >
                                <MDButton
                                    sx={{
                                        mr: { xs: 2, xl: 2, md: 4 },
                                        width: { xs: "140px", sm: "170px", md: "220px" },
                                        "&:hover": {
                                            background: theme.palette.secondary.main
                                        }
                                    }}
                                    onClick={()=>{
                                        navigate("/")
                                    }}
                                >
                                    Login
                                </MDButton>
                                <MDHeadingSub>Forgot password?</MDHeadingSub>
                            </Box>

                        </Box>
                        <MDHeadingSub sx={{ color: theme.palette.lightgreen.main, fontSize: { xs: "1rem", sm: "1.2rem", md: "2rem" } }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </MDHeadingSub>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={login} alt="login" style={{height:"100%",width:"100%",objectFit:"fill"}}/>
                </Grid>
            </Grid>
        </Box>
      
        </>
    );
};

export default Login;
