import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import stl from '../../login.module.css'
import { BtnLogin, InputEmail, InputPassword, TitleDescriptionLoginFrom } from '../../../../components'

export function Teacher() {
    const navigate = useNavigate()
    const [teacher, setTeacher] = React.useState({
        email: '',
        password: '',
        role: 'teacher'
    })

    useEffect(() => {
        console.log('Teacher data:', teacher);
    }, [teacher])

    const handleSubmit = async () => {
        console.log('Teacher data:', teacher)

        const registerRequestResult = await axios.post<{
            error: boolean,
            message: string,
            status: number,
            details: any,
        }>('https://school.baikasaude.click/auth/register',
            {
                email: teacher.email,
                password: teacher.password,
                role: teacher.role
            }
        )

        if (registerRequestResult.status === 200) {
            alert(registerRequestResult.data.message)
            navigate('/signin')
        } else {
            alert(registerRequestResult.data.message)
        }
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

            <InputEmail
                value={teacher.email}
                onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
            />

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
