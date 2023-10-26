import { FC, useRef } from "react";
import { useSelectedFaq } from "./hooks/useSelected";
import { useFaqToggle } from "./hooks/useToggle";
import { FaqIcon } from "./Icon";
import { FaqItemProps } from "./type";
import { styled } from "@mui/material";
import { media } from "@/shared/styles/media";

export const FaqClasses = {
  answer: "faq-answer",
};

export const FaqItem: FC<FaqItemProps> = ({ question, answer, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { selectedFaq, setSelectedFaq } = useSelectedFaq();

  const isSelected = selectedFaq === index;

  useFaqToggle(ref, isSelected);

  const handleClick = (e: any) => {
    // if (e.target.matches(`.${FaqClasses.answer}`)) return;
    setSelectedFaq(index);
  };

  return (
    <Wrapper ref={ref} onClick={handleClick}>
      <Content>
        <Question>{question}</Question>

        <Answer
          className={FaqClasses.answer}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </Content>

      <FaqIcon isSelected={isSelected} />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  /* border: 1px solid white; */

  & > * {
    &:last-of-type {
      margin-block-start: 12px;

      ${media.sm} {
        display: none;
      }
    }
  }
`;

const Content = styled("div")`
  --pos-left: 50px;

  position: relative;
  margin-inline-start: var(--pos-left);

  &::before {
    content: "";
    position: absolute;
    top: 16px;
    left: calc(var(--pos-left) * -1);
    width: 16px;
    height: 16px;
    background: #ffffff;
    border-radius: 50%;
  }

  ${media.md} {
    --pos-left: 0;

    &::before {
      content: none;
      display: none;
    }
  }
`;

const Question = styled("div")`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  margin: 0;
  margin-block-end: 5px;

  ${media.sm} {
    font-size: 18px;
    line-height: 22px;
    line-height: 25px;
  }
`;

const Answer = styled("div")`
  overflow: hidden;
  opacity: 0;
  height: 0;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.03em;
  /* text-align: justify; */
  /* color: #dadada; */
  color: #686868;
  cursor: text;
  max-width: 1200px;

  a {
    color: currentColor;
  }

  i {
    font-style: italic;
  }

  ${media.sm} {
    font-size: 16px;
  }
`;
