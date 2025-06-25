import React, { useState } from 'react';
import stl from './card-note-students.module.css';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { InputNote } from '../../inputs';

export function CardNoteStudent(props: any) {

    const [open, setOpen] = useState('');

    const toggle = (id: any) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    const [notes, setNotes] = useState({
        faltas: '',
        pp1: '',
        pp2: '',
        pp3: '',
        mt1: '',
    });

    function calNote() {
        if (parseFloat(notes.faltas) < 0 || parseFloat(notes.faltas) > 30) 
            return setNotes({ ...notes, faltas: '' });
        
        if (parseFloat(notes.pp1) < 0 || parseFloat(notes.pp1) > 20) 
            return setNotes({ ...notes, pp1: '' });

        if (parseFloat(notes.pp2) < 0 || parseFloat(notes.pp2) > 20) 
            return setNotes({ ...notes, pp2: '' });

        if (parseFloat(notes.pp3) < 0 || parseFloat(notes.pp3) > 20) 
            return setNotes({ ...notes, pp3: '' });

        if (notes.pp1 && notes.pp2 && notes.pp3) {
            const total = parseFloat(notes.pp1) + parseFloat(notes.pp2) + parseFloat(notes.pp3);
            const media = total / 3;
            setNotes({ ...notes, mt1: media.toFixed(2) });
        } else {
            setNotes({ ...notes, mt1: '' });
        }

        console.log(notes)
    }

    return (
        <Accordion flush open={open} toggle={toggle} className={stl.card_note_students} >
            <AccordionItem className={stl.item}>
                <AccordionHeader targetId="1" className={stl.head}>
                    <div className={stl.number}>
                        <strong>Nº</strong>
                        <span>01</span>
                    </div>
                    <div className={stl.n_process}>
                        <strong>Nº Proces</strong>
                        <span>53425</span>
                    </div>
                    <div className={stl.fullname}>
                        <strong>Nome completo</strong>
                        <span>Leonardo Kamuanta Mbuxi</span>
                    </div>
                    <div className={stl.gender}>
                        <strong>Genero</strong>
                        <span>Masculino</span>
                    </div>
                </AccordionHeader>
                <AccordionBody accordionId="1" className={stl.body}>
                    <div className={stl.card_notes}>
                        <InputNote
                            placeholder={"Nº Faltas"}
                            value={notes.faltas}
                            onChange={(e) => setNotes({ ...notes, faltas: e.target.value })}
                            onBlur={() => calNote()}
                        />
                        <InputNote
                            placeholder={"PP1"}
                            value={notes.pp1}
                            onChange={(e) => setNotes({ ...notes, pp1: e.target.value })}
                            onBlur={() => calNote()}
                        />
                        <InputNote
                            placeholder={"PP2"}
                            value={notes.pp2}
                            onChange={(e) => setNotes({ ...notes, pp2: e.target.value })}
                            onBlur={() => calNote()}
                        />
                        <InputNote
                            placeholder={"PP3"}
                            value={notes.pp3}
                            onChange={(e) => setNotes({ ...notes, pp3: e.target.value })}
                            onBlur={() => calNote()}
                        />
                        <InputNote
                            placeholder={"MT1"}
                            value={notes.mt1}
                            disabled={true}
                        />
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
}