export interface FaqProps {
  question: string;
  answer: string;
}

export interface FaqItemProps extends FaqProps {
  index: number;
}
