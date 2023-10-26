"use client";

import { styled } from "@mui/material";
import { useState } from "react";
import { BuyModal } from "../BuyModal";
import { dataGridConfig } from "./dataGridConfig";
import { LargeGrid } from "./GridRoots/LargeGrid";
import { MobileGrid } from "./GridRoots/MobileGrid";

export const DataGrid = () => {
  const [data, _setData] = useState(dataGridConfig.data);

  const [first, second, ..._rest] = data;

  return (
    <Wrapper>
      <LargeGrid data={[first, second]} />
      <MobileGrid data={[first, second]} />

      {/* <Title>Similar Domain names</Title> */}

      {/* <LargeGrid headless data={rest} /> */}

      <BuyModal />
    </Wrapper>
  );
};

const Wrapper = styled("div")``;

const Title = styled("h3")`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin: 40px 30px;
  color: #b0a2a2;
`;
