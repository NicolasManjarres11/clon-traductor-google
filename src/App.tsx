import { useReducer } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { type State } from './types.d';
import { type Action } from './types.d';

//1. Crear estado inicial

const initialState: State= {
  fromLanguage: 'auto', //lenguaje a traducir
  toLanguage: 'en', //lenguaje traducido
  fromText: '', //texto a traducir
  result: '', //texto traducido
  loading: false
}

//2. crear reducer

function reducer (state: State, action: Action){      //Recibe el estado y la acción. Llamamos una acción, esta le llega al reducer, el reducer toma el estado, genera un nuevo estado
  const {type} = action;

  if (type === 'INTERCHANGE_LANGUAGES'){ //Intercambio de lenguajes
    
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE'){ //se escoge lenguaje a traducir
    return {
      ...state,
      fromLanguage: action.payload //payload es la información enviada por el usuario, la cual utilizaremos para actualizar el estado
    }
  }

  if(type === 'SET_TO_LANGUAGE'){ //se escoge lenguaje al que queremos traducit
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT'){ //Cuadro de texto a traducir
    return{
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT'){ //cuadro de resultado de texto traducido
    return{
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state;
}

function App() {

  //3. Usar el hook reducer

 const [{
   fromLanguage,
   toLanguage,
   fromText,
   result,
   loading
 }, dispatch] = useReducer(reducer, initialState) //colocamos los inicialStates, luego la acción a implementar (dispacth), utilizamos el hook useReducer, donde colocamos como parámetros la función a utilizar y el objeto con los estados iniciales

 console.log({fromLanguage});
 

  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es'}) //dispacth toma la información del estado y la acción a utilizar, esta la envía a reducer y en el reducer, se cambia el valor del estado del objeto initialState
      }}>Cambiar a español</button>
    </div>
  )
}

export default App
