import React, { createContext, useState, useEffect } from 'react';

// 1. Tipagem do user interno
type InnerUserType = {
  id: number;
  nome: string;
  email: string;
  role: string;
  createdAt: string;
  authId: string;
};

// 2. Tipagem do contexto
type UserContextData = {
  token: string;
  user: InnerUserType;
};

type UserContextType = {
  data: UserContextData;
  setData: React.Dispatch<React.SetStateAction<UserContextData>>;
};

// 3. Valor padrão (INTRADB)
const INTRADB: UserContextData = {
  token: '',
  user: {
    id: 0,
    nome: '',
    email: '',
    role: '',
    createdAt: '',
    authId: '',
  },
};

// 4. Criação do contexto
export const UserContext = createContext<UserContextType>({
  data: INTRADB,
  setData: () => {},
});

// 5. Provider do contexto
export function UserStorage({ children }: { children: React.ReactNode }) {

  const [data, setData] = useState<UserContextData>(() => {
    const saved = localStorage.getItem('INTRADB');
    return saved ? JSON.parse(saved) : INTRADB;
  });

  // Sincroniza com o localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('INTRADB', JSON.stringify(data));
  }, [data]);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
}
