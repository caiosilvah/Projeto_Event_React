
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login/Login";
// import Home from "../pages/home/Home";
// import ListagemEventos from "../pages/listagemEventos/ListagemEventos";

import CadastroDeEventos from "../pages/cadastroDeEventos/cadastroDeEventos";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroTipoUsuario from "../pages/tipoUsuarios/TipoUsuario";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} exact/>

                {/* <Route path="/Home" element={<Home/>} exact/> */}

                <Route path="/TipoEvento" element={<CadastroTipoEvento/>}/>

                <Route path="/Evento" element={<CadastroDeEventos/>}/>

                {/* <Route path="/Listagem" element={<ListagemEventos/>}/> */}

                <Route path="/TipoUsuario" element={<CadastroTipoUsuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
