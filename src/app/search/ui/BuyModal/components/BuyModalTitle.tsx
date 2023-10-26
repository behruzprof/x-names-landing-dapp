import { styled } from "@mui/material";
import { Lock } from "./Lock";

export const BuyModalTitle = () => {
  return (
    <Wrapper>
      <Group>
        <Lock />
        <span>Buy Now</span>
      </Group>

      <Text>
        You are about to buy 0.049030. worth of BNB for $241.00 a year.
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: grid;
  place-items: center;
  gap: 10px;
`;

const Group = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.05em;
  text-align: left;
  color: white;
`;

const Text = styled("p")`
  margin: 0;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.05em;
  text-align: center;
  color: white;
  max-width: 326px;
  margin: auto;
`;
