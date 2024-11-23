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
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box bgcolor={"red"} width={100} height={100}></Box>
          <Box bgcolor={"yellow"} width={100} height={100}></Box>
          <Box bgcolor={"blue"} width={100} height={100}></Box>
          <Box bgcolor={"black"} width={100} height={100}></Box>
        </Box>
        {/* Bottom Content */}
        <Stack>
          <Typography>Latest News</Typography>
        </Stack>
      </Stack>
      {/* footer */}
      <Footer />
    </Stack>
  );
}

export default Home;
