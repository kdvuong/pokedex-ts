import React, { FunctionComponent } from "react";
import { ColumnModel, Move } from "types";
import Table from "./Table";
import { baseMoveColumns } from "./MoveTable";

interface IProps {
  moves: Move[];
}

const columns: ColumnModel[] = [
  {
    name: "TM",
    fieldName: "tm",
  },
  ...baseMoveColumns,
];

const MachineMoveTable: FunctionComponent<IProps> = ({ moves }) => {
  return <Table data={moves} columns={columns} />;
};

export default MachineMoveTable;
