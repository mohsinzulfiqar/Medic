import React from "react";
import theme from "../../assets/Theme";
import MDContainer from "../MDContainer";
import MDHeadingSub from "../MDHeadingSub";
import DefaultUser from "../../assets/images/DefaultUser.png";
import { Avatar, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import MDButton from "../MDButton";

const InfoCard = () => {
  return (
    <MDContainer
      sx={{
        background: `${theme.palette.white.main}`,
        p: "2rem 1rem!important",
        textAlign: "end",
        mb: 1.6,
      }}
    >
      <MDHeadingSub
        sx={{
          color: `${theme.palette.primary.main}`,
          fontSize: { md: "1.8rem" },
        }}
      >
        Settings
      </MDHeadingSub>
      <MDHeadingSub
        sx={{
          color: `${theme.palette.primary.main}`,
          fontSize: { md: "1.8rem" },
          mt: { xs: 1,sm:2, md: 3, lg: 4 },
        }}
      >
        Logout
      </MDHeadingSub>
      <MDHeadingSub
        sx={{
          color: `${theme.palette.primary.main}`,
          fontSize: { md: "1.8rem" },
          mt: { xs: 1,sm:2, md: 3, lg: 4 },
        }}
      >
        Customer Support
      </MDHeadingSub>

      <Divider
        sx={{
          background: `${theme.palette.whitedark.main}`,
          my: { xs: 1,sm:2, md: 3, lg: 4 },
          height: "3px",
        }}
      />
       <MDHeadingSub
        sx={{
          color: `${theme.palette.gray.main}`,
          mt: { xs: 1,sm:2, md: 3, lg: 4 },
        }}
      >
    Power & Designed by
      </MDHeadingSub>
      <MDHeadingSub
        sx={{
          color: `${theme.palette.primary.main}`,
          fontFamily:"GontserratBold",
        }}
      >

Medicdex
      </MDHeadingSub>
    </MDContainer>
  );
};

export default InfoCard;
