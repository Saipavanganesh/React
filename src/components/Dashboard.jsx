import React, { useEffect, useState } from 'react';
import { MiniDrawer } from './FundooAppBar';
import Takenote1 from './Takenote1';
import Takenote2 from './Takenote2';
import TakeNote3 from './Takenote3';
import { getNotes } from '../services/NoteServices';

function Dashboard() {
    const [notesInput, setNotesInput] = useState(true)
    const [notes, setNotes] = useState([])
    const [notesType, setNotesType] = useState("Notes");
    
    const getAllNotes = async () => {
        let response = await getNotes();
        console.log(response.data.data);
        let arr= response.data.data;
        
        if (notesType === "Notes"){
            let notesArr = arr.filter((n) => n.isArchive === false && n.isTrash === false)
            setNotes(notesArr);
        }
        else if (notesType === "Archive"){
            let archiveArr = arr.filter((n) => n.isArchive === true && n.isTrash === false)
            setNotes(archiveArr);
        }
        else{
            let trashArr = arr.filter((n) => n.isArchive === false && n.isTrash === true)
            setNotes(trashArr);
        }
    }

    useEffect(() => {
        getAllNotes()
    }, [notesType])

    return (
        <div>
            <MiniDrawer setNotesType={setNotesType}/>
            {
                notesInput ? <Takenote1 setNotesInput={setNotesInput} /> : <Takenote2 setNotesInput={setNotesInput} getAllNotes={getAllNotes}/>
            }
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
            {notes.map((info) => 
                <TakeNote3 info={info} getAllNotes={getAllNotes}/>
            )}
            </div>

        </div>
    )
}
export default Dashboard;