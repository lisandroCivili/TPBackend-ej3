import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../style/style.css'
import { borrarColor, leerColores } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemCard = ({ color, setColores }) => {

  const eliminarColor = ()=>{
    Swal.fire({
      title: "¿Seguro desea eliminar el color?",
      text: "No se puede revertir esta operación.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarColor(color._id)
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Color eliminado",
            text: `El color fue eliminado.`,
            icon: "success"
          });
          const listaActualRespuesta = await leerColores();
          if (listaActualRespuesta.status === 200) {
            const listaActual = await listaActualRespuesta.json();
            setColores(listaActual);
          }
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `No se pudo eliminar el color, intente nuevamente en unos minutos.`,
            icon: "error"
          });
        }
      }
    });
  }

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
          <Button variant="primary" onClick={eliminarColor}>Eliminar</Button>
          <Link className="me-lg-2 btn btn-warning" to={'/editar/'+color._id}>Editar</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
;

export default ItemCard;
