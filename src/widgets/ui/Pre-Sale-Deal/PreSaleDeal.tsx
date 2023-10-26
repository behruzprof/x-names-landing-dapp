"use client";
import React from "react";
import { Wrapper } from "./styles";
import { BTypography } from "@/shared/ui";
import { PresaleForm } from "./components/PresaleForm";

export default function PreSaleDeal() {
  return (
    <Wrapper
      flexDirection="column"
      mt={{ sm: "100px", xs: "30px" }}
      mb={{ sm: "100px", xs: "30px" }}
    >
      <BTypography
        fontSize={{ sm: "39px", xs: "29px" }}
        lineHeight={{ sm: "48px", xs: "38px" }}
      >
        Signup for Pre-Sale Deal
      </BTypography>
      <BTypography
        fontSize={{ sm: "15px", xs: "10px" }}
        lineHeight={{ sm: "24px", xs: "15px" }}
        mt={{ sm: "18px", xs: "10px" }}
        mb={{ md: "0", xs: "18px" }}
      >
        Join the Pre-sale for SolNames, FtmNames and AvaxNames
      </BTypography>
      <PresaleForm />
    </Wrapper>
  );
}
