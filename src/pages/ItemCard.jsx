import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../style/style.css'

const ItemCard = ({ color }) => {


  const colorStyle = {
    backgroundColor: color.hexaColor,
  };

  return (
    <>
      <Card className="cards mx-1 my-3">
        <Card.Body>
          <Card.Title>{color.hexaColor}</Card.Title>
          <div className="color-display" style={colorStyle}></div>
          <div className="d-flex gap-3">
          <Button variant="primary">Eliminar</Button>
          <Link className="me-lg-2 btn btn-warning" to={'/editar/'+color.id}>Editar</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
;

export default ItemCard;
