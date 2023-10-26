import { styled } from "@mui/material";
import { ProductCard } from "./Card";
import cns from "../../assets/images/cns.svg";
import ftmNames from "../../assets/images/ftmNames.svg";
import solana from "../../assets/images/solana.svg";
import xNames from "../../assets/images/xNames.svg";
import avaxNames from "../../assets/images/avaxNames.svg";
import { media } from "@/shared/styles/media";
import { Links } from "@/shared/const";

export const Products = () => {
  return (
    <Wrapper>
      <Title>We are building…</Title>

      <Group>
        <ProductCard
          image={cns}
          name="Concordium Name Service"
          href={Links.ccd}
        />
        <ProductCard
          image={xNames}
          name="MultiversX Name Service"
          // href={Links.mvx}
          inFuture
          text="Coming in June"
        />
        <ProductCard image={solana} name="Solana Name Service" inFuture />
        <ProductCard image={ftmNames} name="Fantom Name Service" inFuture />
        <ProductCard image={avaxNames} name="Avalanche Name Service" inFuture />
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled("section")``;

const Title = styled("div")`
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: -0.05em;
  text-align: center;
  margin-block-end: 50px;

  ${media.sm} {
    font-size: 20px;
    line-height: 24px;
    margin-block-end: 20px;
  }
`;

const Group = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(414px, 1fr));
  gap: 48px;
  width: 100%;

  ${media.md} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
