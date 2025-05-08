import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista"
import CadastroEvento from "../../assets/img/cadastrotipoevento.png"
import Cadastro from "../../components/cadastro/Cadastro";

const CadastroTipoDeEvento = () => {
    return(
    <>
    
    <Header/>
        <main>
        <Cadastro tituloCadastro="Cadastro de evento"
                    campoPlaceholder="evento"
                    visibilidade="none"
                    nomeplacehoderr="nome"
                    nomeplacehoder="tipo de evento"
                    nomeDoBotao="Cadastrar"
                    img_banner={CadastroEvento}

                />

        </main>
    {/* <Cadastro/> */}
    
    <Lista
    tituloLista = ""
    titulo = "Titulo"
    visibilidade = "none"

    /> 
        
     
    <Footer/>
    
    </>
    )
}

export default CadastroTipoDeEvento;