import React from 'react'
import { UserStorage, UserContext } from '../context'
import { Aside, Header, Processes } from '../components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClasseID, Classe, Discipline, Home, Login, Notification, People, Profile, Search, PageNotFound, Cursos } from '../pages'

export function AppRoute() {

    const user = React.useContext(UserContext)

    const [data, setData] = React.useState({
        token: true,
    })

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
                    <Route path="*" element={<PageNotFound />} />

                </Routes>
                <Processes />
            </UserStorage>
        </BrowserRouter>
    )

}