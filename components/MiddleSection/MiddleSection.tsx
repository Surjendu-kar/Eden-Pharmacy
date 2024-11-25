"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Img1 from "@/public/CenterImages/Vitamin-C.svg";
import Img2 from "@/public/CenterImages/div.elbzotech-banner-info-wrap (1).svg";
import Img3 from "@/public/CenterImages/Megnesium.svg";
import Img4 from "@/public/CenterImages/div.elbzotech-banner-info-wrap.svg";
import Img5 from "@/public/CenterImages/lactobacillus.svg";
import Img6 from "@/public/CenterImages/Demo.svg";
import Image from "next/image";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "80%",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(4) },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#17414F",
  fontSize: "40px",
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: { fontSize: "20px" },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#727272",
  fontSize: "16px",

  [theme.breakpoints.down("sm")]: { fontSize: "11px" },
}));

const ImageStyle = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

function MiddleSection() {
  return (
    <MainContainer>
      <Container>
        <Stack sx={{ width: "38%", gap: { xs: 0, sm: 2 } }}>
          <Typography
            sx={{
              textTransform: "Uppercase",
              fontSize: { xs: "10px", sm: "16px" },
              color: "#003569",
              fontWeight: 600,
            }}
          >
            Ingredients
          </Typography>
          <Title>Better Ingredients</Title>

          <Description>
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </Description>
        </Stack>

        <ImageStyle src={Img1} alt="img1" />
        <ImageStyle src={Img2} alt="img2" />
        <ImageStyle src={Img3} alt="img3" />
        <ImageStyle src={Img4} alt="img4" />
        <ImageStyle src={Img5} alt="img5" />
        <ImageStyle src={Img6} alt="img6" />
      </Container>
    </MainContainer>
  );
}

export default MiddleSection;
