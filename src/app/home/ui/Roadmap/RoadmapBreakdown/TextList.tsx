import { styled } from "@mui/material";

export const RBTextList = ({ list = [] }: { list?: string[] }) => {
  if (list.length < 1) return <></>;

  return (
    <Ul>
      {list.map((item, idx) => (
        <li key={item + idx}>{item}</li>
      ))}
    </Ul>
  );
};

const Ul = styled("ul")`
  color: white;
  list-style-type: disc;
  margin-inline-start: 20px;

  li {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.015em;
    text-align: left;
  }
`;
