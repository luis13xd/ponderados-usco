/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
// import { PonderadoResponse } from "../../models/Ponderado.interface";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // const [Resultado, setResultado] = useState<PonderadoResponse[]>();
  useEffect(() => {
    if (!state) {
      navigate("/");
    } else {
      // setResultado(state.data);
    }
  }, [state, navigate]);

  return (
    <Card className="borderCard">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography
            align="center"
            variant="h4"
            component="div"
            style={{ fontWeight: "bold", color: "#8D191D" }}
            className="textDesktop"
          >
            RESULTADOS DEL PONDERADO ICFES
          </Typography>
          <Typography
            align="center"
            variant="h5"
            component="div"
            style={{ fontWeight: "bold", color: "#8D191D" }}
            className="textMobile"
          >
            RESULTADOS DEL PONDERADO ICFES
          </Typography>
        </Grid>
        <Grid item sm={12}>
          {/* {Resultado !== undefined &&
            Resultado.map((data) => {
              return (
                <TableContainer
                  component={Paper}
                  key={data.faculty}
                  style={{ marginTop: "2rem"}}
                >
                  <Table aria-label="simple table">
                    <TableHead>
                      <StyledTableRow>
                        <StyledTableCell style={{ textTransform: "uppercase" }}>
                          {data.faculty}
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          style={{ textTransform: "uppercase" }}
                        >
                          Puntaje
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableHead>
                    <TableBody>
                      {data.ponderados.map((row) => (
                        <StyledTableRow
                          key={row.career.title}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <StyledTableCell component="th" scope="row">
                            {row.career.title}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.ponderado.toFixed(2)}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            })} */}
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            component="p"
            style={{ textAlign: "justify", color: "#4E6470" }}
          >
            <span style={{ fontWeight: "bold" }}>IMPORTANTE:</span> Los
            resultados obtenidos en este ponderado{" "}
            <span style={{ fontWeight: "bold" }}>NO TIENEN RELACIÓN</span> con
            los procesos de admisión y{" "}
            <span style={{ fontWeight: "bold" }}>NO ASEGURAN</span> el ingreso
            al programa que se desea. Este aplicativo es única y exclusivamente
            una{" "}
            <span style={{ fontWeight: "bold" }}>
              HERRAMIENTA DE ORIENTACIÓN
            </span>{" "}
            y es autonomía de la persona utilizarlo.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            style={{ color: "#4E6470" }}
          >
            Los programas académicos que tienen * se promedian entre 50% ICFES y
            50% presentación de prueba de actitudes. *
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
