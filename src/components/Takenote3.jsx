import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Takenote3.css';

import { IconButton, Typography } from '@mui/material';
import PinIcon from '@mui/icons-material/PushPinOutlined';
import RemindMeIcon from '@mui/icons-material/AddAlertOutlined';
import CollaboratorIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorChangeIcon from '@mui/icons-material/PaletteOutlined';
import ImageIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreIcon from '@mui/icons-material/MoreVertOutlined';

export default function TakeNote3({n}) {
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
                    <div>
                        {n.title}
                    </div>
                    <div><IconButton><PinIcon /></IconButton></div>
                </div>
                <div>
                    {n.description}
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
                            <ImageIcon />
                        </IconButton>
                    </div>

                    <div>
                        <IconButton>
                            <ArchiveIcon />
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
