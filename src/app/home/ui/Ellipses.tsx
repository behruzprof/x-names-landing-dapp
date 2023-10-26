"use client";

import { styled } from "@mui/material";
import Image from "next/image";
import ellipseOrange from "../assets/images/ellipseOrange.svg";
import ellipseGreen from "../assets/images/ellipseGreen.svg";
import { media } from "@/shared/styles/media";

export const Ellipses = () => {
  return (
    <Wrapper>
      <StyledOrangeImage src={ellipseOrange} alt="" priority />
      <StyledGreenImage src={ellipseGreen} alt="" priority />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  overflow: hidden;
  position: absolute;
  top: -96px;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const StyledGreenImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  ${media.md} {
    top: -200px;
    left: -200px;
  }

  ${media.sm} {
    top: -300px;
    left: -300px;
  }
`;

const StyledOrangeImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 100px;
  right: 0;

  ${media.md} {
    right: -200px;
  }

  ${media.md} {
    right: -250px;
  }
`;
