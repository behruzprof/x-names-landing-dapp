import { styled } from "@mui/material";
import Image from "next/image";
import fabric from "../../assets/images/fabric.svg";
import portal from "../../assets/images/portal.svg";
import multiversXWallet from "../../assets/images/multiversXWallet.svg";
import { media } from "@/shared/styles/media";

export const Platforms = () => {
  return (
    <Wrapper>
      <Title>Integrated Platforms</Title>

      <Group>
        <Image src={fabric} alt="" />
        <Line />
        <Image src={portal} alt="" />
        <Line />
        <Image src={multiversXWallet} alt="" />
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  width: min(955px, 100%);
`;

const Title = styled("h4")`
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 36px;
  color: #f4ba41;
  text-align: center;
  margin-block-end: 30px;
`;

const Group = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.md} {
    overflow: hidden;

    img {
      width: 150px;
    }
  }

  ${media.sm} {
    height: 40px;

    img {
      width: 90px;
    }
  }
`;

const Line = styled("div")`
  height: 51px;
  border: 1.34247px solid rgba(255, 255, 255, 0.24);
`;
