import edenPharmacyImg from "@/public/eden pharmacy.png";
import Image from "next/image";
function Header() {
  return (
    <div>
      <Image
        src={edenPharmacyImg}
        alt="edenPharmacyImg"
        width={100}
        height={30}
      />
    </div>
  );
}

export default Header;
