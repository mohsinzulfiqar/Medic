import { Box, Divider, Grid, ToggleButtonGroup } from "@mui/material";
import React from "react";
import theme from "../../assets/Theme";
import MDBadge from "../../components/MDBadge";
import MDButton from "../../components/MDButton";
import MDContainer from "../../components/MDContainer";
import MDHeading from "../../components/MDHeading";
import MDHeadingSub from "../../components/MDHeadingSub";
import MDLabel from "../../components/MDLabel";
import MDLabelPrimary from "../../components/MDLabelPrimary";
import MDSearchField from "../../components/MDSearchField";
import MDTextField from "../../components/MDTextField";
import MDToggle from "../../components/MDToggle";
import AddIcon from '@mui/icons-material/Add';
import DoctorCard from "../../components/sharedcomponents/doctor-card";
import InfoCard from "../../components/sharedcomponents/info-card";
import MDToggleButton from "../../components/MDToggleButton";
import Navbar from "../../layouts/Navbar";
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import MDError from "../../components/MDError";
import axios from "axios";
import { CreateStaff, GetStaff } from "../hospitalsettingStap/hospitalApi/hospitalApiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MDTable from "../hospitalsettingStap/hospitalApi/MDTable";

var rows = [];

const CreateRows = (data) => {
    return data?.map((row) => {
      return {
        id: row?.id,
        staffName: row?.staffName,
        fee: row?.fee,
        phone: row?.phone,
        specialization: row?.specialization,
        staffType: row?.staffType,
        timing: row?.timing,
      };
    });
  };

const MedicalStaff = () => {
    const [alignment, setAlignment] = React.useState("Doctor");
    const dispatch=useDispatch()
  const allStaffData = useSelector((state) => state.hospital);

    const handleStaff = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const initialValues = {
        staffName:"",
        specialization:"",
        fee:"",
        phone:"",
        timing:""
    };

    let Schema = yup.object().shape({
        staffName: yup.string().required("Name reuqired"),
        specialization: yup.string().required("reuqired"),
        fee: yup.string().required("Fee reuqired"),
        phone: yup.string().required("Phone reuqired"),
        timing: yup.string().required("Timing reuqired"),
    });
  rows = CreateRows(allStaffData?.allStaff?.data?.staff);

  React.useEffect(() => {
    dispatch(GetStaff());
  }, []);

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
                             <Formik
                            initialValues={initialValues}
                            validationSchema={Schema}
                            onSubmit={async (data) => {
                                data.staffType = alignment;
                                await dispatch(CreateStaff(data))
                                await dispatch(GetStaff())
                            }}
                        >
                            {({ handleChange, touched, handleBlur, errors }) => (
                                <Form>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Name" name="staffName" onChange={handleChange} onBlur={handleBlur} valid={errors.staffName} touch={touched.staffName}/>
                            {errors.staffName && touched.staffName ? <MDError>{errors.staffName}</MDError> : null}

                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Specialization" name="specialization" onChange={handleChange} onBlur={handleBlur} valid={errors.specialization} touch={touched.specialization}/>
                            {errors.specialization && touched.specialization ? <MDError>{errors.specialization}</MDError> : null}

                                    </Grid>{" "}
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={1}>
                                        <MDTextField placeholder="500" name="fee" onChange={handleChange} onBlur={handleBlur} valid={errors.fee} touch={touched.fee}/>
                            {errors.fee && touched.fee ? <MDError>{errors.fee}</MDError> : null}

                                    </Grid>{" "}
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2 }>
                                    <ToggleButtonGroup
                                            color="primary"
                                            value={alignment}
                                            onChange={handleStaff}
                                            exclusive
                                            aria-label="Platform"
                                            sx={{
                                                background: "#F5F5F5",
                                                border: "none",
                                                borderRadius: "50px",
                                                width: "100%",
                                            }}
                                        >
                                            <MDToggleButton value="Nurse">Nurse</MDToggleButton>
                                                <MDToggleButton value="Doctor">Doctor</MDToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Phone" name="phone" onChange={handleChange} onBlur={handleBlur} valid={errors.phone} touch={touched.phone}/>
                            {errors.phone && touched.phone ? <MDError>{errors.phone}</MDError> : null}

                                    </Grid>{" "}
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MDTextField placeholder="Timing" name="timing" onChange={handleChange} onBlur={handleBlur} valid={errors.timing} touch={touched.timing}/>
                            {errors.timing && touched.timing ? <MDError>{errors.timing}</MDError> : null}

                                    </Grid>{" "}
                                    <Grid item xs={12} sm={12} md={12} lg={3} xl={1}>
                                    <MDButton sx={{width:{xs:"100%",lg:"80px!important"}}} type="submit"><AddIcon sx={{fontSize:"28px",width:"80px!important"}}/></MDButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Form>
                            )}
                        </Formik>

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
                       {rows && <MDTable rows={rows}/>}

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
