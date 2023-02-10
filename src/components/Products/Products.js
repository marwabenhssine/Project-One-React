import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import {homeObjOne } from "../../Data";
function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Products;
