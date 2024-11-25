"use client";
import edenPharmacyImg from "@/public/logo.webp";
import { Box, styled } from "@mui/material";
import Image from "next/image";

const ImageStyle = styled(Image)(({ theme }) => ({
  width: "200px",
  height: "60px",
  [theme.breakpoints.down("sm")]: { width: "150px", height: "45px" },
}));

function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <ImageStyle src={edenPharmacyImg} alt="edenPharmacyImg" />
      <Box></Box>
    </Box>
  );
}

export default Header;
