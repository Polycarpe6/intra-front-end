import { dataTool } from 'echarts'
import React from 'react'

export const UserContext = React.createContext(
    {
        user: {},
    }
)

export function UserStorage({ children }: any) {

    const [user, setUser] = React.useState(
        {
            name: "Lucas",
            email: "lucas@example.com",
            role: "teacher",
            id: 1,
            token: false,
        }
    )

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}