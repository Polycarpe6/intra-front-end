import React from 'react'
import { Link } from 'react-router-dom'
import stl from '../../login.module.css'
import { BtnLogin, InputPassword, TitleDescriptionLoginFrom } from '../../../../components'

export function Teacher() {

    const [teacher, setteacher] = React.useState({
            password: ''
        })
    
        const handleSubmit = () => {
           
            console.log(teacher);
            
        }
    
    return (
        <article className={`${stl.card_content_login} anime-bottom`}>
        
                    <TitleDescriptionLoginFrom
                        title={"Junta-se a"}
                        desc={"Crie uma senha definitiva para aceder a sua conta!"}
                    />
        
                    <Link to={"/"} className={stl.link_signin_signup}>
                        Já estou <span>registrado!</span>
                    </Link>
        
                            
                    <InputPassword 
                        value={teacher.password}
                        onChange={(e) => setteacher({ ...teacher, password: e.target.value })}
                    />
        
                    <BtnLogin
                        text={"Registrar"}
                        onClick={handleSubmit}
                    />
        
                </article>
    )
}
