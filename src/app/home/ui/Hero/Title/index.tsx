"use client";

import { styled } from "@mui/material";
import { useWordSwitchEffect } from "./useWordSwitchEffect";
import { media } from "@/shared/styles/media";

const wordsClass = "words-continaer";

export const Title = () => {
  useWordSwitchEffect(`.${wordsClass} span`);

  return (
    <Wrapper>
      <span className={wordsClass}>
        <span>Receive</span>
        <span>Gift</span>
        <span>Sell</span>
        <span>Buy</span>
        <span>Send</span>
      </span>
      <span>Crypto Assets across chains using your Domain Name.</span> 
    </Wrapper>
  );
};

const Wrapper = styled("h1")`
  font-family: Inter;
  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  letter-spacing: -0.05em;
  text-align: center;
  max-width: 940px;
  perspective: 800px;

  span {
    /* text-decoration: underline; */ // For debugging.
  }

  .${wordsClass} {
    position: relative;
    perspective: 800px;
    width: 180px;
    display: inline-block;
    margin-inline-end: 14px;

    & > * {
      position: absolute;
      bottom: -18px;
      right: 0;
      transform-origin: 50% 50% -100;
      opacity: 0;

      &:first-of-type {
        /* opacity: 1; */
      }
    }
  }

  ${media.md} {
    font-size: 50px;
    line-height: 60px;

    .${wordsClass} {
      width: 150px;
      margin-inline-end: 8px;

      & > * {
        bottom: -14px;
      }
    }
  }

  ${media.sm} {
    font-size: 32px;
    line-height: 45px;

    .${wordsClass} {
      width: 100px;
      margin-inline-end: 6px;

      & > * {
        bottom: -14px;
      }
    }
  }
`;
