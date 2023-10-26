"use client";

import Image from "next/image";
import Hidden from "@mui/material/Hidden";
import BgBictory1 from "./images/bictory-bg-1.png";

export const HiddenElement = () => {
  return (
    <Hidden mdDown>
      <Image
        src={BgBictory1}
        alt="bictory"
        style={{ position: "absolute", zIndex: 1, bottom: 0, right: 0 }}
        priority
      />
    </Hidden>
  );
};
