"use client";
import styled from "@emotion/styled";
import { RoadmapYear } from "./RoadmapYear";
import { BreakdownProps, RoadmapBreakdown } from "./RoadmapBreakdown";
import { media } from "@/shared/styles/media";

export interface RoadmapGroupProps {
  year: string | number;
  breakdown: BreakdownProps[];
}

export const RoadmapGroup = ({ year, breakdown }: RoadmapGroupProps) => {
  return (
    <Wrapper>
      <RoadmapYear year={year} />

      <Group>
        {breakdown.map((breakdown, idx) => (
          <RoadmapBreakdown key={idx} {...breakdown} />
        ))}
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 40px;
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(312px, 100%), 1fr));
  gap: 24px;

  & > * {
    &:nth-of-type(2) {
      margin-top: 60px;
    }
    &:nth-of-type(3) {
      margin-top: calc(60px * 2);
    }
    &:nth-of-type(4) {
      margin-top: calc(60px * 3);
    }
  }

  ${media.md} {
    & > * {
      margin-top: 0 !important;
    }
  }
`;
