import styled from "@emotion/styled";
import { GridData, dataGridConfig } from "./dataGridConfig";
import { media } from "@/shared/styles/media";
import { NameServiceCell } from "./components/NameServiceCell";
import { FC } from "react";
import { B24h } from "./components/B24h";

const items: { header: string; key: keyof GridData; Element?: FC<any> }[] = [
  { header: "Name Services", key: "nameService", Element: NameServiceCell },
  { header: "Registration", key: "registration" },
  { header: "Sales", key: "sales" },
  { header: "Volumn", key: "volumn" },
  { header: "Unique Holders", key: "uniqueHolders" },
];

export const MobileGrid = () => {
  const [d] = dataGridConfig.data;

  return (
    <Wrapper>
      <B24h />

      <Stack>
        {items.map((item) => (
          <Item key={item.header}>
            <div>{item.header}</div>
            <div>
              {item.Element ? (
                <item.Element value={d[item.key]} />
              ) : (
                d[item.key]
              )}
            </div>
          </Item>
        ))}
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  ${media.sm} {
    display: grid;
    gap: 20px;
    width: 100%;
  }
`;

const Stack = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;

  & > * {
    &:first-of-type {
      font-weight: 300;
      text-align: left;
    }

    &:last-of-type {
      text-align: right;
      font-weight: 700;
    }
  }
`;
