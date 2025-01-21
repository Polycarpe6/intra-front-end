import React from 'react'
import stl from '../login.module.css'
import { Link } from 'react-router-dom'
import { BtnLogin, InputEmail, InputPassword, TitleAndDesc } from '../../../components'


export function SignIn() {

    return (
        <article className={`${stl.card_content_login} anime-bottom`}>

            <TitleAndDesc
                title={"Bem-vindo a"}
                desc={"Faça o login para acessar o seu conteúdo!!"}
            />

            <Link to={"signup"} className={stl.link_signin_signup}>
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
