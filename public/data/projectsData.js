import { nanoid } from 'nanoid';

// import main from '../assets/img/main.png';
// import cal from '../assets/img/cal.png';
// import todo from '../assets/img/todo.png';
// import memo from '../assets/img/memo.png';
// import comm from '../assets/img/comm.png';
// import stop from '../assets/img/stop.png';

// PROJECTS DATA
// eslint-disable-next-line import/prefer-default-export
export const projectsData = [
  {
    id: nanoid(),
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
  }
];
