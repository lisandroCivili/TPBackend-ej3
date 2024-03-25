import { Container, Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import "../../style/style.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearColor, editarColor, obtenerColor } from "../../helpers/queries";


const Inicio = ({titulo, editando}) => {

    const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  let boton
  if (editando) {
    boton = 'Editar'
  }else{
    boton = 'Guardar'
  }

  const { id } = useParams();
  const navegacion = useNavigate();
 
  
  const cargarDatos = async () => {
    const respuesta = await obtenerColor(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(typeof datos.hexaColor)
      setValue("hexaColor", datos.hexaColor);
    } else {
      console.log("No se obtuvieron datos");
    }
  };

  useEffect(() => {
    if (editando) {
      cargarDatos();
    }
  }, []);
  
  const datosValidados = async(color)=>{
    if (editando) {
      const respuesta = await editarColor(color, id)
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Edicion confirmada",
          text: `El color fue editado con exito.`,
          icon: "success"
        }).then(() => {
          window.location.reload();
        });
        navegacion('/')
      }else{
        Swal.fire({
          title: "No se pudo editar.",
          text: "Por favor intentalo nuevamente en unos minutos.",
          icon: "error"
        });
      }
    }else{
      const respuesta = await crearColor(color);
          if (respuesta.status === 201) {
            console.log(color)
            Swal.fire({
              title: "Color guardado",
              text: `Se guardo el color exitosamente.`,
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: "No se pudo guardar el color, intente nuevamente en unos minutos.",
              icon: "error",
            });
          }
    }
  }

  return (
    <Container>
      <div className="border border-black d-flex flex-column">
        <h1 className="fw-light my-4 ps-4">{titulo}</h1>
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
              {errors.hexaColor?.message}
            </Form.Text>
          </Form.Group>
        <div className="my-4 pe-4 d-flex flex-column justify-content-center">
          <Button variant="primary" className="botonSubmit" type="submit">
            {boton}
          </Button>
        </div>
        </Form>
      </div>
      <ListaColores></ListaColores>
    </Container>
  );
};

export default Inicio;
