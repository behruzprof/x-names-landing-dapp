import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { dataGridConfig } from "./dataGridConfig";
import { media } from "@/shared/styles/media";
import { styled } from "@mui/material";
import { B24h } from "./components/B24h";

export const LargeGrid = () => {
  const [data, _setData] = useState(dataGridConfig.data);

  const table = useReactTable({
    data,
    columns: dataGridConfig.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrapper>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  ${media.md} {
    padding-inline: 10px;
  }

  ${media.sm} {
    display: none;
  }

  table {
    display: flex;
    flex-direction: column;

    gap: 20px;
    width: 100%;
    /* height: 100%; */
  }

  tbody {
    border-top: 1px solid #606060;
    padding-block-start: 20px;
  }

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  th,
  td {
    font-family: "Space Grotesk", sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    width: 100%;
    /* border: 1px solid white; */
  }

  th {
    &:first-of-type {
      text-align: left;
    }
  }

  td {
    font-weight: 700;
  }
`;
