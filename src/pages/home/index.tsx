import React from 'react'
import stl from './home.module.css'
import { HailySchedule } from '../../api/mock'
import { CardBlog, CardClasse, CardProfile, CardSearch, Col_Xl_3, Footer, Schedules, TitleAndDescription, TitleDescLink } from '../../components'
import { UserContext } from '../../context';
import { getClasses } from '../../api/endpoints';



export function Home() {

    const { user } = React.useContext(UserContext);

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

    const [listClasse, setlistClasse] = React.useState([]);
            
    const getAllClasses = async () => {
        const classes: any = await getClasses();
        setlistClasse(classes);
    }
    
    React.useEffect(() => {
        getAllClasses();
    }, [])

    return (
        <main className={`container ${stl.home_page}`}>
            
            <Col_Xl_3 className={stl.card_horary}>

                {
                    (user.role === "student") && (
                        <>
                            <TitleDescLink
                                title={"Minhas Notas"}
                                desc={"Veja suas notas e aproveite para estudar mais!"}
                                linkPath={"/profile"}
                            />

                            <div className={`${stl.card_note_home_page} anime-bottom`}>

                                <strong>
                                    Tic
                                </strong>

                                <div className={stl.card_note_home_page_content}>
                                    <h2>8.5</h2>
                                    <small>Nota Final</small>
                                </div>

                            </div>


                            <div className={`${stl.card_note_home_page} anime-bottom`}>

                                <strong>
                                    Ogi
                                </strong>

                                <div className={stl.card_note_home_page_content}>
                                    <h2>14.5</h2>
                                    <small>Nota Final</small>
                                </div>

                            </div>

                            <div className={`${stl.card_note_home_page} anime-bottom`}>

                                <strong>
                                    Dt
                                </strong>

                                <div className={stl.card_note_home_page_content}>
                                    <h2>17</h2>
                                    <small>Nota Final</small>
                                </div>

                            </div>

                            <div className={`${stl.card_note_home_page} anime-bottom`}>

                                <strong>
                                    Seac
                                </strong>

                                <div className={stl.card_note_home_page_content}>
                                    <h2>13</h2>
                                    <small>Nota Final</small>
                                </div>

                            </div>

                            <div className={`${stl.card_note_home_page} anime-bottom`}>

                                <strong>
                                    TRei
                                </strong>

                                <div className={stl.card_note_home_page_content}>
                                    <h2>11</h2>
                                    <small>Nota Final</small>
                                </div>

                            </div>

                        </>
                    )
                }


                {
                    (user.role === "teacher") && (
                        <>
                        
                            <TitleDescLink
                                title={"Minhas Turmas"}
                                desc={"Veja suas turmas e aproveite para acompanhar por mais perto!!"}
                                linkPath={"/classe"}
                            />


                            {listClasse.map((classe: any) => (
                                <CardClasse
                                    key={classe.id}
                                    id={classe.id}
                                    name={classe.nome}
                                    year={classe.ano}
                                />
                            ))}
                            
                            
                        </>
                    )
                }
            
                

                    

            </Col_Xl_3>

            <section className={stl.section_home_page}>

                <TitleAndDescription
                    title={"Blogs"}
                    desc={"Veja as últimas notícias sobre o IPIL"}
                />

                <CardSearch
                    placeholder={"Pesquisar blog..."}
                    btnCreateBlog={true}
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

               {
                    blogs.length === 0 && (
                        <div className={stl.no_blogs}>
                            <h2>Nenhum blog encontrado</h2>
                            <p>Crie o primeiro blog!</p>
                        </div>
                    )
               }


            </section>

            <CardProfile />

        </main>
    )
}
