import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// eslint-disable-next-line arrow-body-style
const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <h3 className="page-title">Skills</h3>
        <Row>
          <Col lg={3} sm={12} className="skill-title">
            <b>Frontend</b>
          </Col>
          <Col lg={9} sm={12} className="skill-list">
            <Row>▪️ &ensp;JavaScript(ES6), jQuery, jsp</Row>
            <Row>▪️ &ensp;HTML, CSS</Row>
            <Row>▪️ &ensp;React, Redux, Redux-saga, Next</Row>
            <Row>▪️ &ensp;styled-components, reactstrap, antd</Row>
            <Row>▪️ &ensp;babel, webpack, eslint</Row>
          </Col>
        </Row>
        <hr />
        <Row className="back">
          <Col lg={3} sm={12} className="skill-title">
            <b>Backend</b>
          </Col>
          <Col lg={9} sm={12} className="skill-list">
            <Row>▪️ &ensp;Java, C</Row>
            <Row>▪️ &ensp;Spring, Junit</Row>
            <Row>▪️ &ensp;axios, Restful API</Row>
            <Row>▪️ &ensp;Node, express</Row>
            <Row>▪️ &ensp;Oracle, MySQL, PostgreSQL</Row>
            <Row>▪️ &ensp;Sequelize, Mybatis</Row>
          </Col>
        </Row>
        <hr />
        <Row className="back">
          <Col lg={3} sm={12} className="skill-title">
            <b>Etc</b>
          </Col>
          <Col lg={9} sm={12} className="skill-list">
            <Row>▪️ &ensp;Tomcat, Jenkins</Row>
            <Row>▪️ &ensp;Git, GitHub, Sourcetree</Row>
            <Row>▪️ &ensp;Visual Studio Code, IntelliJ, Eclipse</Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
