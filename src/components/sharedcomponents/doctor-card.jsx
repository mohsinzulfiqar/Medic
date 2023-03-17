import React from "react";
import theme from "../../assets/Theme";
import MDContainer from "../MDContainer";
import MDHeadingSub from "../MDHeadingSub";
import DefaultUser from "../../assets/images/DefaultUser.png";
import { Avatar, Grid } from "@mui/material";
import { Box } from "@mui/system";
import MDButton from "../MDButton";

const DoctorCard = () => {
  return (
    <MDContainer
      sx={{
        background: `${theme.palette.white.main}`,
        p: "2rem 1rem!important",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb:1.6
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={DefaultUser}
          sx={{ width: 53, height: 53, mr: 1, img: { objectFit: "fill" } }}
        />
        <MDHeadingSub
          sx={{
            color: `${theme.palette.primary.main}`,
            fontSize: { md: "2rem" },
          }}
        >
          Dr. Omair
          <MDHeadingSub
            sx={{
              color: `${theme.palette.gray.main}`,
              display: "block",
              fontSize: { xs: "7px", md: "7px" },
            }}
          >
            Child Specialist
          </MDHeadingSub>
        </MDHeadingSub>
      </Box>
      <MDButton
        sx={{
          width: {  xs: "57px!important" },
          height: {  xs: "37px!important" },
          color: `${theme.palette.black.main}`,
        }}
      >
        View
      </MDButton>
    </MDContainer>
  );
};

export default DoctorCard;
