'use client'

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
import { useEffect, useState } from "react";
import {   getData } from "@/api/graphql";

export default function Home() {
  const [categories,setCategories]=useState([])
  const[collections,setCollections]=useState([])
  useEffect(()=>{
    async function LoadData() {
      const data=await getData()
      setCategories(data.categories)
      console.log(data.collections,data.gender);
      
    }
    LoadData()
  },[categories])
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
