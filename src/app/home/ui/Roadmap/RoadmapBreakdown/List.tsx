import { styled } from "@mui/material";

export const RBList = ({ list }: { list: string[] }) => {
  const className = list[0]?.toLowerCase().includes("integration")
    ? "integration"
    : "";

  return (
    <Ul className={className}>
      {list.map((item, idx) => (
        <li key={item + idx}>{item}</li>
      ))}
    </Ul>
  );
};

const Ul = styled("div")`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style-type: none;

  /* counter-reset: my-counter; */

  li {
    position: relative;
    margin-inline-start: 20px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.015em;
    text-align: left;

    /* counter-increment: my-counter; */

    &::before,
    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      color: transparent;
    }

    &::before {
      /* content: counter(my-counter); */
      top: 8px;
      left: -20px;
      width: 8.69px;
      height: 8.69px;
      background-color: #ffb703;
    }

    &::after {
      top: 7px;
      left: -21px;
      z-index: -1;
      width: 10.59px;
      height: 10.59px;
      background: #adff00;
      filter: blur(2.18041px);
    }
  }

  &.integration {
    li:first-of-type {
      &::before {
        /* content: counter(my-counter); */
        background-color: #fff;
      }
    }
  }

  /* 
    // To style list-style-type.
    li::marker {
    background-color: #ffb703;
    color: #ffb703;
    border: 1px solid white;
  } */
`;
