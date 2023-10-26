import { BButton } from "@/shared/ui";
import { Close, Error } from "@mui/icons-material";
import { styled } from "@mui/material";

export const ConnectWalletTitle = () => {
  return (
    <Wrapper>
      <Title>Connect to a Wallet</Title>
      <Error />

      <BButton>
        <Close />
      </BButton>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #525252;
  width: 100%;

  & > * {
    &:last-child {
      margin-inline-start: auto;
      color: #525252;
    }
  }
`;

const Title = styled("h3")`
  margin: 0;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
