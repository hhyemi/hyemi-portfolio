import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const ProjectCard = ({ project, prefix }) => {
  const { id, title, content, items, term, personnel, front, back, func } = project;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
      <img src={`${prefix}/img/${item.src}`} alt={item.altText} />
      <CarouselCaption captionText={item.caption} />
    </CarouselItem>
  ));
  return (
    <Row>
      <Col lg={6} sm={12}>
        <h3 className="project-wrapper__text-title">
          <b>{title}</b>
        </h3>
        <div className="project-wrapper__text">
          <div className="project-detail">
            <div>
              {content}
              <br />
              <hr />
              <dl>
                <dt>개발기간</dt> <dd>{term}</dd>
              </dl>
              <dl>
                <dt>개발인원</dt> <dd>{personnel}</dd>
              </dl>
              <dl>
                <dt>사용기술</dt>
                <dd>
                  ㆍ <b>Frontend</b> <br />
                  {front}
                  <br />
                  <p>
                    ㆍ <b>Backend</b> <br />
                    {back}
                  </p>
                </dd>
              </dl>
              <dl>
                <dt>기능</dt>
                <dd>{func}</dd>
              </dl>
            </div>
          </div>
          <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href="#">
            See Live
          </a>
          <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main" href="#">
            Source Code
          </a>
        </div>
      </Col>
      <Col lg={6} sm={12}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Col>
    </Row>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    term: PropTypes.string,
    personnel: PropTypes.string,
    front: PropTypes.string,
    back: PropTypes.string,
    func: PropTypes.string,
    items: PropTypes.array
  }).isRequired
};

export default ProjectCard;
