import React from "react";
import Image from "next/image";
import { Wrapper } from "../styles";
import { BTypography } from "@/shared/ui";
import { LogoBictory } from "@/shared/assets";
import Link from "next/link";
import { styled } from "@mui/material";

export default function Logo() {
  return (
    <StyledLink href="/">
      <Wrapper
        columnGap="2px"
        sx={{ cursor: "pointer", textDecoration: "none" }}
      >
        <Image src={LogoBictory} alt="logo-bictory" priority />
        <BTypography
          fontSize="20px"
          lineHeight="30px"
          fontWeight="600"
          children="Bictory.domains"
        />
      </Wrapper>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
