import { Navbar, Container} from "react-bootstrap";
import logo from "../../assets/logo-color-wave.jpg";

const Menu = () => {

  return (
    <Navbar expand="lg">
      <Container className="text-center d-flex justify-content-center">
        <Navbar.Brand className="bg-body-tertiary">
          <img
            src={logo}
            alt="Logo de To-Do"
            className="img-fluid"
            width={65}
          />
        </Navbar.Brand>
        <h1>Color Wave</h1>
      </Container>
    </Navbar>
  );
};

export default Menu;
