"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";

import { abscenceData, deleteAbsence, rowHead } from "@/Data/absence";
import { Absence } from "@/Data/type";

import ajuster from "../../../public/Ajuster.svg";
import transferer from "../../../public/Transferer.svg";
import solder from "../../../public/Solder.svg";

import "@/assets/css/absence.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#494949",
    fontSize: 16,
    maxWidth: 7,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    background: "#F2F2F2",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Page = () => {
  const [data, setData] = React.useState(abscenceData)

  const removeAbsence = (absence: Absence) => {
    const res = deleteAbsence(absence)
    setData(res)
  }
  return (
    <TableContainer>
      <Table className="table" aria-label="customized table">
        <TableHead>
          <TableRow>
            {rowHead.map((row, index) => (
              <StyledTableCell key={row + index}>{row}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((abscence: Absence, index) => (
            <StyledTableRow key={abscence.user + index}>
              <StyledTableCell component="th" scope="row">
                {abscence.user}
              </StyledTableCell>
              <StyledTableCell align="left">
                <div className="category">
                  <span
                    className={
                      abscence.category === "RTT" ? abscence.category : "conge"
                    }
                  ></span>
                  <span>{abscence.category}</span>
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">{abscence.period}</StyledTableCell>
              <StyledTableCell align="left">
                {abscence.actual_solde}
              </StyledTableCell>
              <StyledTableCell align="left">
                {abscence.taking_solde}
              </StyledTableCell>
              <StyledTableCell align="left">
                {abscence.futur_solde}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Image
                  src={solder}
                  width={32}
                  height={32}
                  alt="solder"
                  onClick={() => removeAbsence(abscence)}
                />

                <Image
                  src={transferer}
                  width={32}
                  height={32}
                  alt="transferer"
                />
                <Image src={ajuster} width={32} height={32} alt="ajuster" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Page;
