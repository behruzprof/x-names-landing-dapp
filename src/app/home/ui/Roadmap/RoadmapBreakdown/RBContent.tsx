"use client";

import { styled } from "@mui/material";
import { RBList } from "./List";
import { RBTextList } from "./TextList";

export type BreakdownContentProps = {
  title: string;
  text: string;
  textList?: string[];
  list: string[];
};

export const RBContent = ({
  title,
  text,
  textList,
  list,
}: BreakdownContentProps) => {
  return (
    <div>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <RBTextList list={textList} />
      <RBList list={list} />
    </div>
  );
};

const Title = styled("p")`
  font-family: Space Grotesk;
  font-size: 17px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

const Text = styled("p")`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #ffb703;
  margin-block-end: 10px;
`;
