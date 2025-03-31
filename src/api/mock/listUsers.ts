import React from 'react';

export function ListUsers() {
    const [listUsers, setListUsers] = React.useState([
        {
            id: "12345678",
            n_processo: "68578",
            nome: "Gerson Ndombasi",
            email: "gersonndombasi@gmail.com",
            username: "gerson.intra@ipil",
            turma: "II10A",
            tipo: "Aluno"
        },
        {
            id: "22345678",
            nome: "Carlos Silva",
            email: "carlossilva@gmail.com",
            username: "carlos.prof@ipil",
            disciplina: "Matemática",
            tipo: "Professor"
        },
        {
            id: "12345679",
            n_processo: "68579",
            nome: "Osvaldo João",
            email: "osvaldojoao@gmail.com",
            username: "osvaldo.intra@ipil",
            turma: "IG11B",
            tipo: "Aluno"
        },
        {
            id: "22345679",
            nome: "Ana Ferreira",
            email: "anaferreira@gmail.com",
            username: "ana.prof@ipil",
            disciplina: "Português",
            tipo: "Professor"
        },
        {
            id: "12345680",
            n_processo: "68580",
            nome: "Maria Lopes",
            email: "marialopes@gmail.com",
            username: "maria.intra@ipil",
            turma: "II12B",
            tipo: "Aluno"
        },
        {
            id: "22345680",
            nome: "Rafael Souza",
            email: "rafaelsouza@gmail.com",
            username: "rafael.prof@ipil",
            disciplina: "História",
            tipo: "Professor"
        },
        {
            id: "12345681",
            n_processo: "68581",
            nome: "José Tiago",
            email: "josetiago@gmail.com",
            username: "jose.intra@ipil",
            turma: "II10A",
            tipo: "Aluno"
        },
        {
            id: "22345681",
            nome: "Juliana Costa",
            email: "julianacosta@gmail.com",
            username: "juliana.prof@ipil",
            disciplina: "Física",
            tipo: "Professor"
        },
        {
            id: "12345682",
            n_processo: "68582",
            nome: "Lucas Paulo",
            email: "lucaspaulo@gmail.com",
            username: "lucas.intra@ipil",
            turma: "IG11B",
            tipo: "Aluno"
        },
        {
            id: "22345682",
            nome: "Marcos Oliveira",
            email: "marcosoliveira@gmail.com",
            username: "marcos.prof@ipil",
            disciplina: "Química",
            tipo: "Professor"
        },
        {
            id: "12345683",
            n_processo: "68583",
            nome: "Fernando Almeida",
            email: "fernandoalmeida@gmail.com",
            username: "fernando.intra@ipil",
            turma: "II12B",
            tipo: "Aluno"
        },
        {
            id: "22345683",
            nome: "Patrícia Mendes",
            email: "patriciamendes@gmail.com",
            username: "patricia.prof@ipil",
            disciplina: "Biologia",
            tipo: "Professor"
        },
        {
            id: "12345684",
            n_processo: "68584",
            nome: "Sara Neves",
            email: "saraneves@gmail.com",
            username: "sara.intra@ipil",
            turma: "II10A",
            tipo: "Aluno"
        },
        {
            id: "22345684",
            nome: "Ricardo Soares",
            email: "ricardosoares@gmail.com",
            username: "ricardo.prof@ipil",
            disciplina: "Geografia",
            tipo: "Professor"
        },
        {
            id: "12345685",
            n_processo: "68585",
            nome: "Bruno Castro",
            email: "brunocastro@gmail.com",
            username: "bruno.intra@ipil",
            turma: "IG11B",
            tipo: "Aluno"
        },
        {
            id: "22345685",
            nome: "Camila Moreira",
            email: "camilamoreira@gmail.com",
            username: "camila.prof@ipil",
            disciplina: "Educação Física",
            tipo: "Professor"
        },
        {
            id: "12345686",
            n_processo: "68586",
            nome: "Joana Pereira",
            email: "joanapereira@gmail.com",
            username: "joana.intra@ipil",
            turma: "II12B",
            tipo: "Aluno"
        },
        {
            id: "22345686",
            nome: "André Nogueira",
            email: "andrenogueira@gmail.com",
            username: "andre.prof@ipil",
            disciplina: "Filosofia",
            tipo: "Professor"
        },
        {
            id: "12345687",
            n_processo: "68587",
            nome: "Daniel Lopes",
            email: "daniellopes@gmail.com",
            username: "daniel.intra@ipil",
            turma: "II10A",
            tipo: "Aluno"
        },
        {
            id: "22345687",
            nome: "Beatriz Oliveira",
            email: "beatrizoliveira@gmail.com",
            username: "beatriz.prof@ipil",
            disciplina: "Sociologia",
            tipo: "Professor"
        }
    ]);

    return {
        listUsers,
    };
}
