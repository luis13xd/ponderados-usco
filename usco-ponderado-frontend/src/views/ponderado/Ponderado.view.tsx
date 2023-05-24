/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import "./ponderado.scss";
import { fetchPonderado } from "../../helpers/fetchPonderado";

const validationSchema = yup.object({
  lecturaCritica: yup
    .number()
    .integer()
    .min(1)
    .max(100)
    .required("Campo requerido"),
  cienciasNaturales: yup
    .number()
    .integer()
    .min(1)
    .max(100)
    .required("Campo requerido"),
  matematicas: yup
    .number()
    .integer()
    .min(1)
    .max(100)
    .required("Campo requerido"),
  ingles: yup.number().integer().min(1).max(100).required("Campo requerido"),
  socialesYCiudadanas: yup
    .number()
    .integer()
    .min(1)
    .max(100)
    .required("Campo requerido"),
});

export const Ponderado = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      lecturaCritica: "",
      cienciasNaturales: "",
      matematicas: "",
      ingles: "",
      socialesYCiudadanas: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const {
        cienciasNaturales,
        ingles,
        lecturaCritica,
        matematicas,
        socialesYCiudadanas,
      } = values;
      fetchPonderado()
        .then((data) => {
          navigate("/resultado",{state: {
            data
          }});
        })
        .catch((e) => console.log(`error ${e}`));
    },
  });
  return (
    <Card className="borderCard">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Typography
              align="center"
              variant="h3"
              component="div"
              style={{ fontWeight: "bold", color: "#8D191D" }}
              className="textDesktop"
            >
              PONDERADOS UNIVERSIDAD SURCOLOMBIANA
            </Typography>
            <Typography
              align="center"
              variant="h5"
              component="div"
              style={{ fontWeight: "bold", color: "#8D191D" }}
              className="textMobile"
            >
              PONDERADOS UNIVERSIDAD SURCOLOMBIANA
            </Typography>
          </Grid>
          <Grid item sm={12}>
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
              al programa que se desea. Este aplicativo es única y
              exclusivamente una{" "}
              <span style={{ fontWeight: "bold" }}>
                HERRAMIENTA DE ORIENTACIÓN
              </span>{" "}
              y es autonomía de la persona utilizarlo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Lectura Crítica"
                  name="lecturaCritica"
                  value={formik.values.lecturaCritica}
                  onChange={formik.handleChange}
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 100 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Ciencias Naturales"
                  name="cienciasNaturales"
                  value={formik.values.cienciasNaturales}
                  onChange={formik.handleChange}
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 100 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Matemáticas"
                  name="matematicas"
                  value={formik.values.matematicas}
                  onChange={formik.handleChange}
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 100 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Inglés"
                  name="ingles"
                  value={formik.values.ingles}
                  onChange={formik.handleChange}
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 100 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Sociales y Ciudadanas"
                  name="socialesYCiudadanas"
                  value={formik.values.socialesYCiudadanas}
                  onChange={formik.handleChange}
                  variant="outlined"
                  style={{ width: "100%" }}
                  required
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 100 } }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  startIcon={<BarChartIcon />}
                  disabled={!formik.isValid}
                  style={{ width: "100%", fontWeight: "bold" }}
                >
                  Realizar Ponderado
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DescriptionIcon />}
                  style={{ width: "100%", fontWeight: "bold" }}
                >
                  Realizar encuesta
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};
