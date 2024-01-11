import MainCarousel from "../components/carousel/MainCarousel";
import Base from "../components/base/Base";
// import OfferCarousel from "../../components/carousel/OfferCarouel";
import Poster from "../components/HomePoster/Poster";
import { CardOne } from "../components/carousel/Card";
import FooterCarousel from "../components/carousel/FooterCarousel";

export default function Home() {
  return (
    <>
    
      <MainCarousel/>
      <Poster/>
      {/* <OfferCarousel/> */}
      <CardOne/>
      <img
          src="/home/poster/head5.webp"
          alt="..."
          style={{ width: "100%" }} className="my-2"
        />
        <FooterCarousel/>
    </>
  );
}
