import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Box, Stack } from "@mui/material";
import HeroSection from "@/components/HeroSection/HeroSection";
import MiddleSection from "@/components/MiddleSection/MiddleSection";
import BottomSection from "@/components/BottomSection/BottomSection";
function Home() {
  return (
    <Stack sx={{ height: "100vh" }}>
      {/* header */}
      <Header />
      {/* main container */}
      <Stack sx={{ flexGrow: 1 }}>
        {/* Top Content */}
        <HeroSection />

        <Box sx={{ mt: "18rem" }}></Box>
        {/* Middle Content */}
        <MiddleSection />

        {/* Bottom Content */}
        <BottomSection />
      </Stack>
      {/* footer */}
      <Footer />
    </Stack>
  );
}

export default Home;
