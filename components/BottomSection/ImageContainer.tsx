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
  flexWrap: "wrap",
  gap: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {},
}));

const ImageBox = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {},
}));

const ImageWrapper = styled(Box)<ImageWrapperProps>(
  ({ "data-large": large }) => ({
    position: "relative",
    height: large === "true" ? "400px" : "200px",
    width: "100%",
    "& > img": {
      objectFit: "cover",
      width: "100% !important",
      height: "100% !important",
      position: "relative !important",
    },
  })
);

const TitleOverlay = styled(Typography)<TitleOverlayProps>(
  ({ theme, "data-large": large }) => ({
    position: "absolute",
    top: large === "true" ? "20%" : "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    width: "80%",
    fontSize: "15px",
    fontWeight: 600,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {},
  })
);

const DateBadge = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "20px",
  left: "-10px",
  background: "#003569",
  color: "white",
  padding: "6px 25px",
  borderTopRightRadius: "15px",
  borderBottomRightRadius: "15px",
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {},
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
            alt={"img1"}
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
            alt={"img2"}
            fill
            style={{ borderRadius: "15px" }}
          />
          <TitleOverlay data-large="true">
            the Covid-19 Epidemic In 2023 is Back
          </TitleOverlay>
          <DateBadge>20 Apr</DateBadge>
        </ImageWrapper>
      </ImageBox>

      {/* col-3 */}
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

      {/* col-4 */}
      <ImageBox>
        <ImageWrapper data-large="false">
          <Image
            src={Img1}
            alt={"img1"}
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
            alt={"img2"}
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
