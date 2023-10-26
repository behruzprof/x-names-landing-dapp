import { media } from "@/shared/styles/media";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FooterElement = styled("footer")`
  position: relative;
  z-index: 2;
  width: min(100%, 1440px);
  margin: auto;
  padding-inline: 20px;

  ${media.sm} {
    padding-inline: 10px;
  }
`;

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;
