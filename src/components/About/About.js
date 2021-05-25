import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// eslint-disable-next-line arrow-body-style
const About = ({ prefix }) => {
  return (
    <section id="about">
      <Container>
        <h3 className="page-title">About me</h3>
        <Row>
          <Col className="col-md-3">
            <img className="img-resume" alt="..." src={`${prefix}/public/img/my.jpg`} />
          </Col>
          <Col className="col-md-9 text-col">
            “인생의 위대한 목표는 지식이 아니라 행동이다” 인 저의 좌우명에 따라 저는 어렸을 때부터 과감한 편이었으며
            일단 하고 보자는 행동으로 경험하는 것을 추구하였습니다. 해보지도 않은 일을 지레 겁먹어 포기하지 않고 새로운
            일을 시도하는 도전정신이 강했습니다. 그 결과 사람들에게도 먼저 다가가 교우관계가 완만하였으며 적극적인
            행동을 통해서 성격도 긍정적이고 자신감이 넘치게 되었습니다. 대학생활에서는 학생회 활동을 통해 저의
            이익추구보다는 남들을 위해 봉사를 하였고 또한 간부직을 통해 리더십을 발휘하여 학생들을 이끌었으며 의견을
            조율하는 데 자신이 있습니다. 이런 저의 성격은 색다른 경험과 많은 사람들을 만나게 되었고 그로 인해 상황을
            통한 행동들
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
