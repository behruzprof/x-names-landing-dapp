"use client";

import { styled } from "@mui/material";
import { media } from "@/shared/styles/media";

export const Main = styled("main")`
  box-sizing: border-box;
  width: min(1440px, 100%);
  padding-inline: 20px;
  margin: auto;
  margin-block-end: 20px;

  & > * {
    margin-inline: auto;
    margin-block-start: 96px;
  }

  ${media.sm} {
    padding-inline: 10px;
  }
`;
