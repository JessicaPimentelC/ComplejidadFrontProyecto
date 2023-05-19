import { useState } from 'react';
import { saveAs } from 'file-saver'

import './App.css';


function App() {

  const [equipos, setEquipos] = useState('')
  const [minimo, setMinimo] = useState('')
  const [maximo, setMaximo] = useState('')

  const createFile = () => {
    const blob = new Blob([ equipos,'\n',minimo,'\n',maximo ], { type: 'text/plain;charset=utf-8' });
    saveAs( blob, 'DatosCalDepdzn.dzn' );

  }

  const readFile = ( e ) => {

    const file = e.target.files[0];
    if ( !file ) return;

    const fileReader = new FileReader();

    fileReader.readAsText( file );

    fileReader.onload = () => {
      console.log( fileReader.result );
      setEquipos( fileReader.result );
    }

    fileReader.onerror = () => {
      console.log( fileReader.error );
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Calendario de Torneos Deportivos</h2>
        <label>Cantidad de equipos:</label>
        <input
          placeholder="Entrada"
          value={ equipos }
          onChange={ ( e ) => setEquipos( e.target.value ) }
        ></input>

        <label>Tamaño mínimo de cada gira:</label>
        <input
          placeholder="Entrada"
          value={ minimo }
          onChange={ ( e ) => setMinimo( e.target.value) }
        ></input>

        <label>Tamaño máximo de cada gira:</label>
        <input
          placeholder="Entrada"
          value={ maximo }
          onChange={ ( e ) => setMaximo( e.target.value) }
        ></input>

       

        <br />
      { /* <input 
          type="file"
          multiple={ false }
          onChange={ readFile }
        />*/}

        <br />
      {
        <button 
          onClick={ createFile }
        >
          Generar archivo
        </button>
    }
      </header>
    </div>
  );
}

export default App;
