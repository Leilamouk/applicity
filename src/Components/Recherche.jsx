import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <div className='recherche'>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Recherche" variant="outlined" />
    </Box>
    </div>
  );
}