import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Inicio from "./components/inicio.jsx";
import Trabalhos from "./components/trabalhos.jsx";
import Sobre from "./components/sobre.jsx"
import Contato from "./components/contato.jsx";
import Politicas from "./components/politicas.jsx";
import ButtonTop from "./components/button-top.jsx"
import WhatsappFloat from "./components/whatsapp-float.jsx"


function Principal() {
    return(
        <>
        < NavBar/>

        
        < Inicio/>
        < Trabalhos/>
        < Sobre/>
        < Contato/>
        < ButtonTop/>
        < WhatsappFloat/>
        </>
    );
}

function App() {
    return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Principal />} />

        <Route path="/politicas-de-privacidade" element={<Politicas />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;