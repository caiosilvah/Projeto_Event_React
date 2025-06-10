import "./Login.css"
import Botao from "../../components/botao/Botao";
import Logo1 from "../..//assets/img/logo1.svg";
import api from "../../Services/services";
import { useState } from "react";

import { userDecodeToken } from "../../auth/Auth";
import secureLocalStorage from "react-secure-storage";

import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate

    async function realizarAutenticacao(e) {
        e.preventDefault();
        const usuario = {
            email: email,
            senha: senha
        }
        if (senha.trim() != "" || email.trim() != ""){
            try {
                const resposta = await api.post("Login", usuario);
                const token = resposta.data.token             

                if (token) {
                    const tokenDecodificado = userDecodeToken(token);
                    console.log("Token decodificado");
                    console.log(tokenDecodificado);

                    secureLocalStorage.setItem("tokenLogin", JSON.
                    stringify(tokenDecodificado));

                    if(tokenDecodificado.tipoUsuario === "aluno"){
                        //redirecionar a tela de lista de eventos(branca)
                        navigate ("/ListaEvento")
                    
                    }else{
                        //ele vai me encaminhar para a tela de cadastro de eventos (vermelha)
                        navigate("/Evento")
                    }
                    
                }
            } catch (error) {
                console.log(error);
                alert("Email ou senha invalidos! Para duvidas, entre em contato com o suporte")
            }
        } else {
            alert("preencha os campos vazios para realizar o login");
        }
    }
    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo1} alt="Logo do Event" />
                <form action="" className="form_login" onSubmit={realizarAutenticacao}>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha"></label>
                            <input type="password" name="senha" placeholder="password"  value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </div>

                    <a href="https://www.youtube.com/">Esqueceu a senha? </a>
                    <Botao nomeDoBotao="Login" />
                </form>
            </section>
        </main>
    )
}

export default Login;

