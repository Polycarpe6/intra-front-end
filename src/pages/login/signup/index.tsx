import React from 'react'
import stl from '../login.module.css'
import { TitleAndDesc } from '../../../components'
import { Link } from 'react-router-dom'


export function SignUp() {
    
    return (
        <article className={`${stl.card_content_login} anime-bottom`}>
            
            <TitleAndDesc 
                title={"Junta-se a"}
                desc={"Por favor, selecione uma das opções para criar a sua conta!!"}
            />

            <Link to={"/"} className={stl.link_signin_signup}>
                Já tenho uma <span>conta!</span>
            </Link>

            <ul className={stl.list_type_user}>
                <li>
                    <Link to={"student"}>Aluno</Link>
                </li>
                <li>
                    <Link to={"teacher"}>Professor</Link>
                </li>
            </ul>

        </article>
    )
}
