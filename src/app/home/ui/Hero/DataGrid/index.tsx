"use client";

import { styled } from "@mui/material";
import { LargeGrid } from "./LargeGrid";
import { media } from "@/shared/styles/media";
import { MobileGrid } from "./MobileGrid";

export const DataGrid = () => {
  return (
    <Wrapper>
      <LargeGrid />
      <MobileGrid />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  box-sizing: border-box;
  width: min(1160px, 100%);
  background-color: #0c0c0c;
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  border-radius: 32px;
  /* height: 225px; */
  padding: 40px;

  ${media.md} {
    padding: 20px 10px;
  }

  ${media.sm} {
    padding: 20px;
    border-radius: 8px;
  }
`;
