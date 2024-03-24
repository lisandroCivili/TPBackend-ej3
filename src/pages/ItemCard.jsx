import { Container, Card, Button } from "react-bootstrap";
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
;

export default ItemCard;
