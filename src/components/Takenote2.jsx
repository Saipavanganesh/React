import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
//Icons
import PinIcon from '@mui/icons-material/PushPinOutlined';
import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/UTurnLeftOutlined';
import RedoIcon from '@mui/icons-material/UTurnRightOutlined';
import { createNotes, getNotes } from '../services/NoteServices';
import TakeNote3 from './Takenote3';
// import './Takenote2.css';


export default function SimplePaper({ setNotesInput }) {
    const handleClick = async () => {
        setNotesInput((prev) => !prev)
        console.log(notes);
        if (notes != null && notes.Title!= "") {
            let response = await createNotes(notes);
            console.log(response);
        }
    }

    const [notes, setNotes] = useState({
        Title: "",
        Description: "",
    });

    let name, desc;
    const handleNotesInput = (e) => {
        name = e.target.name;
        desc = e.target.value;
        setNotes({ ...notes, [name]: desc });
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 600,
                },
            }}
        >
            <Paper elevation={3}>
                <Box>
                    <TextField id="standard-basic" placeholder='Title' multiline maxRows={Infinity} variant="standard" InputProps={{ disableUnderline: true }} style={{ margin: '1ch', width: 530 }} name="Title" onChange={handleNotesInput} value={notes.Title} />


                    <IconButton>
                        <PinIcon style={{
                            marginTop: "1ch"
                        }} />
                    </IconButton>

                    <TextField id="standard-basic" placeholder='Take a note...' multiline maxRows={Infinity} variant="standard" InputProps={{ disableUnderline: true }} style={{ margin: '1ch', width: 580 }} name="Description" onChange={handleNotesInput} value={notes.Description} />

                    <IconButton>
                        <RemindMeIcon style={{
                            width: 17,
                            marginLeft: "2ch",
                        }} />
                    </IconButton>

                    <IconButton>
                        <CollaboratorIcon style={{
                            width: 17,
                            marginLeft: "1ch",
                        }} />
                    </IconButton>

                    <IconButton>
                        <ColorChangeIcon style={{
                            width: 17,
                            marginLeft: "1ch",
                        }} />
                    </IconButton>

                    <IconButton>
                        <ImageIcon style={{
                            width: 17,
                            marginLeft: "1ch",
                        }} />
                    </IconButton>

                    <IconButton>
                        <ArchiveIcon style={{
                            width: 17,
                            marginLeft: "1ch",
                        }} />
                    </IconButton>

                    <IconButton>
                        <MoreIcon style={{
                            width: 17,
                            marginLeft: "1ch",
                        }} />
                    </IconButton>

                    <IconButton>
                        <UndoIcon style={{
                            width: 17,
                            marginLeft: "1ch",
                            rotate: '90deg'
                        }} />
                    </IconButton>

                    <IconButton>
                        <RedoIcon style={{
                            width: 17,
                            marginLeft: "1ch",
                            rotate: '-90deg'
                        }} />
                    </IconButton>

                    <IconButton>
                        <Button variant="text" onClick={handleClick} style={{
                            width: 17,
                            marginLeft: "12ch",
                            color: 'gray'
                        }} >Close</Button>
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
}
