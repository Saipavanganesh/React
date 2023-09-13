import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Takenote3.css';

import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import PinIcon from '@mui/icons-material/PushPinOutlined';
import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { trashNotes, pinNotes, archiveNotes } from '../services/NoteServices';


export default function TakeNote3({info, getAllNotes}) {
    const [archiveing, setArchiving] = useState(false);
    const [trashing, setTrashing] = useState(false);
    
    const handleTrash = async () => {
        let id = info.notesId;
        let response = await (trashNotes(id));
        console.log(response);
        setTrashing(response)
        getAllNotes();
    }
    const handlePin = async () => {
        let id = info.notesId;
        let response = await (pinNotes(id));
        console.log(response);
    }
    const handleArchive = async () => {
        let id = info.notesId;
        let response = await (archiveNotes(id));
        console.log(response);
        setArchiving(response);
        getAllNotes();
    }


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 4,
                    width: 250,
                    height: 'auto'
                },
            }}
        >
            <Paper elevation={2}>
                <div className='icons'>
                    <div className='input'>
                        {info.title}
                    </div>
                    <div><IconButton><PinIcon onClick={handlePin}/></IconButton></div>
                </div>
                <div className='input'>
                    {info.description}
                </div>
                <div className='icons'>
                    <div>
                        <IconButton>
                            <RemindMeIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <CollaboratorIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ColorChangeIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ArchiveIcon onClick={handleArchive}/>
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <DeleteIcon onClick={handleTrash} />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <MoreIcon />
                        </IconButton>

                    </div>
                </div>
            </Paper>
        </Box>
    );
}
