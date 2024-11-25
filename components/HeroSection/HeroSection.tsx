"use client";
import { Stack, styled, Typography } from "@mui/material";
import CenterContainer from "./CenterContainer";

const MainContainer = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.paper,
  height: "850px",
  alignItems: "center",
  margin: "0.75rem",

  [theme.breakpoints.down("sm")]: { height: "50dvh" },
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: "#003569",
  fontSize: "6rem",
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

function HeroSection() {
  return (
    <MainContainer>
      {/* heading */}
      <Heading>Essential Vitamins</Heading>

      {/* center content */}
      <CenterContainer />

      {/* bottom content */}
    </MainContainer>
  );
}

export default HeroSection;
