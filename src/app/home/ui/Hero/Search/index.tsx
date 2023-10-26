"use client";

import { styled } from "@mui/material";
import { SearchIcon } from "./Icon";
import { media } from "@/shared/styles/media";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppPages } from "@/app/routes";

export const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleEnter = (key: string) => {
    if (key !== "Enter") return;

    // router.push(`${AppPages.Search}/${query}`);
  };

  return (
    <Wrapper onKeyDown={(e) => handleEnter(e.key)}>
      <Input
        placeholder="Search"
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
  background-color: #121212;
  height: 79px;
  width: min(867px, 100%);
  border-radius: 24px;
  padding-inline: 30px;
  box-sizing: border-box;

  ${media.sm} {
    height: 68px;
    padding: 19px 18px;
  }
`;

const Input = styled("input")`
  flex-grow: 1;
  height: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: white;
  width: 90%;

  ::placeholder {
    color: white;
  }
`;
