"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import PhoneImg from "@/public/FooterImg/phone.svg";
import EmailImg from "@/public/FooterImg/Component-2-1.svg.svg";
import LocationImg from "@/public/FooterImg/Component-2-2.svg.svg";
import Logo from "@/public/eden pharmacy.png";
import Image from "next/image";

const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
  background: "#215D72",
  padding: "1rem 6rem",
  borderRadius: "15px",
  [theme.breakpoints.down("sm")]: {},
}));

function Footer() {
  return (
    <Stack
      sx={{
        marginTop: "1rem",
        alignItems: "center",
        background: "#17414F",
        padding: "2rem",
        gap: 4,
      }}
    >
      <Box sx={{ display: "flex ", gap: 4 }}>
        <ContactBox>
          <Box>
            <Image src={PhoneImg} alt="PhoneImg" height={50} />
          </Box>
          <Box>
            <Typography sx={{ color: "#e3e3e3" }}>Phone Number</Typography>
            <Typography sx={{ color: "white" }}>+974 3118 1843</Typography>
          </Box>
        </ContactBox>

        <ContactBox>
          <Box>
            <Image src={EmailImg} alt="EmailImg" height={50} />
          </Box>
          <Box>
            <Typography sx={{ color: "#e3e3e3" }}>Email Address</Typography>
            <Typography sx={{ color: "white" }}>
              Elbrithcqhr@gmail.com
            </Typography>
          </Box>
        </ContactBox>

        <ContactBox>
          <Box>
            <Image src={LocationImg} alt="LocationImg" height={50} />
          </Box>
          <Box>
            <Typography sx={{ color: "#e3e3e3" }}>Office Location</Typography>
            <Typography sx={{ color: "white" }}>
              Ambassador Street, Zone 61,
            </Typography>
          </Box>
        </ContactBox>
      </Box>

      <Box sx={{ display: "flex", width: "75%", gap: 15 }}>
        <Box>
          <Image src={Logo} alt="Logo" width={300} />
        </Box>
        <Box sx={{ width: "35%", color: "white" }}>
          <Typography>
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography sx={{ color: "white" }}>
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </Typography>
      </Box>
    </Stack>
  );
}

export default Footer;
