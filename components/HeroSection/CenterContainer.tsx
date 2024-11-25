import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import Medicine from "@/public/medicine.png";
import Frame1 from "@/public/Frame-1.svg";
import Frame2 from "@/public/Frame-2.svg";
import Frame3 from "@/public/Frame-3.svg";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-end",
  [theme.breakpoints.down("sm")]: {},
}));

const LeftContent = styled(Stack)(({ theme }) => ({
  width: "25%",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1), width: "23%" },
}));

const CenterContent = styled(Stack)(({ theme }) => ({
  height: "270px",
  width: "250px",
  background: "#FFE9B5",
  borderTopLeftRadius: "90px",
  borderBottomRightRadius: "90px",

  "& img": {
    width: "280px",
    height: "300px",
    position: "relative",
    bottom: 70,
    right: 20,
  },

  [theme.breakpoints.down("sm")]: {
    height: "150px",
    width: "150px",
    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px",

    "& img": {
      width: "180px",
      height: "200px",
      position: "relative",
      bottom: 60,
      right: 20,
    },
  },
}));

const RightContent = styled(Stack)(({ theme }) => ({
  width: "27%",
  gap: theme.spacing(3),
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(2), width: "30%" },
}));

const ImageStyle = styled(Image)(({ theme }) => ({
  width: "50px",
  height: "50px",
  [theme.breakpoints.down("sm")]: { width: "35px", height: "35px" },
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#003569",
  fontSize: "18px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#727272",
  fontSize: "11px",

  [theme.breakpoints.down("sm")]: { fontSize: "8px" },
}));

const ButtonStyle = styled("button")(({ theme }) => ({
  background: "#17414F",
  color: "white",
  padding: "7px 20px",
  borderRadius: "15px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: { padding: "4px 10px", fontSize: "10px" },
}));

function CenterContainer() {
  return (
    <Container>
      {/* left content */}
      <LeftContent>
        <Description
          sx={{
            fontSize: { xs: "9px", sm: "13px" },
          }}
        >
          Online Medical Supplies
        </Description>
        <Title
          sx={{
            lineHeight: { xs: "16px", sm: "20px" }, 
            fontSize: { xs: "12px", sm: "20px" },
          }}
        >
          Get Your Vitamins & Minerals
        </Title>
        <ButtonStyle>Explore</ButtonStyle>
      </LeftContent>

      {/* center content */}
      <Box width={"30%"}>
        <CenterContent>
          <Image src={Medicine} alt="Medicine" />
        </CenterContent>
      </Box>

      {/* right content */}
      <RightContent>
        <FeatureBox>
          <Box>
            <ImageStyle src={Frame1} alt="VegetarianFriendlyImg" />
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
            <ImageStyle src={Frame2} alt="" />
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
            <ImageStyle src={Frame3} alt="" />
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
  );
}

export default CenterContainer;
