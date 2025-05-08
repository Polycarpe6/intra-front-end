import { Route, Routes } from 'react-router-dom'
import { PageNotFound, SignIn, Student, Teacher } from '../pages'

export function LoginRoute() {

    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="signup/student" element={<Student />}/>
            <Route path="signup/teacher/*" element={<Teacher />}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    )
}
