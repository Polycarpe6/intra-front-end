import stl from '../login.module.css'
import { Link } from 'react-router-dom'
import { BtnLogin, InputEmail, InputPassword, TitleDescriptionLoginFrom } from '../../../components'


export function SignIn() {

    return (
        <article className={`${stl.card_content_login} anime-bottom`}>

            <TitleDescriptionLoginFrom
                title={"Bem-vindo ao"}
                desc={"Faça o login para acessar o seu conteúdo!!"}
            />

            <Link to={"signup/student"} className={stl.link_signin_signup}>
                Não é registrado? <span>registra-se agora!</span>
            </Link>
            
            <InputEmail />

            <InputPassword />

            <Link to={"forget"} className={stl.link_lost_password}>
                Esqueceu a <span>senha?</span>
            </Link>

            <BtnLogin 
                text={"Entrar"}
            />

        </article>
    )
}
