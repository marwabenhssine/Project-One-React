import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import { homeObjTwo } from "../../Data";

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default SignUp;
