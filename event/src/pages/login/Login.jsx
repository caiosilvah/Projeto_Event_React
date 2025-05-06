import Logo from "../../assets/img/logo1.svg"
import "./Login.css";
import Botao from "../../components/botao/Botao";

const Login = () => {
 return(
    <main className="main_login">
        <div className="banner_login" ></div>
        <section className="section_login">
            <img src={Logo} alt="Logo do Event" />
                <form action="" className="formulario_login">
                    <div className="campos_login">
                        <div className="campo_input">
                            <input type="email" name="email" placeholder="UserName" />
                        </div>
                        <div className="campo_input">
                            <input type="password" name="senha" placeholder="PassWord" />
                        </div>
                    </div>
                    <a href="">Esqueceu sua senha?</a>
                    <Botao nomeDoBotao="Login"/>
                </form>
        </section>
    </main>
 )
}

export default Login;