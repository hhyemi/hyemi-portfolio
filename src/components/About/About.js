import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PortfolioContext from '../../context/context';

const About = () => {
  const { prefix } = useContext(PortfolioContext);

  return (
    <section id="about">
      <Container>
        <h3 className="page-title">개발이 재밌는 프론트엔드 개발자 💻🖱️</h3>
        <Row>
          <Col lg={3} sm={12} className="img-col">
            <img className="img-resume" alt="..." src={`${prefix}/img/my.jpg`} />
          </Col>
          <Col lg={9} sm={12}>
            <dl>
              <dt>소개</dt>
              <dd>
                안녕하세요. 풀스택 개발자로 이전 직장에서 1년 4개월 근무하였습니다. GIS 회사로 지도위에서 기능을 주로
                하기 때문에 JavaScript를 많이 사용하였습니다. 그래서 간단하고 빠른 JavaScript의 매력에 푹 빠져 Front-End
                개발자로 전향하고자 합니다. 또한, 보이지 않는 기능보다는 사용자에게 직접 보이는 화면을 구성하는 것에 더
                흥미를 느꼈습니다. 어렸을 때부터 과감한 편이었으며 일단 하고 보자는 행동으로 경험하는 것을
                추구하였습니다. 해보지도 않은 일을 지레 겁먹어 포기하지 않고 새로운 일을 시도하는 도전정신이 강했습니다.
                그래서 퇴사 이후에는 해보지 않은 기술인 React와 node를 혼자 학습하여 개인 프로젝트를 만들었습니다. 빠른
                습득력과 실천력으로 바로 적응을 하여 프로젝트를 진행할 자신이 있습니다.
              </dd>
            </dl>
            <dl>
              <dt>생년월일</dt> <dd>1995.08.01</dd>
            </dl>
            <dl>
              <dt>학력</dt> <dd>홍익대학교(세종캠퍼스) 컴퓨터정보통신공학과</dd>
            </dl>
            <dl>
              <dt>교육</dt> <dd>비트캠프 (2019.02.27 ~ 2019.08.27)</dd>
            </dl>
            <dl>
              <dt>자격증</dt> <dd>정보처리기사</dd>
            </dl>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
