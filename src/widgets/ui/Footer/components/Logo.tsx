import React from "react";
import Image from "next/image";
import { Wrapper } from "../styles";
import { BTypography } from "@/shared/ui";
import { LogoBictory } from "@/shared/assets";

export default function Logo() {
  return (
    <Wrapper columnGap="2px">
      <Image src={LogoBictory} alt="logo-bictory" priority />
      <BTypography
        fontSize={{ md: "30px", xs: "25px" }}
        lineHeight={{ md: "44px", xs: "40px" }}
        fontWeight="600"
        children="Bictory.domains"
      />
    </Wrapper>
  );
}
