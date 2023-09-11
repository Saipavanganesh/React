import React, { useEffect, useState } from 'react';
import { MiniDrawer } from './FundooAppBar';
import Takenote1 from './Takenote1';
import Takenote2 from './Takenote2';
import TakeNote3 from './Takenote3';
import { getNotes } from '../services/NoteServices';

function Dashboard() {
    const [notesInput, setNotesInput] = useState(true)
    const [notes, setNotes] = useState([])

    const getAllNotes = async () => {
        let response = await getNotes();
        console.log(response.data.data);
        setNotes(response.data.data)
    }

    useEffect(() => {
        getAllNotes()
    }, [])




    return (
        <div>
            <MiniDrawer />
            {
                notesInput ? <Takenote1 setNotesInput={setNotesInput} /> : <Takenote2 setNotesInput={setNotesInput} />
            }
            {notes.map((n) => 
                <TakeNote3 n={n}/>
            )}

        </div>
    )
}
export default Dashboard;