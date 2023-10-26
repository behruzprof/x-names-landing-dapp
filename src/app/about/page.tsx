"use client";
import React from "react";

import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { Wrapper } from "./styles";
import { BTypography } from "@/shared/ui";
import { AboutPageContent } from "./components";
import { globalTheme } from "../styles/global-theme";

import AboutPageBgImage from "./assets/img/about-page-bg.png";

const AboutPage = () => {
  const matches = useMediaQuery(globalTheme.breakpoints.up("md"));
  return (
    <>
      <Wrapper
        rowGap={{ md: "180px", xs: "40px" }}
        mt={{ md: "200px", xs: "30px" }}
        position="relative"
        zIndex="3"
      >
        <BTypography
          maxWidth="955px"
          fontWeight="600"
          fontSize={{ md: "64px", xs: "32px" }}
          component="h2"
          lineHeight={{ md: "78px", xs: "38px" }}
          textAlign="center"
          children="Bictory is a company that paves the way for the future of social identity and nft ownership. "
        />
        <AboutPageContent />
      </Wrapper>
      <Image
        src={AboutPageBgImage}
        alt="ellipse"
        style={{
          width: "100%",
          height: "80%",
          position: "absolute",
          top: `${matches ? 0 : "150px"}`,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      />
    </>
  );
};

export default AboutPage;
