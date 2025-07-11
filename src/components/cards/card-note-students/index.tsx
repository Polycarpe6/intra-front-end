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

export function CardNoteStudent({ props, index, discipline }: { props: AlunoComMatriculaETestes, index: number, discipline: number | null }) {
    const [open, setOpen] = useState('');
    const toggle = (id: any) => setOpen(open === id ? '' : id);

    if (!discipline) return null;

    const [notes, setNotes] = useState({
        pp1: props.testes.find(t => t.tipo === 'pp1')?.peso || 0,
        pp2: props.testes.find(t => t.tipo === 'pp2')?.peso || 0,
        pp3: props.testes.find(t => t.tipo === 'pp3')?.peso || 0,
        mt1: 0
    });

    const [isSaving, setIsSaving] = useState(false);

    // Atualiza MT1 sempre que notas mudam
    useEffect(() => {
        setNotes(prev => ({
            ...prev,
            mt1: parseFloat(((prev.pp1 + prev.pp2 + prev.pp3) / 3).toFixed(2))
        }));
    }, [notes.pp1, notes.pp2, notes.pp3]);

    const validate = (value: number): number => {
        if (value < 0 || value > 20) return 0;
        return value;
    };

    async function salvarNota(tipo: string, peso: number) {
        const body = {
            turma_disciplina_id: discipline,
            trimestre_id: 2,
            tipo,
            data: new Date(),
            peso,
            alunoId: props.id
        };

        try {
            const res = await fetch('https://school.baikasaude.click/testes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('INTRADB') ?? "")?.token}`
                },
                body: JSON.stringify(body)
            });

            if (!res.ok) throw new Error('Erro ao salvar nota');
        } catch (err) {
            console.error(`Erro ao salvar ${tipo}:`, err);
        }
    }

    async function saveAllNotas() {
        setIsSaving(true);
        
        await Promise.all([
            salvarNota('pp1', notes.pp1),
            salvarNota('pp2', notes.pp2),
            salvarNota('pp3', notes.pp3)
        ]);

        setIsSaving(false);
    }

    const [modalShowMinipauta, setModalShowMinipauta] = React.useState(false)

    return (
        <Accordion flush open={open} toggle={toggle} className={stl.card_note_students}>
            <AccordionItem className={stl.item} onMouseLeave={saveAllNotas}>
                <AccordionHeader targetId="1" className={stl.head}>
                    <div className={stl.number}><strong>Nº</strong><span>{index}</span></div>
                    <div className={stl.n_process}><strong>Nº Proces</strong><span>{props.processNumber}</span></div>
                    <div className={stl.fullname}><strong>Nome completo</strong><span>{props.nome}</span></div>
                </AccordionHeader>
                <AccordionBody accordionId="1" className={stl.body}>
                    <div className={stl.card_notes}>
                        <InputNote
                            placeholder="PP1"
                            value={notes.pp1}
                            onChange={(e) => setNotes(prev => ({ ...prev, pp1: validate(Number(e.target.value)) }))}
                        />
                        <InputNote
                            placeholder="PP2"
                            value={notes.pp2}
                            onChange={(e) => setNotes(prev => ({ ...prev, pp2: validate(Number(e.target.value)) }))}
                        />
                        <InputNote
                            placeholder="PP3"
                            value={notes.pp3}
                            onChange={(e) => setNotes(prev => ({ ...prev, pp3: validate(Number(e.target.value)) }))}
                        />
                        <InputNote
                            placeholder="MT1"
                            value={notes.mt1}
                            disabled
                        />
                        {isSaving && <small className={stl.saving}>Salvando...</small>}

                        <button
                            onClick={() => setModalShowMinipauta(true)}
                        >
                            Editar
                        </button>

                        <ModalMiniPauta
                            show={modalShowMinipauta}
                            onHide={() => setModalShowMinipauta(false)}
                        />
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
}
