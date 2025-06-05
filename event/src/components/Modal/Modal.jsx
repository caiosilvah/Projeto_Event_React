import imgDeletar from "../../assets/img/imgDeletar.png"
import api from "../../Services/services"
import { useEffect, useState } from "react";
import "./Modal.css"


const Modal = (props) => {

  const [comentarios, setComentarios] = useState([]);

  async function listarComentarios() {
    try {
      const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`)

      setComentarios(resposta.data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    listarComentarios();
  }, [])

    async function cadastrarComentarios(comentario) {
      try {
          await api.post("ComentariosEventos",{
            idUsuario: usua, 
            idEvento: props.idEvento, 
            descricao: comentario})
      } catch (error) {
          console.error(error);
      }
    }

    function deletarComentario() {
      
    }

  return (
    <>
      <div className="model-overlay" onClick={props.fecharModal}></div>
      <div className="model">
        <h1>{props.titulo}</h1>
        <div className="model_conteudo">
          {props.tipoModel === "descricaoEvento" ? (
            <p>{props.descricao}</p>
          ) : (
            <>
              {comentarios.map((item) => 
                <div key={item.idComentarioEvento}>
                  <strong>{item.usuario.nomeUsuario}
                  </strong>
                  <img src={imgDeletar} alt="excluir" />
                  <p>{item.descricao}</p>
                  <hr />
                </div>
              )}
              <div>
                <input type="text"
                  placeholder="Escreva seu comentario..." />
                <button>
                  Cadastrar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Modal;