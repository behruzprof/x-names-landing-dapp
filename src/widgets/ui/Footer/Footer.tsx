"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { FooterElement, Wrapper } from "./styles";
import Logo from "./components/Logo";
import { BTypography } from "@/shared/ui";
import { CssVariables } from "@/app/styles/css-variables";
import { FooterLink } from "./constants";
import { SubscribeForm } from "./components/SubscribeForm";

export default function Footer() {
  return (
    <FooterElement>
      <Divider
        sx={{
          background: CssVariables.Black2,
          width: "100%",
          marginBottom: "10px",
        }}
      />
      <Wrapper
        sx={{
          justifyContent: "space-between",
          width: "100%",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Wrapper
          flexDirection="column"
          sx={{ alignItems: { md: "flex-start", xs: "center" } }}
          rowGap="32px"
        >
          <Logo />
          <BTypography
            fontSize={{ md: "20px", xs: "16px" }}
            lineHeight="150%"
            fontWeight="400"
            component="p"
            maxWidth="450px"
            textAlign={{ md: "initial", xs: "center" }}
          >
            We are builders specializing in Blockchain Name Service (BNS) and
            Exclusive NFT marketplace across Blockchains. We aim to create an
            interoperable BNS with enhanced use cases
          </BTypography>
          <Wrapper
            flexDirection="column"
            rowGap="8px"
            sx={{ alignItems: "flex-start" }}
          >
            <BTypography
              fontSize="14px"
              lineHeight="18px%"
              fontWeight="400"
              component="p"
              maxWidth="450px"
            >
              For Marketing:{" "}
              <BTypography
                component="a"
                sx={{ color: CssVariables.Orange1 }}
                href="mailto:Marketing@bictory.io"
              >
                Marketing@bictory.io
              </BTypography>
            </BTypography>
            <BTypography
              fontSize="14px"
              lineHeight="18px%"
              fontWeight="400"
              component="p"
              maxWidth="450px"
            >
              For Business:{" "}
              <BTypography
                component="a"
                sx={{ color: CssVariables.Orange1 }}
                href="mailto:Business@bictory.io"
              >
                Business@bictory.io
              </BTypography>
            </BTypography>
          </Wrapper>
        </Wrapper>

        <SubscribeForm />
      </Wrapper>
      <Wrapper
        mt="30px"
        mb="30px"
        width="100%"
        sx={{ justifyContent: { sm: "space-between", xs: "center" } }}
        flexWrap={{ md: "initial", xs: "wrap-reverse" }}
        rowGap={{ md: "0", xs: "20px" }}
      >
        <BTypography
          component="span"
          sx={{ color: CssVariables.Black3 }}
          mr="20px"
        >
          All Rights Reseved Bictory © 2023
        </BTypography>
        <Wrapper sx={{ columnGap: "10px", cursor: "pointer" }}>
          {FooterLink.map((link, idx, arr) => (
            <BTypography
              key={link.text}
              component="a"
              width="25px"
              height="25px"
              href={link.link}
              target="_blank"
            >
              <Image
                src={link.Icon}
                alt={link.text}
                style={{
                  width: "100%",
                  height: "100%",
                  scale: `${
                    link.text === arr[0].text ||
                    link.text === arr[arr.length - 1].text ||
                    link.text === arr[arr.length - 3].text
                      ? "1.17"
                      : "1"
                  }`,
                }}
              />
            </BTypography>
          ))}
        </Wrapper>
      </Wrapper>
    </FooterElement>
  );
}
