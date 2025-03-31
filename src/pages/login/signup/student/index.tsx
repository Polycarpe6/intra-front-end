import React from 'react'
import stl from '../../login.module.css'
import { BtnLogin, InputCodProcess, InputEmail, InputName, InputPassword, TitleAndDesc } from '../../../../components'
import { Link } from 'react-router-dom'

export function Student() {

    const [student, setStudent] = React.useState({
        process: '',
        fullName: '',
        email: '',
        password: ''
    })

    const handleSubmit = () => {
        // e.preventDefault()
        // Implementar a chamada para a API de registrar aluno

        console.log(student);
        
    }
    
    return (
        <article className={`${stl.card_content_login} anime-bottom`}>

            <TitleAndDesc 
                title={"Junta-se a"}
                desc={"Envie seus dados para ser registrado do sistema!"}
            />

            <Link to={"/"} className={stl.link_signin_signup}>
                Já estou <span>registrado!</span>
            </Link>

            <InputName
                value={student.fullName}
                onChange={(e) => setStudent({...student, fullName: e.target.value })}
                disabled={true}
            />
            
            <InputEmail 
                value={student.email}
                onChange={(e) => setStudent({...student, email: e.target.value })}
            />

            <div className={stl.card_input_codProcess_password}>

                <InputCodProcess 
                    value={student.process}
                    onChange={(e) => setStudent({...student, process: e.target.value })}
                />

                <InputPassword 
                    value={student.password}
                    onChange={(e) => setStudent({...student, password: e.target.value })}
                />

            </div>

            <BtnLogin
                text={"Registrar"}
                onClick={handleSubmit}
            />

        </article>
    )
}
