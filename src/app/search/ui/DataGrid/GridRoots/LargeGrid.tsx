import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GridData, dataGridConfig } from "../dataGridConfig";
import { media } from "@/shared/styles/media";
import { styled } from "@mui/material";
import { Checkbox } from "../components/Checkbox";

export const LargeGrid = ({
  headless,
  data,
}: {
  headless?: boolean;
  data: GridData[];
}) => {
  const table = useReactTable({
    data,
    columns: dataGridConfig.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrapper>
      <table>
        {!headless && (
          <thead>
            {table.getHeaderGroups().map((headerGroup, idx) => (
              <tr key={headerGroup.id + idx}>
                {headerGroup.headers.map((header, idx) => (
                  <th key={header.id + idx}>
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
        )}

        <tbody>
          {table.getRowModel().rows.map((row, idx) => (
            <tr key={row.id + idx}>
              {row.getVisibleCells().map((cell, idx) => (
                <td key={cell.id + idx}>
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
  ${media.sm} {
    display: none;
  }

  table {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  thead,
  tbody {
    padding-block: 10px;
    border-radius: 16px;
  }

  thead {
    background: rgba(167, 167, 167, 0.1);
  }

  tr {
    display: flex;
    padding-inline: 40px;
    border-radius: inherit;

    ${media.md} {
      padding-inline: 10px;
    }
  }

  tbody tr {
    border-bottom: 1px solid rgba(97, 97, 97, 0.04);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: rgba(167, 167, 167, 0.1);
    }
  }

  th {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
  }

  td {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    padding-block: 20px;
  }

  th,
  td {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;

    /* border: 1px solid white; */

    &:first-of-type {
      max-width: 60px;
    }

    &:nth-of-type(3) {
      max-width: 220px;
    }

    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      max-width: 160px;
      justify-content: center;
    }
    &:nth-of-type(6) {
      justify-content: flex-end;
    }
  }
`;
