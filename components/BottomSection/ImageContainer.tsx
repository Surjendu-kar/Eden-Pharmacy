import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Img1 from "@/public/BottomImages/blog1-450x580.jpg.svg";
import Img2 from "@/public/BottomImages/blog2-450x580.jpg.svg";
import Image from "next/image";

interface ImageWrapperProps {
  "data-large"?: string;
}

interface TitleOverlayProps {
  "data-large"?: string;
}

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: theme.spacing(5),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1) },
}));

const ImageBox = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1) },
}));

const ImageWrapper = styled(Box)<ImageWrapperProps>(
  ({ "data-large": large, theme }) => ({
    position: "relative",
    height: large === "true" ? theme.spacing(50) : theme.spacing(20),
    width: "100%",
    "& > img": {
      objectFit: "cover",
      width: "100% !important",
      height: "100% !important",
      position: "relative !important",
    },
    [theme.breakpoints.down("sm")]: {
      height: large === "true" ? theme.spacing(35) : theme.spacing(10),
    },
  })
);

const TitleOverlay = styled(Typography)<TitleOverlayProps>(
  ({ theme, "data-large": large }) => ({
    position: "absolute",
    top: large === "true" ? "20%" : "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.common.white,
    width: "80%",
    fontSize: theme.spacing(2),
    fontWeight: 700,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(1.3),
      top: large === "true" ? "25%" : "65%",
    },
  })
);

const DateBadge = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "-10px",
  background: "#003569",
  color: theme.palette.common.white,
  padding: theme.spacing(0.6, 2.5),
  borderTopRightRadius: theme.spacing(1.5),
  borderBottomRightRadius: theme.spacing(1.5),
  fontSize: theme.spacing(1.6),
  fontWeight: 500,
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(1),
  },
}));

function ImageContainer() {
  return (
    <Container>
      {/* col-1 */}
      <ImageBox>
        <ImageWrapper data-large="true">
          <Image
            src={Img1}
            alt={"img1"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="true">
            the Covid-19 Epidemic In 2022 is Back
          </TitleOverlay>
          <DateBadge>20 Apr</DateBadge>
        </ImageWrapper>
        <ImageWrapper data-large="false">
          <Image
            src={Img2}
            alt={"img2"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="false">
            the Covid-19 Epidemic In 2023 is Back
          </TitleOverlay>
          <DateBadge>20 Apr</DateBadge>
        </ImageWrapper>
      </ImageBox>

      {/* col-2 */}
      <ImageBox>
        <ImageWrapper data-large="false">
          <Image
            src={Img1}
            alt={"img3"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="false">
            the Covid-19 Epidemic In 2022 is Back
          </TitleOverlay>
          <DateBadge>20 Apr</DateBadge>
        </ImageWrapper>
        <ImageWrapper data-large="true">
          <Image
            src={Img2}
            alt={"img4"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="true">
            the Covid-19 Epidemic In 2023 is Back
          </TitleOverlay>
        </ImageWrapper>
      </ImageBox>

      {/* col-3 */}
      <ImageBox>
        <ImageWrapper data-large="true">
          <Image
            src={Img1}
            alt={"img5"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="true">
            the Covid-19 Epidemic In 2022 is Back
          </TitleOverlay>
          <DateBadge>20 Apr</DateBadge>
        </ImageWrapper>
        <ImageWrapper data-large="false">
          <Image
            src={Img2}
            alt={"img6"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="false">
            the Covid-19 Epidemic In 2023 is Back
          </TitleOverlay>
          <DateBadge>20 Apr</DateBadge>
        </ImageWrapper>
      </ImageBox>

      {/* col-4 */}
      <ImageBox>
        <ImageWrapper data-large="false">
          <Image
            src={Img1}
            alt={"img7"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="false">
            the Covid-19 Epidemic In 2022 is Back
          </TitleOverlay>
          <DateBadge>20 Apr</DateBadge>
        </ImageWrapper>
        <ImageWrapper data-large="true">
          <Image
            src={Img2}
            alt={"img8"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="true">
            Hac hendrerit mus nons semper suspendisse
          </TitleOverlay>
          <DateBadge>17 Mar</DateBadge>
        </ImageWrapper>
      </ImageBox>
    </Container>
  );
}

export default ImageContainer;
