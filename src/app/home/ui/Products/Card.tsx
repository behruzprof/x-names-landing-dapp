import { styled } from "@mui/material";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  href?: string;
  inFuture?: boolean;
  text?: string;
};

export const ProductCard = ({
  image,
  name,
  text,
  href,
  inFuture = false,
}: Props) => {
  text = inFuture ? text ?? "Coming Soon" : "View Live";

  return (
    <Wrapper>
      <Image src={image} alt="" />
      <Name>{name}</Name>

      <Link
        href={href || undefined}
        target="_blank"
        className={inFuture ? "in-future" : ""}
      >
        {text}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 224px;
  /* width: 414px; */
  border-radius: 16px;
  padding: 32px;
  background-color: rgba(95, 95, 99, 0.2);
  backdrop-filter: blur(50px);
  border: 1px solid;
  border-image-source: linear-gradient(
    98.49deg,
    rgba(255, 255, 255, 0.22) 2.49%,
    rgba(255, 255, 255, 0) 102.37%
  );
`;

const Name = styled("p")`
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: -0.02em;
  text-align: left;
`;

const Link = styled("a")`
  color: #000000;
  background-color: #03ff1c;
  height: 47.08018493652344px;
  min-width: 104.16036987304688px;
  max-width: max-content;
  border-radius: 33.16537857055664px;
  padding: 8px 16px 8px 16px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-block-start: auto;
  border: 1px solid transparent;
  text-decoration: none;

  &.in-future {
    color: #e1b831;
    border-color: #e1b831;
    background-color: transparent;
  }
`;
