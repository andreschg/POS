import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const Options = () => {
  const options = {
    "Mesas": "Mesas",
    "Estadisticas": "Estadisticas",
    "Administración": "Administración",
    "Usuarios": "Usuarios",
    "Roles": "Roles",
    "About": "About",
    "Menu": "Menu"
  }; 
  return (
  <Row>
    { Object.keys(options).map((key) => (
      <Col key={key} md={4}>
        <Button className="wide-btn margin-botton-md full-width" bsStyle="primary" bsSize="large">{options[key]}</Button>
      </Col>
    )) }
  </Row>);
};

export default Options;