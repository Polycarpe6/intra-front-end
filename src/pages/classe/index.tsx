import stl from './classe.module.css';
import React, { useEffect, useState } from 'react';
import { getClasses } from '../../api/endpoints';
import {
  CardProfile,
  CardSearch,
  CardClasse,
  TitleAndDescription,
  TitleNotFound,
} from '../../components';
import { useUser } from '../../hooks/useUser';

export function Classe() {
  const [listClasse, setListClasse] = useState<any[]>([]);
  const { dataTeacher, data: { user } } = useUser();

  useEffect(() => {
    const getAllClasses = async () => {
      const classes = await getClasses();
      if (classes) setListClasse(classes);
    };

    getAllClasses();
  }, []);

  // Filtro para professores
  const classesToRender = user.role === 'teacher'
    ? listClasse.filter(classe =>
        dataTeacher?.turmas?.some((turma: any) => turma.id === classe.id)
      )
    : listClasse;

  return (
    <main className={`container ${stl.classes_page}`}>
      <section className={stl.section_content_classes}>
        <TitleAndDescription
          title="Classes & Turmas"
          desc="Aqui você pode ver todas as turmas e classes que estão disponíveis no sistema."
        />

        <CardSearch
          placeholder="Pesquisar turma ou classes..."
          btnAddClassT={true}
        />

        <div className={stl.list_class}>
          {classesToRender.length > 0 ? (
            classesToRender.map((classe: any) => (
              <CardClasse
                key={classe.id}
                id={classe.id}
                name={classe.nome}
                year={classe.ano}
              />
            ))
          ) : (
            <TitleNotFound
              title="Nenhuma turma ou classe encontrada!"
              desc="Parece que não há turmas ou classes cadastradas no sistema. Você pode criar uma nova turma ou classe clicando no botão 'Adicionar Turma'."
            />
          )}
        </div>
      </section>

      <CardProfile />
    </main>
  );
}
