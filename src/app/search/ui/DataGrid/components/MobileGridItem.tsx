import { Mvx } from "@/app/search/icons/Mvx";
import { styled } from "@mui/material";
import { GridData } from "../dataGridConfig";
import { buyRedirect } from "@/app/search/utilities";

export const MobileGridItem = ({
  domain,
  expiration,
  lastSale,
  price,
}: GridData) => {
  const handleClick = () => {
    buyRedirect(domain);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Mvx />

      <Stack>
        <Title>{domain}</Title>
        <Text>{expiration}</Text>
      </Stack>

      <Stack>
        <Title>{price}</Title>
        <Text>{lastSale}</Text>
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px 16px;
  width: 100%;
  height: 108px;
  background-color: #121212;
  border: 1px solid #232323;
  border-radius: 16px;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    background-color: #232323;
    border-color: #121212;
  }

  & > * {
    margin: 0;

    &:last-child {
      margin-inline-start: auto;
    }
  }
`;

const Stack = styled("div")`
  display: grid;
  gap: 20px;
`;

const Title = styled("p")`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const Text = styled("p")`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
