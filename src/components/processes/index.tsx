import React, { useState } from 'react';
import stl from './processes.module.css';
import { BsFeather } from 'react-icons/bs';
import { TitleAndDescription } from '../titles' 
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';


export function Processes() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${stl.processes} anime-move-my-cart`}
        onClick={toggleOffcanvas}
      >
        <BsFeather />
      </button>

      <Offcanvas 
            isOpen={isOpen} 
            toggle={toggleOffcanvas}
            direction={"end"}
            className={stl.offcanvasNotasStudent}
        >

        <div className={stl.head}>
            
           <strong className="anime-left">
             🎓 Bem-vindo ao INTRA – Sistema de Gestão Acadêmica do IPIL
           </strong>

            {/*<OffcanvasHeader 
                toggle={toggleOffcanvas}
                className="anime-left"
            ></OffcanvasHeader>*/}

        </div>

        <div className={stl.body}>

          <p className={`${stl.about} anime-left`}>
            O INTRA (Interface de Navegação e Tratamento de Registos Acadêmicos) é um sistema web desenvolvido com o objetivo de modernizar a gestão acadêmica do Instituto Politécnico Industrial de Luanda (IPIL). Através desta plataforma, professores, alunos e gestores têm acesso centralizado e seguro a todas as informações escolares essenciais, promovendo mais eficiência, transparência e organização.
          </p>


          <dl>
            
            <dt className="anime-left">Principais Objetivos do Sistema</dt>
            <dd className="anime-left">-- Automatizar o lançamento e consulta de notas;</dd>
            <dd className="anime-left">-- Controlar presença e frequência dos alunos;</dd>
            <dd className="anime-left">-- Gerar boletins, pautas e relatórios de forma rápida;</dd>
            <dd className="anime-left">-- Facilitar a comunicação institucional;</dd>
            <dd className="anime-left">-- Reduzir o uso de papel e processos manuais.</dd>

          </dl>

          <hr />

           <dl>
            
            <dt className="anime-left">Tecnologias Utilizadas</dt>
            <small>O INTRA foi desenvolvido com tecnologias modernas e de código aberto:</small>
            <dd className="anime-left">## Frontend: React.js + Bootstrap</dd>
            <dd className="anime-left">## Backend: Node.js + TypeScript + Express</dd>
            <dd className="anime-left">## Banco de dados: MySQL + Prisma ORM</dd>
            <dd className="anime-left">## Outras ferramentas: GitHub, Postman, Swagger</dd>

          </dl>

          <hr />

           <dl>
            
            <dt className="anime-left">Perfis de Usuário</dt>
            
            <dd className="anime-left"> -- Aluno: Consulta notas, frequência e boletins</dd>
            <dd className="anime-left"> -- Professor: Lança notas, regista presenças, visualiza turmas</dd>
            <dd className="anime-left"> -- Administrador: Gerencia usuários, cursos, turmas, disciplinas e relatórios</dd>

          </dl>

          <hr />

           <dl>
            
            <dt className="anime-left">Benefícios para a Instituição</dt>
            
            <dd className="anime-left">## Melhoria na gestão dos dados escolares</dd>
            <dd className="anime-left">## Redução de erros e perda de informações</dd>
            <dd className="anime-left">## Acesso remoto às informações</dd>
            <dd className="anime-left">## Otimização da rotina dos professores e da administração</dd>
            <dd className="anime-left">## Preparação da escola para o futuro digital</dd>

          </dl>

          <hr />

           <dl>
            
            <dt className="anime-left">Desenvolvido por:</dt>

            <small>-- Leonardo Mbuxi</small>
            <dd className="anime-left">ºº Estudante do curso Técnico de Informática – IPIL</dd>
            

          </dl>
          
        </div>

        

      </Offcanvas>
    </>
  );
}
