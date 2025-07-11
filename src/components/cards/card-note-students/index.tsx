import React, { useState, useEffect } from 'react';
import stl from './card-note-students.module.css';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { InputNote } from '../../inputs';
import { AlunoComMatriculaETestes } from '../../../pages';
import { ModalMiniPauta } from '../../modals';

export function CardNoteStudent({
    props,
    index,
    discipline
}: {
    props: AlunoComMatriculaETestes;
    index: number;
    discipline: number  | null;

}) {
    const [open, setOpen] = useState('');
    const toggle = (id: any) => setOpen(open === id ? '' : id);

    const [isSaving, setIsSaving] = useState(false);
    const [modalShowMinipauta, setModalShowMinipauta] = useState(false);

    const [notes, setNotes] = useState({
        pp1: props.testes.find(t => t.tipo === 'pp1')?.peso || 0,
        pp2: props.testes.find(t => t.tipo === 'pp2')?.peso || 0,
        pp3: props.testes.find(t => t.tipo === 'pp3')?.peso || 0,
        ids: {
            pp1: props.testes.find(t => t.tipo === 'pp1')?.id,
            pp2: props.testes.find(t => t.tipo === 'pp2')?.id,
            pp3: props.testes.find(t => t.tipo === 'pp3')?.id,
        }
    });

    const mt1 = parseFloat(((notes.pp1 + notes.pp2 + notes.pp3) / 3).toFixed(2));

    const validate = (value: number): number => {
        return value >= 0 && value <= 20 ? value : 0;
    };

    async function salvarNota(tipo: 'pp1' | 'pp2' | 'pp3', peso: number) {
        if (peso < 0 || peso > 20) return;

        const testeId = notes.ids[tipo];
        const body = {
            turma_disciplina_id: discipline,
            trimestre_id: 1,
            tipo,
            peso,
            alunoId: props.id
        };

        console.log(body);


        try {
            setIsSaving(true);

            const res = await fetch(
                `https://school.baikasaude.click/testes${testeId ? `/${testeId}` : ''}`,
                {
                    method: testeId ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('INTRADB') ?? '')?.token}`
                    },
                    body: JSON.stringify(body)
                }
            );

            if (!res.ok) throw new Error('Erro ao salvar nota');

            const result = await res.json();

            setNotes(prev => ({
                ...prev,
                ids: {
                    ...prev.ids,
                    [tipo]: result.id
                }
            }));
        } catch (err) {
            console.error(`Erro ao salvar nota ${tipo}:`, err);
        } finally {
            setIsSaving(false);
        }
    }

    async function saveAllNotas() {
        setIsSaving(true);

        const resultados = await Promise.all([
            salvarNota('pp1', notes.pp1),
            salvarNota('pp2', notes.pp2),
            salvarNota('pp3', notes.pp3)
        ]);

        setIsSaving(false);
    }

    return (
        <>
            <Accordion flush open={open} toggle={toggle} className={stl.card_note_students}>
                <AccordionItem className={stl.item}>
                    <AccordionHeader targetId="1" className={stl.head}>
                        <div className={stl.number}><strong>Nº</strong><span>{index}</span></div>
                        <div className={stl.n_process}><strong>Nº Proces</strong><span>{props.processNumber}</span></div>
                        <div className={stl.fullname}><strong>Nome completo</strong><span>{props.nome}</span></div>
                    </AccordionHeader>
                    <AccordionBody accordionId="1" className={stl.body}>
                        <div className={stl.card_notes_header}>
                            <span>Notas</span>
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={() => setModalShowMinipauta(true)}
                            >
                                Lançar Nota
                            </button>
                        </div>
                        <div className={stl.card_notes_values}>
                            <InputNote
                                placeholder="PP1"
                                value={notes.pp1}
                                onChange={(e) =>
                                    setNotes(prev => ({ ...prev, pp1: validate(Number(e.target.value)) }))
                                }
                                onBlur={() => salvarNota('pp1', notes.pp1)}
                            />
                            <InputNote
                                placeholder="PP2"
                                value={notes.pp2}
                                onChange={(e) =>
                                    setNotes(prev => ({ ...prev, pp2: validate(Number(e.target.value)) }))
                                }
                                onBlur={() => salvarNota('pp2', notes.pp2)}
                            />
                            <InputNote
                                placeholder="PP3"
                                value={notes.pp3}
                                onChange={(e) =>
                                    setNotes(prev => ({ ...prev, pp3: validate(Number(e.target.value)) }))
                                }
                                onBlur={() => salvarNota('pp3', notes.pp3)}
                            />
                            <InputNote
                                placeholder="MT1"
                                value={mt1}
                                disabled
                            />
                        </div>

                        {isSaving && <small className={stl.saving}>Salvando notas...</small>}

                        {modalShowMinipauta && (
                            <ModalMiniPauta
                                show={modalShowMinipauta}
                                onHide={() => setModalShowMinipauta(false)}
                                alunoId={props.id}
                                discipline={discipline}
                            />
                        )}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </>
    );
}
