import { media } from "@/shared/styles/media";
import { Faqs } from "@/shared/ui/Faqs";
import { styled } from "@mui/material";
import { FaqContents } from "./contents";

export const Faq = () => {
  return (
    <Section>
      <Title>Frequently Asked Questions</Title>

      <StyledFaqs faqs={FaqContents} />
    </Section>
  );
};

const Section = styled("section")`
  background-color: black;

  ${media.md} {
    padding: 40px 0;
  }
`;

const Title = styled("h2")`
  font-family: Inter;
  font-size: 39px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #ffb703;
  margin-bottom: 40px;

  ${media.sm} {
    font-size: 24px;
  }
`;

const StyledFaqs = styled(Faqs)`
  width: 100%;
`;
