import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'reactstrap';

// eslint-disable-next-line arrow-body-style
const Career = ({ prefix }) => {
  return (
    <section id="career">
      <Container>
        <h3 className="page-title">Career</h3>
        <Row>
          <Col>
            <h3>
              <img className="img-resume" alt="..." src={`${prefix}/img/geotwo.png`} />
              <b>지오투정보기술 (GeoTwo) : 사원</b>
            </h3>
            <div>
              <div className="project-detail">
                <div>
                  공간정보시스템(Geographic Information System, GIS) 전문 기업
                  <br />
                  <hr />
                  <dl>
                    <dt>근무기간</dt> <dd>2019-10-07 ~ 2021-02-19 (1년 4개월)</dd>
                  </dl>
                  <dl className="tec-dl">
                    <dt>담당업무</dt>
                    <dd>
                      <b>1. ShpEtl</b> <br />
                      ▪️ 기간 : 2020-10 ~ 2020.11
                      <br />
                      <p>
                        <b>2. 논산시 공간정보시스템</b> <br />
                        ▪️ 기간 : 2020-06 ~ 2020.09
                      </p>
                      <p>
                        <b>3. 춘천시 공간정보시스템 유지보수</b> <br />
                        ▪️ 기간 : 2020-10 ~ 2020.11
                      </p>
                      <p>
                        <b>4. 파주시 공간정보시스템</b> <br />
                        ▪️ 기간 : 2020-10 ~ 2020.2
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
              <br />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              <img className="img-resume" alt="..." src={`${prefix}/img/nurim.png`} />
              <b> 누림이앤지 (Nurim ENG) : 인턴</b>
            </h3>
            <div>
              <div className="project-detail">
                <div>
                  지오메카트로닉스 기술을 기반으로 다양한 토목계측제품을 개발, 생산, 보급하는 기업
                  <br />
                  <hr />
                  <dl>
                    <dt>인턴기간</dt> <dd>2018-06-18 ~ 2021-08-17 (2개월)</dd>
                  </dl>
                  <dl className="tec-dl">
                    <dt>담당업무</dt>
                    <dd>
                      <b>NTS 매니저 ( 회사 모바일 모니터링 어플 )</b> <br />
                      <div style={{ marginBottom: '1rem' }}>
                        ㆍ 회사에서 제공하는 냉장/냉동 온도관리 시스템 NTS의 모바일 모니터링 앱
                      </div>
                      ▪️ 기능 : <br />
                      <div style={{ marginBottom: '1rem' }}>
                        ㆍ 서비스 내역 조회 및 월별 서비스 내역 조회기능
                        <br />
                        ㆍ 기간별 검색기능
                        <br />ㆍ 센서계측내역 검색 및 자료 조회 기능
                      </div>
                      ▪️ 사용기술 : <br />
                      ㆍ JAVA 1.8, PHP 5.6, MariaDB 10
                      <br />
                    </dd>
                  </dl>
                </div>
              </div>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Career;
