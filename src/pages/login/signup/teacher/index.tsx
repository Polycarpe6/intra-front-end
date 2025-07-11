import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import jwt from 'jsonwebtoken'

import stl from '../../login.module.css'
import { BtnLogin, InputPassword, TitleDescriptionLoginFrom } from '../../../../components'

export function Teacher() {
    const [teacher, setTeacher] = React.useState({
        password: ''
    })

    const location = useLocation()

    const subPath = location.pathname.replace(/^\/signup\/teacher\//, '')

    // ⚠️ Use decode, not verify (never expose the secret in client-side code)
    const decoded = jwt.decode(subPath) as { id?: string, email?: string, role?: string } | null

    const handleSubmit = () => {
        console.log('Teacher data:', teacher)
        console.log('Decoded token:', decoded)
        // Aqui você pode enviar os dados ao servidor, por exemplo com fetch/axios
    }

    return (
        <article className={`${stl.card_content_login} anime-bottom`}>
            <TitleDescriptionLoginFrom
                title="Junta-se a"
                desc="Crie uma senha definitiva para aceder a sua conta!"
            />

            <Link to="/" className={stl.link_signin_signup}>
                Já estou <span>registrado!</span>
            </Link>

            <InputPassword 
                value={teacher.password}
                onChange={(e) => setTeacher({ ...teacher, password: e.target.value })}
            />

            <BtnLogin
                text="Registrar"
                onClick={handleSubmit}
            />
        </article>
    )
}
