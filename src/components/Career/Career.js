import React, { useContext } from 'react';
import { CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import PortfolioContext from '../../context/context';

const Career = () => {
  const { prefix } = useContext(PortfolioContext);

  return (
    <section id="career">
      <Container>
        <h3 className="page-title">Career</h3>
        <Row>
          <Col>
            <h3>
              <img className="img-resume" alt="..." src={`${prefix}/img/geotwo.png`} />
              <b>지오투정보기술 (GeoTwo) : 사원 (풀스택)</b>
            </h3>
            <div>
              <div className="project-detail">
                <div>
                  공간정보시스템(Geographic Information System, GIS) 전문 기업
                  <br />
                  <hr />
                  <dl>
                    <dt>근무기간</dt> <dd>2019.10.07 ~ 2021.02.19 (1년 4개월)</dd>
                  </dl>
                  <dl>
                    <dt>사용기술</dt>
                    <dd>
                      Java, Spring, 전자정부프레임워크(eGovFrame), Mybatis
                      <br />
                      Js, jQuery, Html, Css, Oracle or PostgreSQL, Apache Tomcat, Maven, Jenkins <br />
                      Openlayers(오픈 소스 웹 브라우저에서 지도데이터를 표시하기위한 자바스크립트 라이브러리), 다음지도
                      api, vworld api
                    </dd>
                  </dl>
                  <dl className="tec-dl">
                    <dt>담당업무</dt>
                    <dd>
                      {/* 파주시 공간정보시스템 */}
                      <CardTitle>
                        <b>1. 파주시 공간정보 고도화시스템</b>
                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        노후화된 공간정보시스템을 개선하여 웹 기반 공간정보 통합관리체계, 다양한 업무에 공간정보 활용을
                        위한 사용자 맞춤형 공간정보체계 구축
                      </CardSubtitle>
                      <CardText>
                        ▪️ 기간 : <br />
                        2020.06 ~ 2021.02
                      </CardText>
                      <CardText>
                        ▪️ 담당업무 :
                        <br />ㆍ 지도분할, 지도컨트롤
                        <br />ㆍ 지도에 있는 레이어 이름, 필지, 공간 검색
                        <br />ㆍ 거리 내 반경으로 특정 건물에 대한 정보제공
                        <br />ㆍ 드론영상, 드론사진, 조감도레이어 관리
                        <br />ㆍ 지도 위에 도시기준점 발급
                        <br />ㆍ 간이설계 통계현황 관리(지도상의 위치에서)
                        <br />ㆍ 개발행위허가관리 및 통계 페이지, 도로,상수,하수 통계현황 페이지
                        <br />ㆍ 레이어 관리 (fancytree라이브러리 사용), 레이어 스타일 관리 (도형, 색, 라벨)
                      </CardText>
                      <hr />
                      {/* 논산시 공간정보시스템 */}
                      <CardTitle>
                        <b>2. 논산시 공간정보 고도화시스템</b>
                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        노후화된 공간정보시스템을 개선하여 웹 기반 공간정보 통합관리체계, 다양한 업무에 공간정보 활용을
                        위한 사용자 맞춤형 공간정보체계 구축
                      </CardSubtitle>
                      <CardText>
                        ▪️ 기간 : <br />
                        2019.11 ~ 2020.05
                      </CardText>
                      <CardText>
                        ▪️ 담당업무 : <br />ㆍ 지하시설물 표준과 현행시스템 데이터 비교, 전환
                        <br />ㆍ 도로, 상수, 하수 대장 데이터 관리 및 유지보수 페이지
                        <br />ㆍ 도로, 상수, 하수 대장 데이터 검색 및 필터링
                        <br />ㆍ 도로, 상수, 하수 레이어 통계 현황 관리 페이지
                        <br />ㆍ 관리자 페이지 데이터 코드관리
                        <br />ㆍ 관리자 페이지 항공영상 관리
                      </CardText>
                      <hr />
                      {/* ShpEtl */}
                      <CardTitle>
                        <b>3. ShpEtl</b>
                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Shp파일을 DBMS에 로딩하여 공간테이블로 활용하거나 공간테이블을 Shp파일로 생성하여 <br />
                        백업 또는 타 시스템에 활용하기 위한 기능을 제공하는 웹 사이트
                      </CardSubtitle>
                      <CardText>
                        ▪️ 기간 : <br />
                        2019.10 ~ 2019.11
                      </CardText>
                      <CardText>
                        ▪️ 담당업무 : <br />ㆍ DBMS의 공간 테이블에서 Shp 파일 생성
                        <br />ㆍ 설정에 따라 하나 이상의 공간테이블을 Shp파일로 저장
                        <br />ㆍ 여러 Table에서 각각의 Shp파일 저장가능
                        <br />ㆍ 변환을 작업한 작업현황 목록제공
                      </CardText>
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
                    <dt>인턴기간</dt> <dd>2018.06.18 ~ 2018.08.17 (2개월)</dd>
                  </dl>
                  <dl>
                    <dt>사용기술</dt>
                    <dd>JAVA 1.8, PHP 5.6, MariaDB 10</dd>
                  </dl>
                  <dl className="tec-dl">
                    <dt>담당업무</dt>
                    <dd>
                      <CardTitle>
                        <b>NTS 매니저 ( 회사 모바일 모니터링 어플 )</b>
                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        회사에서 제공하는 냉장/냉동 온도관리 시스템 NTS의 모바일 모니터링 앱
                      </CardSubtitle>
                      <CardText>
                        ▪️ 담당업무 : <br />ㆍ 서비스 내역 조회 및 월별 서비스 내역 조회기능
                        <br />ㆍ 기간별 검색기능
                        <br />ㆍ 센서계측내역 검색 및 자료 조회 기능
                      </CardText>
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
