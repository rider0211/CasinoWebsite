import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MUIDataTable from "mui-datatables";

export default function MediaControlCard() {
  const theme = useTheme();
  const columns = ["Name", "Game", "Multiply", "Profit"];

  const data = [
    ["Gabby George", "Crash", 30, "$100,000"],
    ["Aiden Lloyd", "Crash", 55, "$200,000"],
    ["Jaden Collins", "Tower", 27, "$500,000"],
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard"
  };
  return (
        <MUIDataTable
            title={"Latest Bets"}
            data={data}
            columns={columns}
            options={options}
        />
  );
}