"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import PhoneImg from "@/public/FooterImg/phone.svg";
import EmailImg from "@/public/FooterImg/Component-2-1.svg.svg";
import LocationImg from "@/public/FooterImg/Component-2-2.svg.svg";
import Logo from "@/public/logo.webp";
import Image from "next/image";
import Landicon from "@/public/FooterImg/location.svg";

const FooterContainer = styled(Stack)(({ theme }) => ({
  background: "#17414F",
  padding: "2rem",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {},
}));

const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  background: "#215D72",
  padding: "1rem 6rem",
  borderRadius: "15px",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem",
  },
}));

const Contact = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: "#e3e3e3",
  fontSize: "15px",
  [theme.breakpoints.down("sm")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {},
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#e3e3e3",
  fontSize: "14px",
  [theme.breakpoints.down("sm")]: {},
}));

function Footer() {
  return (
    <FooterContainer>
      <Stack sx={{ gap: 4, width: "75%" }}>
        <Box sx={{ display: "flex ", justifyContent: "center", gap: 3 }}>
          <Stack>
            <ContactBox>
              <Box>
                <Image src={PhoneImg} alt="PhoneImg" height={50} />
              </Box>
              <Contact>
                <Heading>Phone Number</Heading>
                <Title>+974 3118 1843</Title>
              </Contact>
            </ContactBox>
          </Stack>

          <ContactBox>
            <Box>
              <Image src={EmailImg} alt="EmailImg" height={50} />
            </Box>
            <Contact>
              <Heading>Email Address</Heading>
              <Title>Elbrithcqhr@gmail.com</Title>
            </Contact>
          </ContactBox>

          <ContactBox>
            <Box>
              <Image src={LocationImg} alt="LocationImg" height={50} />
            </Box>
            <Contact>
              <Heading>Office Location</Heading>
              <Title>Ambassador Street, Zone 61,</Title>
            </Contact>
          </ContactBox>
        </Box>

        <Box sx={{ display: "flex", gap: 15 }}>
          <Box>
            <Image src={Logo} alt="Logo" width={300} />
          </Box>
          <Box sx={{ width: "28%", color: "white" }}>
            <Description>
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </Description>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Image src={Landicon} alt="location" />
          <Description>
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </Description>
        </Box>
      </Stack>
    </FooterContainer>
  );
}

export default Footer;
