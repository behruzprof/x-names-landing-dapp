import { media } from "@/shared/styles/media";
import { styled } from "@mui/material";

export const LineV = () => {
  return (
    <Wrapper>
      <svg
        width="4"
        height="142"
        viewBox="0 0 4 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="142"
          x2="2.00001"
          y2="-6.55671e-08"
          stroke="#FFB703"
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
  left: 60px;
  top: 270px;

  ${media.md} {
    display: none;
  }
`;
