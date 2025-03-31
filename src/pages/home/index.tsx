import React from 'react'
import stl from './home.module.css'
import { HailySchedule } from '../../api/mock'
import { CardBlog, CardProfile, CardSearch, Col_Xl_3, Schedules, TitleAndDescription, TitleDescLink } from '../../components'



export function Home() {

    const [blogs, setBlogs] = React.useState(
        [
            {
                category:"topic",
                disc:'trei',
                author:'Lucas Pazito',
                level:'Coordenador do Curso',
                date:'há 15 minutos',
                title: 'Inicio das Provas',
                desc: 'Aproveite as férias para preparar-se para as próximas provas. onsectetur adipiscing elit. Sed vel ipsum non risus bibendum porttitor. Aenean vel',
                likes: 301,
                comments: 105,
                downloads: 371,
                views: '+300 Vizualicações',
            },
            {
                category:"news",
                disc:'',
                author:'Olivia Matus',
                level:'Coordenador do Area de formação',
                date:'há 45 minutos',
                title: 'Lorem ipsum dolor',
                desc: 'Voluptatum, officiis fugiat expedita, excepturi non laudantium blanditiis praesentium voluptatibus maxime asperiores',
                likes: 201,
                comments: 110,
                downloads: 240,
                views: '+250 Vizualicações',
            },
            {
                category:"topic",
                disc:'trei',
                author:'Lucas Pazito',
                level:'Coordenador do Curso',
                date:'há 15 minutos',
                title: 'Inicio das Provas',
                desc: 'Aproveite as férias para preparar-se para as próximas provas. onsectetur adipiscing elit. Sed vel ipsum non risus bibendum porttitor. Aenean vel',
                likes: 301,
                comments: 105,
                downloads: 371,
                views: '+300 Vizualicações',
            },
            {
                category:"news",
                disc:'',
                author:'Olivia Matus',
                level:'Coordenador do Area de formação',
                date:'há 45 minutos',
                title: 'Lorem ipsum dolor',
                desc: 'Voluptatum, officiis fugiat expedita, excepturi non laudantium blanditiis praesentium voluptatibus maxime asperiores',
                likes: 201,
                comments: 110,
                downloads: 240,
                views: '+250 Vizualicações',
            },
            {
                category:"topic",
                disc:'trei',
                author:'Lucas Pazito',
                level:'Coordenador do Curso',
                date:'há 15 minutos',
                title: 'Inicio das Provas',
                desc: 'Aproveite as férias para preparar-se para as próximas provas. onsectetur adipiscing elit. Sed vel ipsum non risus bibendum porttitor. Aenean vel',
                likes: 301,
                comments: 105,
                downloads: 371,
                views: '+300 Vizualicações',
            },
            {
                category:"news",
                disc:'',
                author:'Olivia Matus',
                level:'Coordenador do Area de formação',
                date:'há 45 minutos',
                title: 'Lorem ipsum dolor',
                desc: 'Voluptatum, officiis fugiat expedita, excepturi non laudantium blanditiis praesentium voluptatibus maxime asperiores',
                likes: 201,
                comments: 110,
                downloads: 240,
                views: '+250 Vizualicações',
            },
        ]
    )    

    const { hailySchedule } = HailySchedule()

    return (
        <main className={`container ${stl.home_page}`}>
            
            <Col_Xl_3 className={stl.card_horary}>

                    <TitleDescLink
                        title={"Horário de Hoje"}
                        desc={"Veja o horário da sua Turma quais disciplinas terás hoje!"}
                        linkPath={"/class"}
                    />

                    {
                        
                        <Schedules
                            day={hailySchedule.day}
                            times={hailySchedule.times}
                        />
                    }

            </Col_Xl_3>

            <section className={stl.section_home_page}>

                <TitleAndDescription
                    title={"Blogs"}
                    desc={"Veja as últimas notícias sobre o IPIL"}
                />

                <CardSearch
                    placeholder={"Pesquisar blog..."}
                    sugest1={"Todos"}
                />

               {
                    blogs.map((blog) => {

                        return (
                            <CardBlog 
                                category={blog.category}
                                disc={blog.disc}
                                author={blog.author}
                                level={blog.level}
                                date={blog.date}
                                title={blog.title}
                                desc={blog.desc}
                                likes={blog.likes}
                                comments={blog.comments}
                                downloads={blog.downloads}
                                views={blog.views}
                            />
                        )
                    })
               }

            </section>

            <CardProfile />

        </main>
    )
}
