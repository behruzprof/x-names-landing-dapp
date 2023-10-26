import { styled } from "@mui/material";
import { InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({ label, ...rest }: FormInputProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...rest} required />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: grid;
  gap: 10px;
  width: min(329.8px, 100%);
`;

const Label = styled("label")`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const Input = styled("input")`
  min-height: 48px;
  max-height: 48px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #ddddde;
  width: 100%;
  padding: 10px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
