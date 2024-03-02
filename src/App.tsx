import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";

import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { SectionType } from "./types.d";

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangeLanguajes,
    setFromLanguage,
    setToLanguage,
  } = useStore(); //importamos función donde está alojado el hook useReduce

  return (
    <Container fluid>
      {" "}
      {/* fluido es que se ajusta al ancho */}
      <h2>Google Translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              onChange={setFromLanguage}
              type={SectionType.FROM}
              value={fromLanguage}
            />
            <Form.Control
              as="textarea"
              placeholder="Introducir texto"
              autoFocus
              style={{ height: "150px" }}
            ></Form.Control>
          </Stack>
        </Col>

        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguajes}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              onChange={setToLanguage}
              type={SectionType.TO}
              value={toLanguage}
            />
            <Form.Control
              as="textarea"
              placeholder="Traducción"
              style={{ height: "150px" }}
            ></Form.Control>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
