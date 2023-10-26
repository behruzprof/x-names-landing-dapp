"use-client";

import { styled } from "@mui/material";
import { SearchIcon } from "./Icon";
import { media } from "@/shared/styles/media";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Search = () => {
  const [, , nameFromUrl] = usePathname().split("/");
  const [query, setQuery] = useState(nameFromUrl ?? "");

  const handleEnter = (key: string) => {
    // if (key !== "Enter") return;
  };

  return (
    <Wrapper>
      <Input
        placeholder="Search domain name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIcon />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  overflow: hidden;
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid #232323;
  background: #1b1b1b;
  border-radius: 16px;
  height: 56px;
  width: min(850px, 100%);
  border-radius: 24px;
  padding-inline: 30px;
  box-sizing: border-box;
  color: #9ca3af;

  ${media.sm} {
    padding: 19px 18px;
    width: 297px;
    height: 68px;
    background: #121212;
    border-radius: 16px;
  }
`;

const Input = styled("input")`
  flex-grow: 1;
  height: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #9ca3af;
  width: 90%;
`;
