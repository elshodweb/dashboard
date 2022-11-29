import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";
function createData(name, company, number, count, prof, situation) {
  return { name, company, number, count, prof, situation };
}

const rows = [
  createData(
    "Jane Cooper",
    "Microsoft",
    "(225) 555-0118",
    "697 000",
    "Frontend 010",
    "Active"
  ),
  createData(
    "Floyd Miles",
    "Yahoo",
    "(205) 555-0100",
    "597 000",
    "Frontend 010",
    "Inactive"
  ),
  createData(
    "Marvin McKinney",
    "Tesla",
    "(252) 555-0126",
    "marvin@tesla.com",
    "Frontend 010",
    "Active"
  ),
  createData(
    "Jerome Bell",
    "Google",
    "(629) 555-0129",
    "jerome@google.com",
    "Frontend 010",
    "Active"
  ),
  createData(
    "Kathryn Murphy",
    "Microsoft",
    "(406) 555-0120",
    "kathryn@microsoft.com",
    "Frontend 010",
    "Active"
  ),
  createData(
    "Jacob Jones",
    "Yahoo",
    "(208) 555-0112",
    "jacob@yahoo.com",
    "Frontend 010",
    "Active"
  ),
  createData(
    "Kristin Watson",
    "Facebook",
    "(704) 555-0127",
    "kristin@facebook.com",
    "Frontend 010",
    "Inactive"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer className="table__bd" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="a simple table">
        <TableHead>
          <TableRow>
            <TableCell className="component-table__header">F.I.O</TableCell>
            <TableCell className="component-table__header" align="right">
              Yo’nalish
            </TableCell>
            <TableCell className="component-table__header" align="right">
              Telefon nomer
            </TableCell>
            <TableCell className="component-table__header" align="right">
              To’lov
            </TableCell>
            <TableCell className="component-table__header" align="right">
              Guruh
            </TableCell>
            <TableCell className="component-table__header" align="right">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              className="component-table__row"
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="component-table__item"
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell className="component-table__item" align="right">
                {row.company}
              </TableCell>
              <TableCell className="component-table__item" align="right">
                {row.number}
              </TableCell>
              <TableCell className="component-table__item" align="right">
                {row.count}
              </TableCell>
              <TableCell className="component-table__item" align="right">
                {row.prof}
              </TableCell>
              <TableCell className="component-table__item" align="right">
                <span className={row.situation}>{row.situation}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
