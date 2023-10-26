import { media } from "@/shared/styles/media";
import { styled } from "@mui/material";

export const Lines3 = () => {
  return (
    <Wrapper>
      <svg
        width="1070"
        height="131"
        viewBox="0 0 1070 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="-1.31134e-07"
          y1="1.5"
          x2="1070"
          y2="1.49991"
          stroke="#241A00"
          strokeWidth="3"
          strokeDasharray="20 20"
        />
        <line
          x1="199"
          y1="65.5"
          x2="1070"
          y2="65.4999"
          stroke="#241A00"
          strokeWidth="3"
          strokeDasharray="20 20"
        />
        <line
          x1="497"
          y1="129.5"
          x2="1070"
          y2="129.5"
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
  top: 30px;
  right: 0;

  ${media.md} {
    display: none;
  }
`;
