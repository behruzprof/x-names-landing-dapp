import { styled } from "@mui/material/styles";
import { Wrapper } from "../../styles";
import { BTypography } from "@/shared/ui";
import { globalTheme } from "@/app/styles/global-theme";

export const ContentWrapper = styled(Wrapper)`
  max-width: 1090px;
  width: 100%;
  padding: 10px;
  background-color: rgba(22, 23, 23, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 12px;
  row-gap: 24px;
  ${globalTheme.breakpoints.up("md")} {
    padding: 42px 65px;
  }
`;

export const ContentTitle = styled(BTypography)`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  ${globalTheme.breakpoints.up("sm")} {
    font-size: 40px;
    line-height: 78px;
  }
`;

export const ContentBodyText = styled(BTypography)`
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  ${globalTheme.breakpoints.up("sm")} {
    font-size: 24px;
    line-height: 40px;
  }
`;
