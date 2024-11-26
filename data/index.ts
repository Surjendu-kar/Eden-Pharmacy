import { Img1, Img2, Img3, Img4, Img5 } from "@/public/CenterImages";

import VegetarianFriendlyImg from "@/public/HeroSectionImages/BottomContainerImages/Group-8110.svg.svg";
import FreeShippingImg from "@/public/HeroSectionImages/BottomContainerImages/Group-8114.svg.svg";
import NoRiskImg from "@/public/HeroSectionImages/BottomContainerImages/Group-8115.svg.svg";
import GMOImg from "@/public/HeroSectionImages/BottomContainerImages/Group-8116.svg.svg";
import MadeInIndiaImg from "@/public/HeroSectionImages/BottomContainerImages/Group-8117.svg.svg";
import ClinicallyImg from "@/public/HeroSectionImages/BottomContainerImages/Group-8111.svg (1).svg";

export const Dummy_Ingredients = [
  {
    id: 1,
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    buttonText: "SEE MORE",
    img: Img1,
  },
  {
    id: 2,
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    buttonText: "SEE MORE",
    img: Img2,
  },
  {
    id: 3,
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    buttonText: "SEE MORE",
    img: Img3,
  },
  {
    id: 4,
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    buttonText: "SEE MORE",
    img: Img4,
  },
  {
    id: 5,
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    buttonText: "SEE MORE",
    img: Img5,
  },
];

export const features = [
  {
    icon: ClinicallyImg,
    title: "Clinically Studied",
    description:
      "All products that we offer have undergone lab and safety tests",
  },
  {
    icon: VegetarianFriendlyImg,
    title: "Vegetarian Friendly",
    description:
      "We have a wide selection of vegetarian products to meet your needs",
  },
  {
    icon: MadeInIndiaImg,
    title: "Made In India",
    description:
      "Shop local and explore health products made right here in India",
  },
  {
    icon: FreeShippingImg,
    title: "Free Shipping",
    description:
      "We deliver to your door with no shipping costs on your orders",
  },
  {
    icon: NoRiskImg,
    title: "No Risk",
    description:
      "We ensure that all products are safe and within their use-by date",
  },
  {
    icon: GMOImg,
    title: "GMO Free",
    description:
      "Natural, no modified products and derivatives for those who need it",
  },
];
