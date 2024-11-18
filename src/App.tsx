// import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { prettying_text_white } from './assets';
import styled from '@emotion/styled';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton*/}
          {/*  size="large"*/}
          {/*  edge="start"*/}
          {/*  color="inherit"*/}
          {/*  aria-label="menu"*/}
          {/*  sx={{ mr: 2 }}*/}
          {/*>*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LOGO src={prettying_text_white} alt="logo" height="30px" />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const LOGO = styled.img`
  position: relative;
  bottom: -5px;
  margin-right: 10px;
`;

export default App;
