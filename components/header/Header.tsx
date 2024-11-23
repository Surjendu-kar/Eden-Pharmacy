import edenPharmacyImg from "@/public/eden pharmacy.png";
import { Box } from "@mui/material";
import Image from "next/image";
function Header() {
  return (
    <Box>
      <Image
        src={edenPharmacyImg}
        alt="edenPharmacyImg"
        width={100}
        height={30}
      />
    </Box>
  );
}

export default Header;
