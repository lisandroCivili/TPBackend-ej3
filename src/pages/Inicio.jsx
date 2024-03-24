import { Container, Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import "../../style/style.css";
const Inicio = () => {
  return (
    <Container>
      <div className="border border-black d-flex flex-column">
        <h1 className="fw-light my-4 ps-4">Seleccionar color</h1>
        <Form className="d-flex justify-content-evenly px-5 bg-body-secondary">
          <div className="color-display">Color:</div>
          <Form.Group controlId="colores" className="my-5">
            <Form.Control
              type="text"
              className="inputColor fs-4"
              placeholder="Ingrese un color Ej: Blue"
            />
          </Form.Group>
        </Form>
        <div className="my-4 pe-4 d-flex justify-content-end">
          <Button variant="primary" size="lg">
            Guardar
          </Button>
        </div>
      </div>
      <ListaColores></ListaColores>
    </Container>
  );
};

export default Inicio;
