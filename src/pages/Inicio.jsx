import { Container, Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import "../../style/style.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { crearColor } from "../../helpers/queries";


const Inicio = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const datosValidados = async(color)=>{

    const respuesta = await crearColor(color);
        if (respuesta.status === 201) {
          Swal.fire({
            title: "Color guardado",
            text: `Se guardo el color exitosamente.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: "No se pudo guardar el color, intente nuevamente en unos minutos.",
            icon: "error",
          });
        }
  }

  return (
    <Container>
      <div className="border border-black d-flex flex-column">
        <h1 className="fw-light my-4 ps-4">Seleccionar color</h1>
        <Form
          className="d-flex justify-content-evenly px-5 bg-body-secondary"
          onSubmit={handleSubmit(datosValidados)}
        >
          <Form.Group controlId="colores" className="my-5">
            <Form.Control
              type="color"
              className="inputColor fs-4"
              placeholder="Ingrese un color Ej: Blue"
              {...register("hexaColor", {
                required: true,
              })}
            />
            <Form.Text className="text-danger">
              {errors.color?.message}
            </Form.Text>
          </Form.Group>
        <div className="my-4 pe-4 d-flex flex-column justify-content-center">
          <Button variant="primary" className="botonSubmit" type="submit">
            Guardar
          </Button>
        </div>
        </Form>
      </div>
      <ListaColores></ListaColores>
    </Container>
  );
};

export default Inicio;
