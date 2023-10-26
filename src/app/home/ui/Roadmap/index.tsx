import { styled } from "@mui/material";
import { RoadmapGroup } from "./RoadmapGroup";
import { RoadmapContent } from "./constants";
import { media } from "@/shared/styles/media";
import { Lines3 } from "./Lines/Lines3";
import { LineV } from "./Lines/LineV";
import { LineH } from "./Lines/LineH";

export const Roadmap = () => {
  return (
    <Wrapper>
      <Title>Roadmap</Title>

      <Text>
        Bictory roadmap is a dynamic guide that outlines our vision for the
        future and demonstrates our commitment to continuously enhance our
        products and services.
      </Text>

      <Stack>
        <Lines3 />
        <LineV />
        <LineH />

        {RoadmapContent.map((c) => (
          <RoadmapGroup key={c.year} {...c} />
        ))}
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled("div")``;

const Title = styled("h2")`
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: -0.05em;
  text-align: center;

  ${media.sm} {
    font-size: 32px;
  }
`;

const Text = styled("p")`
  font-family: "Space Grotesk", sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  max-width: 807.52px;
  margin-block: 10px 50px;
  margin-inline: auto;

  ${media.sm} {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Stack = styled("div")`
  overflow: hidden;
  position: relative;

  & > * {
    &:last-child {
      margin-block-start: -240px;
    }
  }

  ${media.md} {
    & > * {
      &:last-child {
        margin-block-start: unset;
      }
    }
  }

  ${media.sm} {
    display: grid;
    gap: 60px;
  }
`;
