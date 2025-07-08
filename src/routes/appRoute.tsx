import React, { useContext } from 'react'
import { UserContext, UserStorage } from '../context'
import { Alert, Aside, Header, Processes } from '../components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClasseID, Classe, Discipline, Home, Login, Notification, People, Profile, Search, PageNotFound, Cursos, Trimestre } from '../pages'



export function AppRoute() {

    const { data } = useContext(UserContext);

    console.log(data);
    


    if (!data.token)
        return (
            <BrowserRouter>
                <UserStorage>
                    <Routes>
                        <Route path="/*" element={<Login />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </UserStorage>
            </BrowserRouter>
        )

    return (
        <BrowserRouter>
            <UserStorage>
                <Header />
                <Aside />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/classe/:id" element={<ClasseID />} />
                    <Route path="/classe" element={<Classe />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/discipline" element={<Discipline />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/trimestre" element={<Trimestre />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                

                <Processes />

            </UserStorage>
        </BrowserRouter>
    )

}