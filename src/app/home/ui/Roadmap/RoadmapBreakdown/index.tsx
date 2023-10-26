"use client";

import styled from "@emotion/styled";
import { BreakdownContentProps, RBContent } from "./RBContent";

export type BreakdownProps = {
  quatar: string;
  content: BreakdownContentProps[];
};

export const RoadmapBreakdown = ({ quatar, content }: BreakdownProps) => {
  return (
    <Wrapper>
      <Quatar>{quatar}.</Quatar>

      <Stack>
        {content.map((c, idx) => (
          <RBContent key={c.title + idx} {...c} />
        ))}
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 247px;
  height: fit-content;
  /* width: 312px; */
  left: 71px;
  top: 3303px;
  border-radius: 9px;
  padding: 24px 23px 18px 23px;
  background: rgba(95, 95, 99, 0.2);
  backdrop-filter: blur(28.8719px);
`;

const Quatar = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin-block-end: 10px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
