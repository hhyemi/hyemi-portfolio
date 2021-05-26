import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PortfolioContext from '../../context/context';

const About = () => {
  const { prefix } = useContext(PortfolioContext);

  return (
    <section id="about">
      <Container>
        <h3 className="page-title">행동으로 보여주는 개발자</h3>
        <Row>
          <Col lg={3} sm={12} className="img-col">
            <img className="img-resume" alt="..." src={`${prefix}/img/my.jpg`} />
          </Col>
          <Col lg={9} sm={12}>
            <dl>
              <dt>소개</dt>
              <dd>
                안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머
                안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머
                안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머안녕하세요머쓱,,쏼라?????????//룰르,ㅇㅁ러ㅣㅁ너리ㅓ이마리머
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
