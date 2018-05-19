import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Options = () => {
  const options = {
    "Mesas": "Mesas",
    "Estadisticas": "Estadisticas",
    "Administración": "Administración",
    "Usuarios": "Usuarios",
    "Roles": "Roles",
    "About": "About",
    "/menu": "Menu"
  }; 
  return (
  <Row>
    { Object.keys(options).map((key) => (
      <Col key={key} md={4}>
        <Link
          className="wide-btn margin-botton-md full-width btn btn-lg btn-primary"
          to={key}>{options[key]}</Link>
      </Col>
    )) }
  </Row>);
};

export default Options;