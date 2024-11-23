"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import Medicine from "@/public/medicine.png";
import Frame1 from "@/public/Frame-1.svg";
import Frame2 from "@/public/Frame-2.svg";
import Frame3 from "@/public/Frame-3.svg";

const MainContainer = styled(Stack)(({ theme }) => ({
  background: "#E2F5FB",
  height: "100dvh",
  alignItems: "center",
  margin: "0.75rem",
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-end",
  [theme.breakpoints.down("sm")]: {},
}));

const LeftContent = styled(Stack)(({ theme }) => ({
  width: "20%",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {},
}));

const CenterContent = styled(Stack)(({ theme }) => ({
  background: "#FFE9B5",
  borderTopLeftRadius: "80px",
  borderBottomRightRadius: "80px",
  [theme.breakpoints.down("sm")]: {},
}));

const RightContent = styled(Stack)(({ theme }) => ({
  width: "28%",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {},
}));

const ImageStyle = styled(Image)(({ theme }) => ({
  width: "45px",
  [theme.breakpoints.down("sm")]: {},
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {},
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: "#003569",
  fontSize: "5rem",
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#003569",
  fontSize: "18px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {},
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#727272",
  fontSize: "10px",

  [theme.breakpoints.down("sm")]: {},
}));

const ButtonStyle = styled("button")(({ theme }) => ({
  background: "#17414F",
  color: "white",
  padding: "7px 20px",
  borderRadius: "15px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {},
}));

function HeroSection() {
  return (
    <MainContainer>
      {/* heading */}
      <Heading>Essential Vitamins</Heading>

      {/* center content */}
      <Container>
        {/* left content */}
        <LeftContent>
          <Description sx={{ fontSize: "13px" }}>
            Online Medical Supplies
          </Description>
          <Title>Get Your Vitamins & Minerals</Title>
          <ButtonStyle>Explore</ButtonStyle>
        </LeftContent>

        {/* center content */}
        <CenterContent>
          <Image src={Medicine} alt="Medicine" width={230} height={250} />
        </CenterContent>

        {/* right content */}
        <RightContent>
          <FeatureBox>
            <Box>
              <ImageStyle src={Frame1} alt="img1" />
            </Box>
            <Box>
              <Title>Vitamins</Title>
              <Description>
                Increased Vitamins and minerals in your diet
              </Description>
            </Box>
          </FeatureBox>

          <FeatureBox>
            <Box>
              <ImageStyle src={Frame2} alt="img2" />
            </Box>
            <Box>
              <Title>Weight Loss</Title>
              <Description>
                Weight Loss Find scientifically proven solutions
              </Description>
            </Box>
          </FeatureBox>

          <FeatureBox>
            <Box>
              <ImageStyle src={Frame3} alt="img3" />
            </Box>
            <Box>
              <Title>Functional Foods</Title>
              <Description>
                Functional Foods From protein powers to baby formula
              </Description>
            </Box>
          </FeatureBox>
        </RightContent>
      </Container>
    </MainContainer>
  );
}

export default HeroSection;
