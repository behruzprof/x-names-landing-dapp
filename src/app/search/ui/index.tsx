import { styled } from "@mui/material";
import { Search } from "./Search";
import { DataGrid } from "./DataGrid";
import PriceSelect from "./PriceSelect";
import { media } from "@/shared/styles/media";
import { MobilePriceButton } from "./MobilePriceButton";

export const PageSection = () => {
  return (
    <Section>
      <Title>Type the domain you want and see availability</Title>

      <SearchGroup>
        <Search />
        <PriceSelect />
        <MobilePriceButton />
      </SearchGroup>

      <DataGrid />
    </Section>
  );
};

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* height: 1153px; */
  max-width: 1208px;
  left: 112px;
  top: 169px;
  border-radius: 32px;
  background-color: #0c0c0c;
  box-shadow: 0px 7px 24px 2px rgba(0, 0, 0, 0.11);
  padding: 30px;
  margin-block-end: 80px;

  ${media.sm} {
    padding-inline: 0;
    background-color: transparent;
  }
`;

const Title = styled("h2")`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`;

const SearchGroup = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
`;
