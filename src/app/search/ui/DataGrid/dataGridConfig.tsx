import { createColumnHelper } from "@tanstack/react-table";
import { NameServiceCell } from "./components/NameServiceCell";
import { Checkbox } from "./components/Checkbox";
import { BuyAction } from "./components/BuyAction";

export type GridData = {
  domain: string;
  expiration: string;
  price: string;
  lastSale: string;
};

const data: GridData[] = [
  {
    domain: "twiz.mvx",
    expiration: "1 Year",
    price: "$300/yr",
    lastSale: "-",
  },
  {
    domain: "twiz.ccd",
    expiration: "1 Year",
    price: "$300/yr",
    lastSale: "-",
  },
  {
    domain: "twuiell.mvx",
    expiration: "1 Year",
    price: "-",
    lastSale: "-",
  },
  {
    domain: "eell.mvx",
    expiration: "Unregistered",
    price: "$300/yr",
    lastSale: "-",
  },
];

const columnHelper = createColumnHelper<GridData>();

const columns = [
  columnHelper.display({
    id: "checker",
    header: () => <Checkbox />,
    cell: () => <Checkbox />,
  }),
  columnHelper.accessor("domain", {
    header: "Domains",
    cell: (info) => <NameServiceCell value={info.getValue()} />,
  }),
  columnHelper.accessor("expiration", {
    header: "Expiration",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastSale", {
    header: () => "Last Sale",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "action",
    header: "",
    cell: (info) => {
      return <BuyAction name={info.row.getValue("domain")} />;
    },
  }),
];

export const dataGridConfig = {
  data,
  columns,
};
