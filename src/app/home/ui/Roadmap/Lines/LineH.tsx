import { media } from "@/shared/styles/media";
import { styled } from "@mui/material";

export const LineH = () => {
  return (
    <Wrapper>
      <svg
        width="546"
        height="3"
        viewBox="0 0 546 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="1.5"
          x2="545.5"
          y2="1.49995"
          stroke="#241A00"
          strokeWidth="3"
          strokeDasharray="20 20"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  position: absolute;
  z-index: -1;
  left: 0px;
  bottom: 300px;

  ${media.md} {
    display: none;
  }
`;
