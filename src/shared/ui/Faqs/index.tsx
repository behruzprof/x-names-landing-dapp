import { styled } from "@mui/material";
import { FaqItem } from "./Item";
import { FaqProps } from "./type";
import { media } from "@/shared/styles/media";

export const Faqs = ({ faqs, ...rest }: { faqs: FaqProps[] }) => {
  return (
    <Wrapper {...rest}>
      {faqs.map((item, idx) => (
        <FaqItem key={idx} {...item} index={idx} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  ${media.sm} {
    gap: 20px;
  }
`;
