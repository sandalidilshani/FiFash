import Header from "../components/customer/Header";
import HomeSection from "@/components/customer/HomeSection";
import HeroSection from "@/components/customer/HeroSection";
import Image from "next/image";
import CollectionSection from "@/components/customer/CollectionSection";
import BestFashionSection from "@/components/customer/BestFashionSection";
import BestSellerSection from "@/components/customer/BestSellerSection";
import OurProducts from "@/components/customer/OurProducts";
import Reviews from "@/components/customer/Reviews";
import Footer from "@/components/customer/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
      <HomeSection/>
      <CollectionSection/>
      <BestFashionSection/>
      <BestSellerSection/>
      <OurProducts/>
      <Reviews/>
      </main>
      
      <Footer/>

    </>
  );
}
