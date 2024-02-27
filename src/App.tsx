import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';




function App() {

  const {fromLanguage, setFromLanguage} = useStore() //importamos función donde está alojado el hook useReduce



  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLanguage('es') //solo colocamos el paylout
      }}>Cambiar a español</button>
      {fromLanguage}
    </div>
  )
}

export default App
