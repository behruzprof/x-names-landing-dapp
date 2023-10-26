import { styled } from "@mui/material";
import { GridData } from "../dataGridConfig";
import { MobileGridItem } from "../components/MobileGridItem";
import { media } from "@/shared/styles/media";

export const MobileGrid = (props: { data: GridData[] }) => {
  return (
    <Stack>
      {props.data.map((item, idx) => (
        <MobileGridItem key={item.domain + idx} {...item} />
      ))}
    </Stack>
  );
};

const Stack = styled("div")`
  display: none;

  ${media.sm} {
    display: grid;
    gap: 30px;
  }
`;
