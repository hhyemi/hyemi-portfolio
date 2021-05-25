import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const ProjectCard = ({ project, prefix }) => {
  const { id, title, content, items, term, personnel, front, back, func, api, individual, video, git } = project;

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
    <Row className="project-card">
      <Col lg={6} sm={12}>
        <h3>
          <b>{title}</b>
        </h3>
        <div>
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
              <dl className="tec-dl">
                <dt>사용기술</dt>
                <dd>
                  ㆍ <b>Frontend</b> <br />
                  {front}
                  <br />
                  <p>
                    ㆍ <b>Backend</b> <br />
                    {back}
                  </p>
                  {api && (
                    <p>
                      ㆍ <b>API</b> <br />
                      {api}
                    </p>
                  )}
                </dd>
              </dl>
              <dl className="fun-dl">
                <dt>{individual ? '기능' : '담당업무'}</dt>
                <dd>
                  <p>{func}</p>
                  <span>
                    <a target="_blank" href={git} rel="noreferrer">
                      GitHub
                    </a>
                  </span>
                  {video && (
                    <span>
                      <a target="_blank" href={video} rel="noreferrer">
                        Video
                      </a>
                    </span>
                  )}
                </dd>
              </dl>
            </div>
          </div>
          <br />
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
    api: PropTypes.string,
    git: PropTypes.string,
    video: PropTypes.string,
    individual: PropTypes.bool,
    items: PropTypes.array
  }).isRequired,
  prefix: PropTypes.string.isRequired
};

export default ProjectCard;
