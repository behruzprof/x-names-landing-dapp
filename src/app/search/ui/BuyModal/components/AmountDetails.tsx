import { styled } from "@mui/material";
import { media } from "@/shared/styles/media";
import { Mvx } from "./Mvx";

export const AmountDetails = () => {
  return (
    <Container>
      <Wrapper>
        <Mvx />

        <Stack>
          <Title>Total</Title>

          <Group>
            <Egld>ELGD</Egld>
            <EgldAmount>0.049030</EgldAmount>
          </Group>

          <DollarAmount>$241.00</DollarAmount>
        </Stack>
      </Wrapper>
    </Container>
  );
};

const Container = styled("div")`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: 24px;
  width: 340px;
  margin: auto;
  background: linear-gradient(
    125.62deg,
    #ffb703 1.64%,
    rgba(255, 255, 255, 0) 90.98%
  );
`;

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  border-radius: inherit;
  background-color: #171717;
`;

const Stack = styled("div")`
  display: grid;
  gap: 10px;

  & > * {
    margin: 0;
    color: white;
  }
`;

const Group = styled("div")`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Title = styled("p")`
  font-family: Space Grotesk;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: right;
`;

const EgldAmount = styled("p")`
  font-family: Space Grotesk;
  font-size: 32px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const Egld = styled("p")`
  font-family: Space Grotesk;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const DollarAmount = styled("p")`
  font-family: Space Grotesk;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: right;
`;
