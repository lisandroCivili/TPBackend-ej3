import { Container, Card, Button } from "react-bootstrap";
import ItemCard from "./ItemCard";
import "../../style/style.css"; 

const ListaColores = () => {
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      <ItemCard></ItemCard>
    </Container>
  );
};

export default ListaColores;
