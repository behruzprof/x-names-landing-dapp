import { styled } from "@mui/material";
import { FeatureCard } from "./Card";
import { features } from "./constants";
import { media } from "@/shared/styles/media";

export const Features = () => {
  return (
    <Wrapper>
      <Title>Zero Worries About Getting the Wallet Address Wrong.</Title>

      <Text>
        Send and receive assets on the Blockchian Network without having to
        worry about copy-pasting the wrong address.
      </Text>

      <Group>
        {features.map((feature) => (
          <FeatureCard key={feature.name} {...feature} />
        ))}
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled("div")``;

const Title = styled("div")`
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  color: #f4ba41;

  ${media.sm} {
    line-height: 26px;
  }
`;

const Text = styled("p")`
  font-family: "Space Grotesk", sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  max-width: 879px;
  margin-block-start: 10px;
  margin-block-end: 50px;
  margin-inline: auto;

  ${media.sm} {
    font-size: 18px;
    line-height: 23px;
    margin-block-end: 40px;
  }
`;

const Group = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(424px, 1fr));
  gap: 24px;

  ${media.md} {
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  }
`;
