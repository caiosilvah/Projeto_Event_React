import "./Lista.css";
import Editar from "../../assets/img/Editar.png"
import Excluir from "../../assets/img/Excluir.png";
import Descricao from "../../assets/img/informacoes 1.png";




const Lista = (props) => {
    return (
        <>
            <section className="listagem">
                <h1>{`Lista de ${props.titulo_lista}`}</h1>
                <hr className="linha_titulo" />


                <div className="tabela layout_grid">
                    <table>
                        <thead>
                            <tr className="tabela_cabecalho">
                                <th>{props.titulo}</th>
                                <th style={{ display: props.visibilidade }}>Data do Evento</th>
                                <th style={{ display: props.visibilidade }}>Tipo Evento</th>
                                <th>Editar</th>
                                <th>Deletar</th>
                                <th style={{ display: props.visibilidade }}>Descrição</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => (
                                    <tr className="item_lista"
                                        key={props.tipoLista == "TiposEventos" ? item.idTipoEvento : (props.tipoLista == "TipoUsuarios" ? item.idTipoUsuario : item.idEvento)}
                                    >

                                        <td data-cell={props.titulo}>{props.tipoLista == "TiposEventos" ? item.tituloTipoEvento : item.tituloTipoUsuario}</td>

                                        <td data-cell="Tipo Evento" style={{ display: props.visibilidade }}>yyyyyyyyy</td>

                                        <td data-cell="Editar">
                                            <img src={Editar}
                                                alt="caneta"
                                                onClick={() => props.funcEditar(item)}
                                                className="botao_edicao" />
                                        </td>
                                        <td data-cell="Excluir">
                                            <img src={Excluir} alt="lixeira" onClick={() => props.funcExcluir(item)} className="botao_edicao" />
                                        </td>
                                        <td data-cell="Descricao" style={{ display: props.visibilidade }}>
                                            <img src={Descricao} alt="informacao" onClick={() => props.funcListar(item)} className="botao_edicao" />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <p>Nenhum tipo evento encontrado</p>
                            )


                            }

                        </tbody>
                    </table>
                </div>


            </section>

        </>
    )
}


export default Lista;