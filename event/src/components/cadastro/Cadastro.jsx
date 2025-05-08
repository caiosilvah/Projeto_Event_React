import "./Cadastro.css";
import Botao from "../botao/Botao"
const Cadastro = (props) => {


    return (
        <section className="section_cadastro">
              <div className="Titulo_cadastro">

               <h1>
                    {props.tituloCadastro}
                </h1>
                <hr />

              </div>

            <form action="" className="layout_grid form_cadastro">
                
                <img className="img_Cadastro" src={props.img_banner} alt="" />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
              
                        <input className="inputt" type="text" placeholder={props.nomeplacehoderr} />
                        <input className="inputer" type="text" style={{display:props.visibilidade}} />

                    </div>

                    <Botao nomeDoBotao={props.nomeDoBotao} />
                </div>
            </form>
        </section>

    )
}
export default Cadastro;