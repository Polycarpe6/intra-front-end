import React from 'react'
import stl from './home.module.css'
import { CardBlog, CardClasse, CardPeople, CardProfile, CardSearch, Col_Xl_3, TitleAndDescription, TitleDescLink, TitleNotFound } from '../../components'
import { UserContext } from '../../context';
import { getTeacher, getClasses, TurmaDisciplina } from '../../api/endpoints';
import { useUser } from '../../hooks/useUser';



export function Home() {

    const { data: { user }, dataStudent } = useUser()

    const [blogs, _] = React.useState(
        [
            {
                category: "topic",
                disc: 'trei',
                author: 'Lucas Pazito',
                level: 'Coordenador do Curso',
                date: 'há 15 minutos',
                title: 'Inicio das Provas',
                desc: 'Aproveite as férias para preparar-se para as próximas provas. onsectetur adipiscing elit. Sed vel ipsum non risus bibendum porttitor. Aenean vel',
                likes: 301,
                comments: 105,
                downloads: 371,
                views: '+300 Vizualicações',
            },
            {
                category: "news",
                disc: '',
                author: 'Olivia Matus',
                level: 'Coordenador do Area de formação',
                date: 'há 45 minutos',
                title: 'Lorem ipsum dolor',
                desc: 'Voluptatum, officiis fugiat expedita, excepturi non laudantium blanditiis praesentium voluptatibus maxime asperiores',
                likes: 201,
                comments: 110,
                downloads: 240,
                views: '+250 Vizualicações',
            },
            {
                category: "topic",
                disc: 'trei',
                author: 'Lucas Pazito',
                level: 'Coordenador do Curso',
                date: 'há 15 minutos',
                title: 'Inicio das Provas',
                desc: 'Aproveite as férias para preparar-se para as próximas provas. onsectetur adipiscing elit. Sed vel ipsum non risus bibendum porttitor. Aenean vel',
                likes: 301,
                comments: 105,
                downloads: 371,
                views: '+300 Vizualicações',
            },
            {
                category: "news",
                disc: '',
                author: 'Olivia Matus',
                level: 'Coordenador do Area de formação',
                date: 'há 45 minutos',
                title: 'Lorem ipsum dolor',
                desc: 'Voluptatum, officiis fugiat expedita, excepturi non laudantium blanditiis praesentium voluptatibus maxime asperiores',
                likes: 201,
                comments: 110,
                downloads: 240,
                views: '+250 Vizualicações',
            },
            {
                category: "topic",
                disc: 'trei',
                author: 'Lucas Pazito',
                level: 'Coordenador do Curso',
                date: 'há 15 minutos',
                title: 'Inicio das Provas',
                desc: 'Aproveite as férias para preparar-se para as próximas provas. onsectetur adipiscing elit. Sed vel ipsum non risus bibendum porttitor. Aenean vel',
                likes: 301,
                comments: 105,
                downloads: 371,
                views: '+300 Vizualicações',
            },
            {
                category: "news",
                disc: '',
                author: 'Olivia Matus',
                level: 'Coordenador do Area de formação',
                date: 'há 45 minutos',
                title: 'Lorem ipsum dolor',
                desc: 'Voluptatum, officiis fugiat expedita, excepturi non laudantium blanditiis praesentium voluptatibus maxime asperiores',
                likes: 201,
                comments: 110,
                downloads: 240,
                views: '+250 Vizualicações',
            },
        ]
    )

    const [listTeacher, setlistTeacher] = React.useState<any[]>([]);
    const [listClasse, setListClasse] = React.useState<any[]>([]);

    const getAllClasses = async () => {
        const teachers: any = await getTeacher();
        setlistTeacher(teachers);

        if (user.role === "teacher") {
            const classes: any = await getClasses();
            setListClasse(classes);
        }
    }

    React.useEffect(() => {
        getAllClasses();
    }, [])

    function getReducedHeight(data: TurmaDisciplina) {
        console.log(data);
        
        const values = data.testes.length > 0 ? data.testes.map((teste) => teste.peso) : [];
        const sum = data.testes.length > 0 ? values.reduce((a, b) => a + b, 0): 0;
        const average = data.testes.length > 0 ? (sum / values.length) : 0;
        console.log(average);
        return average.toFixed(2);
    }

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

                            {dataStudent && dataStudent?.matricula?.length > 0 && dataStudent?.matricula[0].turma.turmaDisciplinas.map((turmaDisciplina) => (
                                <div className={`${stl.card_note_home_page} anime-bottom`}>
                                    <strong>
                                        {turmaDisciplina.disciplina.nome}
                                    </strong>
                                    <div className={stl.card_note_home_page_content}>
                                        <h2>{getReducedHeight(turmaDisciplina)}</h2>
                                        <small>Nota Final</small>
                                    </div>
                                </div>
                            ))}
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


                {
                    (user.role === "admin") && (
                        <>

                            <TitleDescLink
                                title={"Professores"}
                                desc={"Veja alguns professores que foram registrado no sistema!!"}
                                linkPath={"/people"}
                            />

                            {
                                listTeacher.map((teacher: any, index: number) => {


                                    if (teacher.email !== "lucaspazito@gmail.com") {
                                        return (
                                            <CardPeople
                                                key={teacher.id}
                                                id={teacher.id}
                                                n_process={teacher.processNumber}
                                                name={teacher.nome}
                                                email={teacher.email}
                                            />
                                        )
                                    }


                                })


                                // listTeacher.map((teacher: any) => (
                                //     
                                // ))
                            }

                            {
                                ((listTeacher.length === 1) && (listTeacher[0].email === "lucaspazito@gmail.com")) && (
                                    <TitleNotFound
                                        title={"Apenas o administrador está registrado!"}
                                        desc={"Parece que não há professores registrados na plataforma."}
                                    />
                                )
                            }





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
