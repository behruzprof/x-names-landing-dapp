import { createColumnHelper } from "@tanstack/react-table";
import { NameServiceCell } from "./components/NameServiceCell";
import { B24h } from "./components/B24h";

export type GridData = {
  nameService: string;
  registration: number;
  sales: number;
  volumn: number;
  uniqueHolders: number;
  rate?: number;
};

const data: GridData[] = [
  {
    nameService: ".mvx",
    registration: 0,
    sales: 0,
    volumn: 0,
    uniqueHolders: 0,
  },
];

const columnHelper = createColumnHelper<GridData>();

const columns = [
  columnHelper.accessor("nameService", {
    id: "nameService",
    header: "Name Services",
    cell: (info) => <NameServiceCell value={info.getValue()} />,
  }),
  columnHelper.accessor("registration", {
    header: "Registration",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("sales", {
    header: "Sales",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("volumn", {
    header: "Volumn",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("uniqueHolders", {
    header: "Unique Holders",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "24h",
    header: () => <B24h />,
  }),
];

export const dataGridConfig = {
  data,
  columns,
};
