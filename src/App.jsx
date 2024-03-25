import Inicio from "./pages/Inicio";
import Menu from './pages/common/Menu'
import Footer from './pages/common/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Inicio editando={false} titulo='Agregar nuevo color'/>}/>
          <Route path="/editar/:id" element={<Inicio editando={true} titulo='Editar color'/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
