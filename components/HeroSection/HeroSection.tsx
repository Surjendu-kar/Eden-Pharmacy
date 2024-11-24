"use client";
import { Stack, styled, Typography } from "@mui/material";
import CenterContainer from "./CenterContainer";
import BottomContainer from "./BottomContainer";

const MainContainer = styled(Stack)(({ theme }) => ({
  background: "#E2F5FB",
  height: "80dvh",
  alignItems: "center",
  margin: "0.75rem",
  // position: "relative",

  [theme.breakpoints.down("sm")]: {},
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: "#003569",
  fontSize: "5rem",
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
      <BottomContainer />
    </MainContainer>
  );
}

export default HeroSection;
