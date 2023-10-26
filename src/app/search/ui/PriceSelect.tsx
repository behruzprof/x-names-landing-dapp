import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { media } from "@/shared/styles/media";

export default function PriceSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper>
      <FormControl sx={{ m: 1, minWidth: "244px" }} variant="standard">
        <StyledSelect
          id="demo-customized-select"
          value={age || "-1"}
          onChange={handleChange as any}
          input={<BootstrapInput />}
        >
          <StyledMenuItem value="-1">Price</StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  ${media.sm} {
    display: none;
  }
`;

const StyledSelect = styled(Select)`
  .MuiSelect-icon {
    color: #9ca3af;
  }
`;

const BootstrapInput = styled(InputBase)`
  & .MuiInputBase-input {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: #1b1b1b;
    height: 56px;
    width: 244px;
    border-radius: 16px;
    padding: 10px;
    color: #9ca3af;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  .MuiMenuItem-root {
    background-color: red;
  }
`;
