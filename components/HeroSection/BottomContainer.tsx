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
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Clinically Studied
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
            All products that we offer have undergone lab and safety tests
          </Typography>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={VegetarianFriendlyImg} alt="VegetarianFriendlyImg" />
          </IconCircle>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Vegetarian Friendly
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
            We have a wide selection of vegetarian products to meet your needs
          </Typography>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={MadeInIndiaImg} alt="MadeInIndiaImg"></Image>
          </IconCircle>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Made In India
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
            Shop local and explore health products made right here in India
          </Typography>
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
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Free Shipping
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
            We deliver to your door with no shipping costs on your orders
          </Typography>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={NoRiskImg} alt="NoRiskImg"></Image>
          </IconCircle>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            No Risk
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
            We ensure that all products are safe and within their use-by date
          </Typography>
        </BottomFeatureBox>

        <BottomFeatureBox>
          <IconCircle>
            <Image src={GMOImg} alt="GMOImg"></Image>
          </IconCircle>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            GMO Free
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
            Natural, no modified products and derivatives for those who need it
          </Typography>
        </BottomFeatureBox>
      </Stack>
    </Container>
  );
}

export default BottomContainer;
