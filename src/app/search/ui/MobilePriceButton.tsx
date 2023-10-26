import { media } from "@/shared/styles/media";
import { BButton } from "@/shared/ui";
import { FilterList } from "@mui/icons-material";
import { styled } from "@mui/material";

export const MobilePriceButton = () => {
  return (
    <StyledButton>
      <FilterList />
    </StyledButton>
  );
};

const StyledButton = styled(BButton)`
  display: none;
  background-color: #121212;
  color: #ffffff;
  border: 1px solid #232323;
  border-radius: 12px;
  width: 66px;
  height: 68px;

  ${media.sm} {
    display: grid;
    place-items: center;
  }
`;
