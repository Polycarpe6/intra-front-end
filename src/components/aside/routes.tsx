import { 
    BsAward,
    BsBarChart, BsBell, BsBookHalf, 
    BsBookmark, 
    BsHouse, BsMortarboard, BsPeople, BsSearch 
} from 'react-icons/bs';

interface IRoutes {
    path: string;
    icon: React.ReactNode; 
    label: string;
}

export const adminRoutes: IRoutes[] = [
    { path: "/", icon: <BsHouse />, label: "Início" },
    { path: "/search", icon: <BsSearch />, label: "Explore" }, 
    { path: "/people", icon: <BsPeople />, label: "Membros" },
    { path: "/classe", icon: <BsMortarboard />, label: "Turmas" },
    { path: "/trimestre", icon: <BsAward />, label: "Trimestre" },
    { path: "/discipline", icon: <BsBookHalf />, label: "Disciplinas" },
    // { path: "/chart", icon: <BsBarChart />, label: "Estatísticas" },
    { path: "/cursos", icon: <BsBookmark />, label: "Cursos" }
];

export const teacherRoutes: IRoutes[] = [
    { path: "/", icon: <BsHouse />, label: "Início" },
    { path: "/search", icon: <BsSearch />, label: "Explore" },
    { path: "/people", icon: <BsPeople />, label: "Membros" },
    { path: "/classe", icon: <BsMortarboard />, label: "Turmas" },
    { path: "/notification", icon: <BsBell />, label: "Novidades" },
    // { path: "/discipline", icon: <BsBookHalf />, label: "Disciplinas" },
    // { path: "/chart", icon: <BsBarChart />, label: "Estatísticas" },
    // { path: "/cursos", icon: <BsBookmark />, label: "Cursos" }

];

export const studentRoutes: (id: number) => IRoutes[] = (id) => [
    { path: "/", icon: <BsHouse />, label: "Início" },
    { path: "/search", icon: <BsSearch />, label: "Explore" },
    { path: "/classe/"+id, icon: <BsMortarboard />, label: "Turma" },
    { path: "/notification", icon: <BsBell />, label: "Novidades" }
];
