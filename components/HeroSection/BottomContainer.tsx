"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import VegetarianFriendlyImg from "@/public/Group-8110.svg.svg";
import FreeShippingImg from "@/public/Group-8114.svg.svg";
import NoRiskImg from "@/public/Group-8115.svg.svg";
import GMOImg from "@/public/Group-8116.svg.svg";
import MadeInIndiaImg from "@/public/Group-8117.svg.svg";
import ClinicallyImg from "@/public/Group-8111.svg (1).svg";

const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  minWidth: theme.spacing(146.4),
  maxWidth: theme.spacing(146.4),
  minHeight: theme.spacing(40),
  borderRadius: theme.spacing(4),
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(3),
    minWidth: theme.spacing(43),
    maxWidth: theme.spacing(60),
    height: theme.spacing(25),
    gap: theme.spacing(3),
  },
}));

const BottomFeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(1),
  color: "white",
  width: "17%",
  position: "relative",
  bottom: 80,

  [theme.breakpoints.down("sm")]: {
    width: "40%",
    bottom: 60,
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  background: "white",
  borderRadius: "50%",
  width: theme.spacing(10),
  height: theme.spacing(10),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: theme.spacing(3.2),
  },

  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),

    "& img": {
      width: theme.spacing(2),
    },
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#FFFFF",
  fontSize: theme.spacing(2.4),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.2),
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontSize: theme.spacing(1.4),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(0.8),
  },
}));

function BottomContainer() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-200px",
      }}
    >
      <Container>
        {/* Top row features */}
        <Stack
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          direction={"row"}
        >
          <BottomFeatureBox>
            <IconCircle>
              <Image src={ClinicallyImg} alt="ClinicallyImg" />
            </IconCircle>
            <Title>Clinically Studied</Title>
            <Description>
              All products that we offer have undergone lab and safety tests
            </Description>
          </BottomFeatureBox>

          <BottomFeatureBox>
            <IconCircle>
              <Image src={VegetarianFriendlyImg} alt="VegetarianFriendlyImg" />
            </IconCircle>
            <Title>Vegetarian Friendly</Title>
            <Description>
              We have a wide selection of vegetarian products to meet your needs
            </Description>
          </BottomFeatureBox>

          <BottomFeatureBox>
            <IconCircle>
              <Image src={MadeInIndiaImg} alt="MadeInIndiaImg" />
            </IconCircle>
            <Title>Made In India</Title>
            <Description>
              Shop local and explore health products made right here in India
            </Description>
          </BottomFeatureBox>
        </Stack>

        {/* Bottom row features */}
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          width="100%"
        >
          <BottomFeatureBox>
            <IconCircle>
              <Image src={FreeShippingImg} alt="FreeShippingImg" />
            </IconCircle>
            <Title>Free Shipping</Title>
            <Description>
              We deliver to your door with no shipping costs on your orders
            </Description>
          </BottomFeatureBox>

          <BottomFeatureBox>
            <IconCircle>
              <Image src={NoRiskImg} alt="NoRiskImg" />
            </IconCircle>
            <Title>No Risk</Title>
            <Description>
              We ensure that all products are safe and within their use-by date
            </Description>
          </BottomFeatureBox>

          <BottomFeatureBox>
            <IconCircle>
              <Image src={GMOImg} alt="GMOImg" />
            </IconCircle>
            <Title>GMO Free</Title>
            <Description>
              Natural, no modified products and derivatives for those who need
              it
            </Description>
          </BottomFeatureBox>
        </Stack>
      </Container>
    </div>
  );
}

export default BottomContainer;
