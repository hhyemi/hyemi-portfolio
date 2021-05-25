webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _static_projectsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/projectsData */ "./src/static/projectsData.js");
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectCard */ "./src/components/Projects/ProjectCard.js");


var _jsxFileName = "C:\\React\\hyemi-portfolio\\src\\components\\Projects\\Projects.js",
    _this = undefined;




 // eslint-disable-next-line arrow-body-style

var Projects = function Projects(_ref) {
  var prefix = _ref.prefix;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "projects",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "page-title",
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), _static_projectsData__WEBPACK_IMPORTED_MODULE_3__["projectsData"].map(function (project) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          project: project,
          prefix: prefix
        }, project.id, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/public/projectsData.js":
false,

/***/ "./src/static/projectsData.js":
/*!************************************!*\
  !*** ./src/static/projectsData.js ***!
  \************************************/
/*! exports provided: projectsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsData", function() { return projectsData; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
 // import main from '../assets/img/main.png';
// import cal from '../assets/img/cal.png';
// import todo from '../assets/img/todo.png';
// import memo from '../assets/img/memo.png';
// import comm from '../assets/img/comm.png';
// import stop from '../assets/img/stop.png';
// PROJECTS DATA
// eslint-disable-next-line import/prefer-default-export

var projectsData = [{
  id: Object(nanoid__WEBPACK_IMPORTED_MODULE_0__["nanoid"])(),
  title: 'job-up (직업을 잡어)',
  content: '취업준비생을 위한 일정관리와 정보기록 및 공유를 위한 취업관리 웹사이트 📝 ✏️ ',
  term: '2021-04.12 ~ 2021-05.21',
  personnel: '1명 (개인프로젝트)',
  front: "react, next immer, faker, prop-types redux, redux-saga\nstyled-components, fortawesome, reactstrap chart.js, tui-calendar\nreact-calendar, react-dnd, react-quill, react-color, react-bootstrap-sweetalert\nreact-github-login, react-google-login webpack, babel, eslint, dotenv-webpack",
  back: "mysql, sequelize node, express, nodemon axios, cors, helmet, hpp bcrypt,\ncookie-parser, passport dotenv, morgan multer, ejs nodemailer",
  func: "\u25AA\uFE0F \uB2EC\uB825\uD615\uD0DC\uB85C \uC77C\uC815\uC744 \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\n\u25AA\uFE0F \uB4DC\uB78D\uC564 \uB4DC\uB798\uADF8\uB97C \uC774\uC6A9\uD55C Todo-List \uAE30\uB2A5\n\u25AA\uFE0F \uBA54\uBAA8\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5 \n\u25AA\uFE0F \uC2A4\uD0D1\uC6CC\uCE58\uB97C \uD1B5\uD55C \uACF5\uBD80\uC2DC\uAC04 \uAE30\uB85D\uD558\uB294 \uAE30\uB2A5\n\u25AA\uFE0F \uC815\uBCF4\uACF5\uC720\uB97C \uC704\uD55C \uCEE4\uBBA4\uB2C8\uD2F0 \uAE30\uB2A5\n",
  items: [{
    src: 'main.png',
    caption: '메인페이지'
  }, {
    src: 'cal.png',
    caption: '캘린더'
  }, {
    src: 'todo.png',
    caption: '투두리스트'
  }, {
    src: 'memo.png',
    caption: '메모'
  }, {
    src: 'comm.png',
    caption: '커뮤니티'
  }, {
    src: 'stop.png',
    caption: '스탑워치'
  }]
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wdWJsaWMvcHJvamVjdHNEYXRhLmpzIl0sIm5hbWVzIjpbIlByb2plY3RzIiwicHJlZml4IiwicHJvamVjdHNEYXRhIiwibWFwIiwicHJvamVjdCIsImlkIiwibmFub2lkIiwidGl0bGUiLCJjb250ZW50IiwidGVybSIsInBlcnNvbm5lbCIsImZyb250IiwiYmFjayIsImZ1bmMiLCJpdGVtcyIsInNyYyIsImNhcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDL0Isc0JBQ0U7QUFBUyxNQUFFLEVBQUMsVUFBWjtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHQyxpRUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUNDLE9BQUQ7QUFBQSw0QkFDaEIscUVBQUMsb0RBQUQ7QUFBOEIsaUJBQU8sRUFBRUEsT0FBdkM7QUFBZ0QsZ0JBQU0sRUFBRUg7QUFBeEQsV0FBa0JHLE9BQU8sQ0FBQ0MsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFqQixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0tBQU1MLFE7QUFhU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDTyxJQUFNRSxZQUFZLEdBQUcsQ0FDMUI7QUFDRUcsSUFBRSxFQUFFQyxxREFBTSxFQURaO0FBRUVDLE9BQUssRUFBRSxpQkFGVDtBQUdFQyxTQUFPLEVBQUUsZ0RBSFg7QUFJRUMsTUFBSSxFQUFFLHlCQUpSO0FBS0VDLFdBQVMsRUFBRSxhQUxiO0FBTUVDLE9BQUssNlJBTlA7QUFVRUMsTUFBSSwySUFWTjtBQVlFQyxNQUFJLDJnQkFaTjtBQWtCRUMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsT0FBRyxFQUFFLFVBRFA7QUFFRUMsV0FBTyxFQUFFO0FBRlgsR0FESyxFQUtMO0FBQ0VELE9BQUcsRUFBRSxTQURQO0FBRUVDLFdBQU8sRUFBRTtBQUZYLEdBTEssRUFTTDtBQUNFRCxPQUFHLEVBQUUsVUFEUDtBQUVFQyxXQUFPLEVBQUU7QUFGWCxHQVRLLEVBYUw7QUFDRUQsT0FBRyxFQUFFLFVBRFA7QUFFRUMsV0FBTyxFQUFFO0FBRlgsR0FiSyxFQWlCTDtBQUNFRCxPQUFHLEVBQUUsVUFEUDtBQUVFQyxXQUFPLEVBQUU7QUFGWCxHQWpCSyxFQXFCTDtBQUNFRCxPQUFHLEVBQUUsVUFEUDtBQUVFQyxXQUFPLEVBQUU7QUFGWCxHQXJCSztBQWxCVCxDQUQwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOGZiNTFiMWU2ZTU3ODVkNDAyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBwcm9qZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9zdGF0aWMvcHJvamVjdHNEYXRhJztcclxuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4vUHJvamVjdENhcmQnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcclxuY29uc3QgUHJvamVjdHMgPSAoeyBwcmVmaXggfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5Qcm9qZWN0czwvaDM+XHJcbiAgICAgICAge3Byb2plY3RzRGF0YS5tYXAoKHByb2plY3QpID0+IChcclxuICAgICAgICAgIDxQcm9qZWN0Q2FyZCBrZXk9e3Byb2plY3QuaWR9IHByb2plY3Q9e3Byb2plY3R9IHByZWZpeD17cHJlZml4fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XHJcblxyXG4vLyBpbXBvcnQgbWFpbiBmcm9tICcuLi9hc3NldHMvaW1nL21haW4ucG5nJztcclxuLy8gaW1wb3J0IGNhbCBmcm9tICcuLi9hc3NldHMvaW1nL2NhbC5wbmcnO1xyXG4vLyBpbXBvcnQgdG9kbyBmcm9tICcuLi9hc3NldHMvaW1nL3RvZG8ucG5nJztcclxuLy8gaW1wb3J0IG1lbW8gZnJvbSAnLi4vYXNzZXRzL2ltZy9tZW1vLnBuZyc7XHJcbi8vIGltcG9ydCBjb21tIGZyb20gJy4uL2Fzc2V0cy9pbWcvY29tbS5wbmcnO1xyXG4vLyBpbXBvcnQgc3RvcCBmcm9tICcuLi9hc3NldHMvaW1nL3N0b3AucG5nJztcclxuXHJcbi8vIFBST0pFQ1RTIERBVEFcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogbmFub2lkKCksXHJcbiAgICB0aXRsZTogJ2pvYi11cCAo7KeB7JeF7J2EIOyeoeyWtCknLFxyXG4gICAgY29udGVudDogJ+y3qOyXheykgOu5hOyDneydhCDsnITtlZwg7J287KCV6rSA66as7JmAIOygleuztOq4sOuhnSDrsI8g6rO17Jyg66W8IOychO2VnCDst6jsl4XqtIDrpqwg7Ju57IKs7J207Yq4IPCfk50g4pyP77iPICcsXHJcbiAgICB0ZXJtOiAnMjAyMS0wNC4xMiB+IDIwMjEtMDUuMjEnLFxyXG4gICAgcGVyc29ubmVsOiAnMeuqhSAo6rCc7J247ZSE66Gc7KCd7Yq4KScsXHJcbiAgICBmcm9udDogYHJlYWN0LCBuZXh0IGltbWVyLCBmYWtlciwgcHJvcC10eXBlcyByZWR1eCwgcmVkdXgtc2FnYVxyXG5zdHlsZWQtY29tcG9uZW50cywgZm9ydGF3ZXNvbWUsIHJlYWN0c3RyYXAgY2hhcnQuanMsIHR1aS1jYWxlbmRhclxyXG5yZWFjdC1jYWxlbmRhciwgcmVhY3QtZG5kLCByZWFjdC1xdWlsbCwgcmVhY3QtY29sb3IsIHJlYWN0LWJvb3RzdHJhcC1zd2VldGFsZXJ0XHJcbnJlYWN0LWdpdGh1Yi1sb2dpbiwgcmVhY3QtZ29vZ2xlLWxvZ2luIHdlYnBhY2ssIGJhYmVsLCBlc2xpbnQsIGRvdGVudi13ZWJwYWNrYCxcclxuICAgIGJhY2s6IGBteXNxbCwgc2VxdWVsaXplIG5vZGUsIGV4cHJlc3MsIG5vZGVtb24gYXhpb3MsIGNvcnMsIGhlbG1ldCwgaHBwIGJjcnlwdCxcclxuY29va2llLXBhcnNlciwgcGFzc3BvcnQgZG90ZW52LCBtb3JnYW4gbXVsdGVyLCBlanMgbm9kZW1haWxlcmAsXHJcbiAgICBmdW5jOiBg4paq77iPIOuLrOugpe2Yle2DnOuhnCDsnbzsoJXsnYQg6riw66Gd7ZWgIOyImCDsnojripQg6riw64qlXHJcbuKWqu+4jyDrk5zrno3slaQg65Oc656Y6re466W8IOydtOyaqe2VnCBUb2RvLUxpc3Qg6riw64qlXHJcbuKWqu+4jyDrqZTrqqjrpbwg7KCA7J6l7ZWgIOyImCDsnojripQg6riw64qlIFxyXG7ilqrvuI8g7Iqk7YOR7JuM7LmY66W8IO2Gte2VnCDqs7XrtoDsi5zqsIQg6riw66Gd7ZWY64qUIOq4sOuKpVxyXG7ilqrvuI8g7KCV67O06rO17Jyg66W8IOychO2VnCDsu6TrrqTri4jti7Ag6riw64qlXHJcbmAsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnbWFpbi5wbmcnLFxyXG4gICAgICAgIGNhcHRpb246ICfrqZTsnbjtjpjsnbTsp4AnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICdjYWwucG5nJyxcclxuICAgICAgICBjYXB0aW9uOiAn7LqY66aw642UJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAndG9kby5wbmcnLFxyXG4gICAgICAgIGNhcHRpb246ICftiKzrkZDrpqzsiqTtirgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICdtZW1vLnBuZycsXHJcbiAgICAgICAgY2FwdGlvbjogJ+uplOuqqCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogJ2NvbW0ucG5nJyxcclxuICAgICAgICBjYXB0aW9uOiAn7Luk666k64uI7YuwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnc3RvcC5wbmcnLFxyXG4gICAgICAgIGNhcHRpb246ICfsiqTtg5Hsm4zsuZgnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=