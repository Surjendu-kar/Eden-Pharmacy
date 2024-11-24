"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import Img1 from "@/public/BottomImages/blog1-450x580.jpg.svg";
import Img2 from "@/public/BottomImages/blog2-450x580.jpg.svg";
import Image from "next/image";

const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {},
}));

const ImageBox = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {},
}));

function BottomSection() {
  return (
    <Container>
      {/* heading */}
      <Stack sx={{ alignItems: "center", margin: "2rem 0" }}>
        <Typography
          sx={{ color: "#003569", textTransform: "uppercase", fontWeight: 600 }}
        >
          Our Blog
        </Typography>
        <Typography
          sx={{ color: "#17414F", fontWeight: 600, fontSize: "40px" }}
        >
          Latest news
        </Typography>
      </Stack>

      {/* content */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <ImageBox>
          <Image src={Img1} alt="img1" style={{ borderRadius: "15px" }} />
          <Image src={Img2} alt="img2" style={{ borderRadius: "15px" }} />
        </ImageBox>
        <ImageBox>
          <Image src={Img1} alt="img1" style={{ borderRadius: "15px" }} />
          <Image src={Img2} alt="img2" style={{ borderRadius: "15px" }} />
        </ImageBox>
        <ImageBox>
          <Image src={Img1} alt="img1" style={{ borderRadius: "15px" }} />
          <Image src={Img2} alt="img2" style={{ borderRadius: "15px" }} />
        </ImageBox>
        <ImageBox>
          <Image src={Img1} alt="img1" style={{ borderRadius: "15px" }} />
          <Image src={Img2} alt="img2" style={{ borderRadius: "15px" }} />
        </ImageBox>
      </Box>
    </Container>
  );
}

export default BottomSection;
