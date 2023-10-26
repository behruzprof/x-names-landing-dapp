import mvxIcon from "@/app/home/assets/icons/mvx.svg";
import { styled } from "@mui/material";
import Image from "next/image";

export const NameServiceCell = ({ value }: { value: string }) => {
  return (
    <Wrapper>
      <Image src={mvxIcon} alt="" />
      <span>{value}</span>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;
