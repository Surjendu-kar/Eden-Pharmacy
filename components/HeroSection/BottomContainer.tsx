import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import VegetarianFriendlyImg from "@/public/Group-8110.svg.svg";
import FreeShippingImg from "@/public/Group-8114.svg.svg";
import NoRiskImg from "@/public/Group-8115.svg.svg";
import GMOImg from "@/public/Group-8116.svg.svg";
import MadeInIndiaImg from "@/public/Group-8117.svg.svg";
import ClinicallyImg from "@/public/Group-8111.svg (1).svg";

const Container = styled(Box)(({ theme }) => ({
  background: "#17414F",
  width: "80%",
  borderRadius: "40px",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  position: "absolute",
  bottom: "0",
  left: "50%",
  transform: "translate(-50%, 70%)",
  zIndex: 1,
  height: "350px",
  [theme.breakpoints.down("sm")]: {},
}));

const BottomFeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(1),
  color: "white",
  width: "20%",
  position: "relative",
  bottom: 80,
}));

const IconCircle = styled(Box)(() => ({
  background: "white",
  borderRadius: "50%",
  width: "70px",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: "25px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#FFFFF",
  fontSize: "17px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {},
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#D9D9D9",
  fontSize: "10px",

  [theme.breakpoints.down("sm")]: {},
}));

function BottomContainer() {
  return (
    <Container>
      {/* Top row features */}
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
      >
        <BottomFeatureBox>
          <IconCircle>
            <Image src={ClinicallyImg} alt="ClinicallyImg"></Image>
          </IconCircle>
          <Title>
            Clinically Studied
          </Title>
          <Description>
            All products that we offer have undergone lab and safety tests
          </Description>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={VegetarianFriendlyImg} alt="VegetarianFriendlyImg" />
          </IconCircle>
          <Title>
            Vegetarian Friendly
          </Title>
          <Description>
            We have a wide selection of vegetarian products to meet your needs
          </Description>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={MadeInIndiaImg} alt="MadeInIndiaImg"></Image>
          </IconCircle>
          <Title>
            Made In India
          </Title>
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
            <Image src={FreeShippingImg} alt="FreeShippingImg"></Image>
          </IconCircle>
          <Title>
            Free Shipping
          </Title>
          <Description>
            We deliver to your door with no shipping costs on your orders
          </Description>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={NoRiskImg} alt="NoRiskImg"></Image>
          </IconCircle>
          <Title>
            No Risk
          </Title>
          <Description>
            We ensure that all products are safe and within their use-by date
          </Description>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={GMOImg} alt="GMOImg"></Image>
          </IconCircle>
          <Title>
            GMO Free
          </Title>
          <Description>
            Natural, no modified products and derivatives for those who need it
          </Description>
        </BottomFeatureBox>
      </Stack>
    </Container>
  );
}

export default BottomContainer;
