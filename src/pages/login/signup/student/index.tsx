import React from 'react'
import { Link } from 'react-router-dom'
import stl from '../../login.module.css'
import { BtnLogin, InputBI, InputCodProcess, InputEmail, InputPassword, TitleDescriptionLoginFrom } from '../../../../components'

export function Student() {

    const [student, setStudent] = React.useState({
        process: '',
        n_BI: '',
        email: '',
        password: ''
    })

    const handleSubmit = () => {
        
        console.log(student);
        
    }
    
    return (
        <article className={`${stl.card_content_login} anime-bottom`}>

            <TitleDescriptionLoginFrom 
                title={"Junta-se a"}
                desc={"Envie seus dados para ser registrado do sistema!"}
            />

            <Link to={"/"} className={stl.link_signin_signup}>
                Já estou <span>registrado!</span>
            </Link>

            <InputBI
                value={student.n_BI}
                onChange={(e) => setStudent({...student, n_BI: e.target.value })}
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
