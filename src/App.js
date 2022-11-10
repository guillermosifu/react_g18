import { TextField,Button, } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="App-logo" alt="logo"/>   
        <p>
          GUILLERMO SIFUENTES MONTOYA
        </p>
    
        <>enviar</>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextField
         variant='filled'
         label="ingresa tu mail"/>
         <Button href="./" variant="contained"
         >MATERIAL</Button>
         
       
      </header>        
    </div>
  
  );
}

export default App;
