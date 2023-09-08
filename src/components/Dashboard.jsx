import React, {useState} from 'react';
import { MiniDrawer } from './FundooAppBar';
import Takenote1 from './Takenote1';
import Takenote2 from './Takenote2';


function Dashboard(){
    const [notesInput, setNotesInput] = useState(true)
    return(
        <div>
            <MiniDrawer/>
            {
                notesInput ? <Takenote1 setNotesInput={setNotesInput}/> : <Takenote2 setNotesInput={setNotesInput}/>
            }
        </div>
    )
}
export default Dashboard;