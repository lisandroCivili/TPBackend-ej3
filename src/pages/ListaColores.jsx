import { Container} from "react-bootstrap";
import ItemCard from "./ItemCard";
import "../../style/style.css";
import { useEffect, useState } from "react";
import { leerColores} from "../../helpers/queries";

const ListaColores = () => {

  const [colores, setColores] = useState([])

  useEffect(() => {
    obtenerColor();
  }, []);

  const obtenerColor = async()=>{
    const respuesta = await leerColores()
    if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setColores(datos);
    }else{
        console.log('error')
    }
}
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {colores.map((color) => (
        <ItemCard key={color._id} color={color} setColores={setColores} />
      ))}
    </Container>
  );
};

export default ListaColores;
