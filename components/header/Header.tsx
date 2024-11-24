import edenPharmacyImg from "@/public/eden pharmacy.png";
import { Box } from "@mui/material";
import Image from "next/image";
function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Image
        src={edenPharmacyImg}
        alt="edenPharmacyImg"
        width={150}
        height={50}
      />
      <Box></Box>
    </Box>
  );
}

export default Header;
