import { nanoid } from 'nanoid';

// eslint-disable-next-line import/prefer-default-export
export const projectsData = [
  {
    id: nanoid(),
    individual: true,
    title: 'job-up (직업을 잡어)',
    content: '취업준비생을 위한 일정관리와 정보기록 및 공유를 위한 취업관리 웹사이트 📝 ✏️ ',
    term: '2021-04.12 ~ 2021-05.21',
    personnel: '1명 (개인프로젝트)',
    front: `react, next immer, faker, prop-types redux, redux-saga
styled-components, fortawesome, reactstrap chart.js, tui-calendar
react-calendar, react-dnd, react-quill, react-color, react-bootstrap-sweetalert
react-github-login, react-google-login webpack, babel, eslint, dotenv-webpack`,
    back: `mysql, sequelize node, express, nodemon axios, cors, helmet, hpp bcrypt,
cookie-parser, passport dotenv, morgan multer, ejs nodemailer`,
    func: `▪️ 달력형태로 일정을 기록할 수 있는 기능
▪️ 드랍앤 드래그를 이용한 Todo-List 기능
▪️ 메모를 저장할 수 있는 기능 
▪️ 스탑워치를 통한 공부시간 기록하는 기능
▪️ 정보공유를 위한 커뮤니티 기능
`,
    git: 'https://github.com/hhyemi/job-up',
    video: 'https://www.youtube.com/watch?v=UpsirKm8t5c',
    items: [
      {
        src: 'main.png',
        caption: '메인페이지'
      },
      {
        src: 'cal.png',
        caption: '캘린더'
      },
      {
        src: 'todo.png',
        caption: '투두리스트'
      },
      {
        src: 'memo.png',
        caption: '메모'
      },
      {
        src: 'comm.png',
        caption: '커뮤니티'
      },
      {
        src: 'stop.png',
        caption: '스탑워치'
      }
    ]
  },
  {
    id: nanoid(),
    individual: false,
    title: '보호할개 (유기견 보호 웹사이트)',
    content:
      '반려견의 입양·분양, 스토리펀딩 , 관련정보 및 상품 판매를 회원들에게 제공함으로써 유기견 없는 사회를 실현하고자 하는 시스템 🐶 ❤️',
    term: '2019-06 ~ 2019-08',
    personnel: '5명',
    front: `JavaScript, JSP, jQuery, ajax
HTML5, CSS3, BootStrap, Sweetalert, CKEditor4`,
    back: `java 1.8
Oracle 11g, JDBC, Oracle DB Scheduler
Spring 4.0.9, Apache Tomcat 9.0.21, MyBatis 3.2.1
JUnit4, Log4jdbc, Aspectj, JSON-simple, Jackson
Node.js, NPM, Socket.io, Express`,
    func: `▪️ Story Funding 서비스 (투표기능, 후원기능)
▪️ 동물병원 정보검색 서비스
▪️ 회원간의 채팅 서비스
▪️ 무한스크롤, 자동완성 기능
`,
    api: 'I’m port API, kakao Map API, kakao,facebook,twitter공유 API',
    git: 'https://github.com/hhyemi/protectedogWeb',
    video: 'https://www.youtube.com/watch?v=Kxh2ttsuJ24',
    items: [
      {
        src: 'vote.png',
        caption: '투표게시판'
      },
      {
        src: 'give.png',
        caption: '후원게시판'
      },
      {
        src: 'hos.png',
        caption: '동물병원게시판'
      },
      {
        src: 'chat.png',
        caption: '채팅'
      }
    ]
  },
  {
    id: nanoid(),
    individual: true,
    title: 'Hyemi Shop (쇼핑몰)',
    content:
      '사용자에게 쇼핑몰 제품을 구매, 장바구니, 후기, Q&A를 제공하고 관리자페이지에서 재고관리 배송시스템 등 쇼핑몰의 전반적인 기능을 제공하는 시스템 🎁 ',
    term: '2019-05 ~ 2019-06',
    personnel: '1명 (개인프로젝트)',
    front: `JavaScript, JSP, jQuery, ajax
HTML5, CSS3, BootStrap`,
    back: `java 1.8
Oracle 11g, JDBC, Oracle DB Scheduler
Spring 4.0.9, Apache Tomcat 9.0.21, MyBatis 3.2.1
JUnit4, Log4jdbc, Aspectj, JSON-simple, Jackson`,
    func: `▪️ 관리자가 상품을 등록하고 수정 삭제하는 기능
▪️ 상품을 배송, 도착, 취소 기능
▪️ 상품을 구매( 수량선택 가능 )하고 내역을 볼 수 있는 기능
▪️ 맘에 드는 상품 장바구니 기능
▪️ 구매한 상품에 대한 후기 작성 기능
▪️ 상품에 대한 Q&A 작성 기능
`,
    api: 'kakao로그인 API, kakao,facebook,twitter공유 API, Daum주소 API, I’m port API',
    git: 'https://github.com/hhyemi/11Model2MVC',
    items: [
      {
        src: 'shop.png',
        caption: '상품목록'
      },
      {
        src: 'image01.png',
        caption: '상품 상세보기'
      }
    ]
  }
];
