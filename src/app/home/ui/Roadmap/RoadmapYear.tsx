import { media } from "@/shared/styles/media";
import { styled } from "@mui/material";

type Props = {
  year: string | number;
};

export const RoadmapYear = ({ year }: Props) => {
  return (
    <Container>
      <Wrapper>{year}</Wrapper>
    </Container>
  );
};

const Container = styled("div")`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  height: 80px;
  width: 218px;
  border-radius: 24px;
  background: linear-gradient(
    125.62deg,
    #ffb703 1.64%,
    rgba(255, 255, 255, 0) 90.98%
  );

  ${media.sm} {
    margin-inline: auto;
  }
`;

const Wrapper = styled("div")`
  display: grid;
  place-items: center;
  gap: 20px;
  padding: 20px 22px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  border-radius: inherit;
  background-color: #0c0c0c;
  backdrop-filter: blur(28.8719px);

  font-family: "Space Grotesk", sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;
