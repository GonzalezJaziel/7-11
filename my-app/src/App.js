import logo from './logo.svg';
import './App.css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import * as React from 'react';
import Button from '@mui/material/Button';
import VoiceChatOutlinedIcon from '@mui/icons-material/VoiceChatOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        <p>
          
        </p>
        {/* icon */}
        <br />
        <JavascriptIcon color='secondary' fontSize='large'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" 
        className="App-link"
        href="https://us02web.zoom.us/j/87089831972"
        target="_blank"
        rel="noopener noreferrer"
      startIcon={<VoiceChatOutlinedIcon />}
      endIcon={<ArrowBackIosNewOutlinedIcon />}
        >
          zoom link</Button>
      </header>
    </div>
  );
}

export default App;
