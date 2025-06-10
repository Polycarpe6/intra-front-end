import React from 'react'
import stl from '../login.module.css'
import { Link } from 'react-router-dom'
import { login } from '../../../api/endpoints'
import { BtnLogin, InputEmail, InputPassword, TitleDescriptionLoginFrom } from '../../../components'


export function SignIn() {
    
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })
    
    const handleSubmit = async () => {        

        try {
            const response = await login(user);
            console.log('Alunos:', response);
            // Aqui você pode redirecionar ou mostrar uma mensagem de sucesso
        } catch (error) {
            console.error('Erro ao buscar alunos:', error);
            // Aqui você pode mostrar uma mensagem de erro para o usuário
        }
        
    }

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
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <InputPassword 
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <Link to={"forget"} className={stl.link_lost_password}>
                Esqueceu a <span>senha?</span>
            </Link>

            <BtnLogin 
                text={"Entrar"}
                onClick={handleSubmit}
            />

        </article>
    )
}
