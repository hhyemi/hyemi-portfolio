import React from 'react';
import { Container, Fade, NavLink } from 'reactstrap';
import Typist from 'react-typist';

const Home = () => (
  // eslint-disable-next-line react/jsx-indent
  <section className="home-section">
    <Container>
      <div>
        <h1>
          <Typist blink>
            안녕하세요. <br />
            개발자 이혜미의 포트폴리오입니다
          </Typist>
        </h1>
      </div>
      <div className="continue">
        <a
          role="button"
          className="more"
          href="#about"
          data-animation="fade-in"
          data-animation-duration="500"
          data-animation-delay="2000"
          data-animation-offset="0"
        >
          CONTINUE
        </a>
        <NavLink href="#about" duration={1000}>
          <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
        </NavLink>
      </div>
    </Container>
  </section>
);

export default Home;
