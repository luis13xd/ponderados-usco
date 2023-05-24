/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Logo from "static/logoexcel2.png";

import "../ponderado/ponderado.scss";
import { Ponderado } from "models/Ponderado.interface";
import { fetchPonderado } from "helpers/fetchPonderado";
import { number } from "yup/lib/locale";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: "bold",
    padding: "5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "5px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    padding: "5px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    padding: "5px",
  },
}));

export const TableView = () => {
  const [ponderados, setponderados] = useState<Ponderado[]>(); // API
  const [check, setcheck] = useState(false);
  const [dataUser, setdataUser] = useState({
    lecturaCritica: 0,
    cienciasNaturales: 0,
    matematicas: 0,
    ingles: 0,
    socialesYCiudadanas: 0,
  }); // INPUT

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    fetchPonderado()
      .then((res) => {
        setponderados(res);
      })
      .catch((e) => console.log(`error ${e}`));
  }, []);

  useEffect(() => {
    for (const property in dataUser) {
      if (+property !== 0) {
        setcheck(true);
      }
    }
  }, [dataUser]);

  useEffect(() => {
    if (check && ponderados !== undefined) {
      setponderados(
        ponderados.map((resultado) => ({
          ...resultado,
          ponderado:
            resultado.lecturaCritica * 0.01 * dataUser.lecturaCritica +
            resultado.cienciasNaturales * 0.01 * dataUser.cienciasNaturales +
            resultado.socialesYCiudadanas *
              0.01 *
              dataUser.socialesYCiudadanas +
            resultado.matematicas * 0.01 * dataUser.matematicas +
            resultado.ingles * 0.01 * dataUser.ingles,
        }))
      );
    }
  }, [ponderados, dataUser, check]);

  return (
    <Card className="borderCard">
      {ponderados !== undefined && (
        <TableContainer>
          <Table style={{ width: "100%" }}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell
                  align="center"
                  rowSpan={2}
                  style={{ width: "calc(100%/9)" }}
                >
                  <img src={Logo} alt="Logo" className="navbarimgDesktop" />
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  colSpan={9}
                  sx={{ backgroundColor: "#8D191D", borderRadius: "3px" }}
                >
                  SIMULADOR DE PONDERACIONES USCO
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  align="justify"
                  colSpan={9}
                  style={{
                    color: "black",
                    fontWeight: "normal",
                    fontSize: "13px",
                  }}
                >
                  El presente es un{" "}
                  <span style={{ textDecoration: "underline" }}>
                    aplicativo simulador
                  </span>{" "}
                  en el que podrá realizar el ejercicio para conocer su puntaje
                  ponderado, según los resultados de las áreas evaluadas por el
                  ICFES; lo que le permitirá una aproximación con los puntajes
                  de cierre de los dos (2) últimos periodos académicos
                  inmediatamente anterior
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  align="center"
                  colSpan={9}
                  style={{
                    backgroundColor: "yellow",
                    color: "#8D191D",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "0",
                    borderRadius: "3px",
                  }}
                >
                  ESTA ES UNA HERRAMIENTA DE ORIENTACIÓN, NO ASEGURA NI
                  GARANTIZA SU ADMISIÓN EN LA UNIVERSIDAD SURCOLOMBIANA
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  align="center"
                  sx={{ backgroundColor: "#8D191D" }}
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    borderTopLeftRadius: "3px",
                    borderBottomLeftRadius: "3px",
                  }}
                >
                  ÁREAS
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                >
                  LECTURA CRÍTICA
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                >
                  CIENCIAS NATURALES
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                >
                  CIENCIAS SOCIALES
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                >
                  MATEMÁTICAS
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                >
                  INGLÉS
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  rowSpan={3}
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    borderBottomLeftRadius: "3px",
                  }}
                >
                  SU PUNTAJE PONDERADO
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  rowSpan={3}
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                >
                  PUNTAJE DE CIERRE COHORTE 2022-2
                </StyledTableCell>
                <StyledTableCell
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    borderTopRightRadius: "3px",
                    borderBottomRightRadius: "3px",
                  }}
                  rowSpan={3}
                >
                  PUNTAJE DE CIERRE COHORTE 2023-1
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  align="center"
                  sx={{ backgroundColor: "#abcf8f" }}
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    borderRadius: "3px",
                    color: "black",
                  }}
                >
                  Ingrese aquí su puntaje por cada área del ICFES
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                  align="center"
                >
                  <TextField
                    variant="outlined"
                    onChange={handleChange}
                    value={
                      dataUser.lecturaCritica === 0
                        ? ""
                        : dataUser.lecturaCritica
                    }
                    name="lecturaCritica"
                  />
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                  align="center"
                >
                  <TextField
                    variant="outlined"
                    onChange={handleChange}
                    value={
                      dataUser.cienciasNaturales === 0
                        ? ""
                        : dataUser.cienciasNaturales
                    }
                    name="cienciasNaturales"
                  />
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                  align="center"
                >
                  <TextField
                    variant="outlined"
                    onChange={handleChange}
                    value={
                      dataUser.socialesYCiudadanas === 0
                        ? ""
                        : dataUser.socialesYCiudadanas
                    }
                    name="socialesYCiudadanas"
                  />
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                  align="center"
                >
                  <TextField
                    variant="outlined"
                    onChange={handleChange}
                    value={
                      dataUser.matematicas === 0 ? "" : dataUser.matematicas
                    }
                    name="matematicas"
                  />
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                  align="center"
                >
                  <TextField
                    variant="outlined"
                    sx={{ fontWeight: "bold" }}
                    onChange={handleChange}
                    value={dataUser.ingles === 0 ? "" : dataUser.ingles}
                    name="ingles"
                  />
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  style={{ fontSize: "13px", width: "calc(100%/9)" }}
                  sx={{ backgroundColor: "#8D191D", borderRadius: "3px" }}
                  align="center"
                >
                  PROGRAMAS DE PREGRADO
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    color: "#8D191D",
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                  align="center"
                >
                  %
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    color: "#8D191D",
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                  align="center"
                >
                  %
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    color: "#8D191D",
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                  align="center"
                >
                  %
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    color: "#8D191D",
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                  align="center"
                >
                  %
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    fontSize: "13px",
                    width: "calc(100%/9)",
                    color: "#8D191D",
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                  align="center"
                >
                  %
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {ponderados.map((item, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.career.title}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.lecturaCritica} %
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.cienciasNaturales} %
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.socialesYCiudadanas} %
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.matematicas} %
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.ingles} %
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{
                        fontSize: "13px",
                        width: "calc(100%/9)",
                        color: "#8D191D",
                        fontWeight: "bold"
                      }}
                    >
                      {check && item.ponderado > 0
                        ? item.ponderado.toFixed(2)
                        : ""}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.cierre1 > 0 ? item.cierre1 : "No se ofreció"}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontSize: "13px", width: "calc(100%/9)" }}
                    >
                      {item.cierre2 > 0 ? item.cierre2 : "No se ofreció"}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
              <StyledTableRow>
                <StyledTableCell
                  colSpan={9}
                  sx={{ backgroundColor: "#8D191D" }}
                  align="center"
                  style={{
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "3px",
                  }}
                >
                  Los puntajes de cierre se relacionan con la última persona
                  admitida en el primer llamado y pueden tener variaciones cada
                  periodo académico, por lo cual se incrementarán o disminuirán
                  las posibilidades de admisión a cualquier programa ofertado
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  colSpan={9}
                  align="center"
                  style={{
                    fontSize: "12px",
                    borderRadius: "3px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>*NOTA:</span> El programa
                  de Licenciatura en Educación Física, Recreación y Deportes
                  realiza examen médico y prueba de aptitud física que se
                  promedian con las Pruebas Saber 11.
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Card>
  );
};
