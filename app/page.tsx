import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Box, Stack, Typography } from "@mui/material";
import HeroSection from "@/components/HeroSection/HeroSection";
function Home() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      {/* header */}
      <Header />
      {/* main container */}
      <Stack sx={{ flexGrow: 1 }}>
        {/* Top Content */}
        <HeroSection />

        {/* Middle Content */}
        <Box sx={{ display: "flex", flexWrap: "wrap" }}></Box>
        {/* Bottom Content */}
        <Stack>
          <Typography></Typography>
        </Stack>
      </Stack>
      {/* footer */}
      <Footer />
    </Stack>
  );
}

export default Home;
