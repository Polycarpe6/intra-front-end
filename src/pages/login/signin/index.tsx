import React from 'react';
import stl from '../login.module.css';
import { login } from '../../../api/endpoints';
import { Link, useNavigate } from 'react-router-dom';
import { BtnLogin, InputEmail, InputPassword, TitleDescriptionLoginFrom } from '../../../components';
import { UserContext } from '../../../context';


export function SignIn() {
    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const { setData } = React.useContext(UserContext);

    const handleSubmit = async () => {

        try {
            const response = await login(loginData);

            console.log('Resposta do login:', response);

            if (response && response.token) {

               

                const INTRADB = {

                    token: "",
                    user: {
                        id: 0,
                        nome: "",
                        email: "",
                        role: "",
                        createdAt: "",
                        authId: ""
                    }
                };



                INTRADB.token = response.token
                INTRADB.user.id = response.user.id
                INTRADB.user.nome = response.user.nome
                INTRADB.user.email = response.user.email
                INTRADB.user.authId = response.user.authId  
                INTRADB.user.createdAt = response.user.createdAt
                INTRADB.user.role = response.user.email === "lucaspazito@gmail.com" ? "admin" : "student"

                
                setData(
                    {
                        token: INTRADB.token,
                        user: {
                            id: INTRADB.user.id,
                            nome: INTRADB.user.nome,
                            email: INTRADB.user.email,
                            authId: INTRADB.user.authId,
                            createdAt: INTRADB.user.createdAt,
                            role: INTRADB.user.role
                        }
                    }
                )

                window.location.reload()
                
            } else {
                alert('Login inválido.');
            }
        } catch (error) {
            console.error('Erro no login:', error);
            alert('Erro ao tentar fazer login.');
        }
    };

    return (
        <article className={`${stl.card_content_login} anime-bottom`}>
            <TitleDescriptionLoginFrom
                title={"Bem-vindo ao"}
                desc={"Faça o login para acessar o seu conteúdo!!"}
            />

            <Link to={"signup/student"} className={stl.link_signin_signup}>
                Não é registrado? <span>registra-se agora!</span>
            </Link>

            <InputEmail 
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />

            <InputPassword 
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />

            <Link to={"forget"} className={stl.link_lost_password}>
                Esqueceu a <span>senha?</span>
            </Link>

            <BtnLogin 
                text={"Entrar"}
                onClick={handleSubmit}
            />
        </article>
    );
}
