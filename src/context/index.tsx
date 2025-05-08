import { dataTool } from 'echarts'
import React from 'react'

export const UserContext = React.createContext(
    {
        user: {},
        setUser: {}
    }
)

export function UserStorage({ children }: any) {

    const [user, setUser] = React.useState(
        {
            name: "Lucas",
            email: "lucas@example.com",
            role: "student",
            id: 1,
            token: true,
        }
    )

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}