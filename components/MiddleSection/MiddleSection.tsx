"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Img1 from "@/public/vitaminImg/Vitamin-C.svg";
import Img2 from "@/public/vitaminImg/div.elbzotech-banner-info-wrap (1).svg";
import Img3 from "@/public/vitaminImg/Megnesium.svg";
import Img4 from "@/public/vitaminImg/div.elbzotech-banner-info-wrap.svg";
import Img5 from "@/public/vitaminImg/lactobacillus.svg";
import Img6 from "@/public/vitaminImg/Demo.svg";
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
  [theme.breakpoints.down("sm")]: {},
}));

function MiddleSection() {
  return (
    <MainContainer>
      <Container>
        <Stack sx={{ width: "38%", gap: 2 }}>
          <Typography
            sx={{
              textTransform: "Uppercase",
              fontSize: "14px",
              color: "#003569",
              fontWeight: 600,
            }}
          >
            Ingredients
          </Typography>
          <Typography
            sx={{ color: "#17414F", fontSize: "32px", fontWeight: 600 }}
          >
            Better Ingredients
          </Typography>

          <Typography sx={{ color: "#727272", fontSize: "13px" }}>
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </Typography>
        </Stack>

        <Image src={Img1} alt="img1" />
        <Image src={Img2} alt="img1" />
        <Image src={Img3} alt="img1" />
        <Image src={Img4} alt="img1" />
        <Image src={Img5} alt="img1" />
        <Image src={Img6} alt="img1" />
      </Container>
    </MainContainer>
  );
}

export default MiddleSection;
