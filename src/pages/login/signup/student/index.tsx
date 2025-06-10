import React from 'react'
import { Link } from 'react-router-dom'
import stl from '../../login.module.css'
import { signupStudent } from '../../../../api/endpoints'
import { BtnLogin, InputBI, InputCodProcess, InputEmail, InputPassword, TitleDescriptionLoginFrom } from '../../../../components'

export function Student() {


    const [student, setStudent] = React.useState({
        email: '',
        password: '',

        // process: '',
        // n_BI: '',
        // email: '',
        // password: ''
    })

    const handleSubmit = async () => {

        console.log(student)
        
        try {
            const newStudent = await signupStudent(student);
            console.log('Aluno registrado:', newStudent);
            // Aqui você pode redirecionar ou mostrar uma mensagem de sucesso
        } catch (error) {
            console.error('Erro ao registrar aluno:', error);
            // Aqui você pode mostrar uma mensagem de erro para o usuário
        }
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
