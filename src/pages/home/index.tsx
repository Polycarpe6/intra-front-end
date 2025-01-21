import React from 'react'
import stl from './home.module.css'
import { CardBlog, CardProfile, CardSearch, Col_Xl_3, Horary, TitleDescLink } from '../../components'



export function Home() {

    const [blogs, setBlogs] = React.useState([
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
    ])

    const [horary, setHorary] = React.useState({
        day: "6ª feira",
        horary: [
            {
                time: {
                    init: "00h:00", 
                    end: "00h:00"
                }, 
                disc: "Nome da disciplina", 
                state: false
            },
            {
                time: {
                    init: "00h:00", 
                    end: "00h:00"
                }, 
                disc: "Nome da disciplina", 
                state: false
            },
            {
                time: {
                    init: "00h:00", 
                    end: "00h:00"
                }, 
                disc: "Nome da disciplina", 
                state: true
            },
            {
                time: {
                    init: "00h:00", 
                    end: "00h:00"
                }, 
                disc: "Nome da disciplina", 
                state: false
            },
            {
                time: {
                    init: "00h:00", 
                    end: "00h:00"
                }, 
                disc: "Nome da disciplina", 
                state: false
            },
            {
                time: {
                    init: "00h:00", 
                    end: "00h:00"
                }, 
                disc: "Nome da disciplina", 
                state: false
            },

        ]
    })

    return (
        <main className={`container ${stl.home_page}`}>
            
            <Col_Xl_3>
                <div className={stl.card_horary}>
                    <TitleDescLink
                        title={"Horário"}
                        desc={"Veja o horário do IPIL"}
                        linkPath={"/horario"}
                    />

                    <Horary 
                        day={horary.day}
                        horaryClass={horary.horary}
                    />
                </div>
            </Col_Xl_3>

            <section className={stl.section_home_page}>

                <TitleDescLink
                    title={"Blogs"}
                    desc={"Veja as últimas notícias sobre o IPIL"}
                    linkPath={"/blogs"}
                />

                <CardSearch
                    placeholder={"Pesquisar blog..."}
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
