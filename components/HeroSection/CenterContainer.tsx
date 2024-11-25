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
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1), width: "22%" },
}));

const CenterContent = styled(Stack)(({ theme }) => ({
  height: theme.spacing(30),
  width: theme.spacing(29),
  background: "#FFE9B5",
  borderTopLeftRadius: theme.spacing(9),
  borderBottomRightRadius: theme.spacing(9),

  "& img": {
    width: theme.spacing(33),
    height: theme.spacing(36),
    position: "relative",
    bottom: 80,
    right: 30,
  },

  [theme.breakpoints.down("sm")]: {
    height: theme.spacing(15),
    width: theme.spacing(13),
    borderTopLeftRadius: theme.spacing(5),
    borderBottomRightRadius: theme.spacing(5),

    "& img": {
      width: theme.spacing(16),
      height: theme.spacing(20),
      position: "relative",
      bottom: 45,
      right: 20,
    },
  },
}));

const RightContent = styled(Stack)(({ theme }) => ({
  width: "26%",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1), width: "30%" },
}));

const ImageStyle = styled(Image)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
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
  color: theme.palette.secondary.main,
  fontSize: theme.spacing(2.2),
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1.2),
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontSize: theme.spacing(1.4),

  [theme.breakpoints.down("sm")]: { fontSize: theme.spacing(0.8) },
}));

const ButtonStyle = styled("button")(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: "white",
  padding: theme.spacing(1, 4),
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: theme.spacing(1.6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0.4, 1),
    fontSize: theme.spacing(1),
  },
}));

function CenterContainer() {
  return (
    <Container>
      {/* left content */}
      <LeftContent>
        <Description
          sx={{
            fontSize: { xs: "9px", sm: "20px" },
          }}
        >
          Online Medical Supplies
        </Description>
        <Title
          sx={{
            lineHeight: { xs: "16px", sm: "30px" },
            fontSize: { xs: "12px", sm: "28px" },
            fontWeight: 500,
          }}
        >
          Get Your Vitamins & Minerals
        </Title>

        <Box>
          <ButtonStyle>Explore</ButtonStyle>
        </Box>
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
