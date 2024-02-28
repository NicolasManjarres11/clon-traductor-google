import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/icons';
import { LanguageSelectot } from './components/LanguageSelector';




function App() {

  const {fromLanguage, toLanguage, interchangeLanguajes ,setFromLanguage, setToLanguage} = useStore() //importamos función donde está alojado el hook useReduce



  return (
    <Container fluid> {/* fluido es que se ajusta al ancho */}
      <h1>Google Translate</h1>

    <Row>
      <Col>
        <LanguageSelectot
        onChange={setFromLanguage}
        type='from'
        value={fromLanguage}/>
      </Col>

      <Col>
        <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguajes}>
          <ArrowsIcon/>
        </Button>
      </Col>

      <Col>
        <LanguageSelectot 
        onChange={setToLanguage}
        type='to'
        value={toLanguage}
        />
      </Col>


    </Row>


    </Container>
  )
}

export default App
