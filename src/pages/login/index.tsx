import stl from './login.module.css'
import { LoginRoute } from '../../routes'


export function Login() {

    return (
        <main className={stl.main}>

            <section className={stl.section_content_login}>
                <LoginRoute />
            </section>

            <section className={`${stl.section_img_login} anime-bottom`}>
                
                <article className={stl.card_content_img}>
                    <div className='anime-bottom'>
                        <strong>
                            Software de gerenciamento de notas
                        </strong>
                        <p>
                            "Facilite sua jornada acadêmica! Este software ajuda alunos e professores a gerenciar notas, acompanhar o progresso e focar no que importa para crescer e aprender juntos."
                        </p>
                    </div>
                </article>

            </section>

        </main>
    )
}
