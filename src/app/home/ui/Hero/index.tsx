import styled from "@emotion/styled";
import { Title } from "./Title";
import { Search } from "./Search";
import { DataGrid } from "./DataGrid";
import { media } from "@/shared/styles/media";

export const HomeHero = () => {
  return (
    <Section>
      <Title />

      <Search />

      <DataGrid />
    </Section>
  );
};

const Section = styled.section`
  margin-block-start: 200px;

  & > * {
    margin-inline: auto;
    margin-block: 40px;

    &:first-of-type {
      margin-block-end: 60px;
    }
  }

  ${media.md} {
    margin-block-start: 100px;
  }
  ${media.sm} {
    margin-block-start: 50px;
  }
`;
