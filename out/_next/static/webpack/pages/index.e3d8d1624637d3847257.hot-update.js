webpackHotUpdate_N_E("pages/index",{

/***/ "./src/public/projectsData.js":
/*!************************************!*\
  !*** ./src/public/projectsData.js ***!
  \************************************/
/*! exports provided: projectsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsData", function() { return projectsData; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _assets_img_main_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/main.png */ "./src/assets/img/main.png");
/* harmony import */ var _assets_img_main_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_main_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_cal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/cal.png */ "./src/assets/img/cal.png");
/* harmony import */ var _assets_img_cal_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_cal_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_todo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/todo.png */ "./src/assets/img/todo.png");
/* harmony import */ var _assets_img_todo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_todo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_memo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/memo.png */ "./src/assets/img/memo.png");
/* harmony import */ var _assets_img_memo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_memo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_comm_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/comm.png */ "./src/assets/img/comm.png");
/* harmony import */ var _assets_img_comm_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_comm_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_stop_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/stop.png */ "./src/assets/img/stop.png");
/* harmony import */ var _assets_img_stop_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_stop_png__WEBPACK_IMPORTED_MODULE_6__);






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
  items: [{
    src: _assets_img_main_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    caption: '메인페이지'
  }, {
    src: _assets_img_cal_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    caption: '캘린더'
  }, {
    src: _assets_img_todo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    caption: '투두리스트'
  }, {
    src: _assets_img_memo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    caption: '메모'
  }, {
    src: _assets_img_comm_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    caption: '커뮤니티'
  }, {
    src: _assets_img_stop_png__WEBPACK_IMPORTED_MODULE_6___default.a,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B1YmxpYy9wcm9qZWN0c0RhdGEuanMiXSwibmFtZXMiOlsicHJvamVjdHNEYXRhIiwiaWQiLCJuYW5vaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0ZXJtIiwicGVyc29ubmVsIiwiZnJvbnQiLCJiYWNrIiwiaXRlbXMiLCJzcmMiLCJtYWluIiwiY2FwdGlvbiIsImNhbCIsInRvZG8iLCJtZW1vIiwiY29tbSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUNPLElBQU1BLFlBQVksR0FBRyxDQUMxQjtBQUNFQyxJQUFFLEVBQUVDLHFEQUFNLEVBRFo7QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLFNBQU8sRUFBRSxnREFIWDtBQUlFQyxNQUFJLEVBQUUseUJBSlI7QUFLRUMsV0FBUyxFQUFFLGFBTGI7QUFNRUMsT0FBSyw2UkFOUDtBQVVFQyxNQUFJLDJJQVZOO0FBWUVDLE9BQUssRUFBRSxDQUNMO0FBQ0VDLE9BQUcsRUFBRUMsMkRBRFA7QUFFRUMsV0FBTyxFQUFFO0FBRlgsR0FESyxFQUtMO0FBQ0VGLE9BQUcsRUFBRUcsMERBRFA7QUFFRUQsV0FBTyxFQUFFO0FBRlgsR0FMSyxFQVNMO0FBQ0VGLE9BQUcsRUFBRUksMkRBRFA7QUFFRUYsV0FBTyxFQUFFO0FBRlgsR0FUSyxFQWFMO0FBQ0VGLE9BQUcsRUFBRUssMkRBRFA7QUFFRUgsV0FBTyxFQUFFO0FBRlgsR0FiSyxFQWlCTDtBQUNFRixPQUFHLEVBQUVNLDJEQURQO0FBRUVKLFdBQU8sRUFBRTtBQUZYLEdBakJLLEVBcUJMO0FBQ0VGLE9BQUcsRUFBRU8sMkRBRFA7QUFFRUwsV0FBTyxFQUFFO0FBRlgsR0FyQks7QUFaVCxDQUQwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lM2Q4ZDE2MjQ2MzdkMzg0NzI1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuXHJcbmltcG9ydCBtYWluIGZyb20gJy4uL2Fzc2V0cy9pbWcvbWFpbi5wbmcnO1xyXG5pbXBvcnQgY2FsIGZyb20gJy4uL2Fzc2V0cy9pbWcvY2FsLnBuZyc7XHJcbmltcG9ydCB0b2RvIGZyb20gJy4uL2Fzc2V0cy9pbWcvdG9kby5wbmcnO1xyXG5pbXBvcnQgbWVtbyBmcm9tICcuLi9hc3NldHMvaW1nL21lbW8ucG5nJztcclxuaW1wb3J0IGNvbW0gZnJvbSAnLi4vYXNzZXRzL2ltZy9jb21tLnBuZyc7XHJcbmltcG9ydCBzdG9wIGZyb20gJy4uL2Fzc2V0cy9pbWcvc3RvcC5wbmcnO1xyXG5cclxuLy8gUFJPSkVDVFMgREFUQVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgY29uc3QgcHJvamVjdHNEYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiBuYW5vaWQoKSxcclxuICAgIHRpdGxlOiAnam9iLXVwICjsp4Hsl4XsnYQg7J6h7Ja0KScsXHJcbiAgICBjb250ZW50OiAn7Leo7JeF7KSA67mE7IOd7J2EIOychO2VnCDsnbzsoJXqtIDrpqzsmYAg7KCV67O06riw66GdIOuwjyDqs7XsnKDrpbwg7JyE7ZWcIOy3qOyXheq0gOumrCDsm7nsgqzsnbTtirgg8J+TnSDinI/vuI8gJyxcclxuICAgIHRlcm06ICcyMDIxLTA0LjEyIH4gMjAyMS0wNS4yMScsXHJcbiAgICBwZXJzb25uZWw6ICcx66qFICjqsJzsnbjtlITroZzsoJ3tirgpJyxcclxuICAgIGZyb250OiBgcmVhY3QsIG5leHQgaW1tZXIsIGZha2VyLCBwcm9wLXR5cGVzIHJlZHV4LCByZWR1eC1zYWdhXHJcbnN0eWxlZC1jb21wb25lbnRzLCBmb3J0YXdlc29tZSwgcmVhY3RzdHJhcCBjaGFydC5qcywgdHVpLWNhbGVuZGFyXHJcbnJlYWN0LWNhbGVuZGFyLCByZWFjdC1kbmQsIHJlYWN0LXF1aWxsLCByZWFjdC1jb2xvciwgcmVhY3QtYm9vdHN0cmFwLXN3ZWV0YWxlcnRcclxucmVhY3QtZ2l0aHViLWxvZ2luLCByZWFjdC1nb29nbGUtbG9naW4gd2VicGFjaywgYmFiZWwsIGVzbGludCwgZG90ZW52LXdlYnBhY2tgLFxyXG4gICAgYmFjazogYG15c3FsLCBzZXF1ZWxpemUgbm9kZSwgZXhwcmVzcywgbm9kZW1vbiBheGlvcywgY29ycywgaGVsbWV0LCBocHAgYmNyeXB0LFxyXG5jb29raWUtcGFyc2VyLCBwYXNzcG9ydCBkb3RlbnYsIG1vcmdhbiBtdWx0ZXIsIGVqcyBub2RlbWFpbGVyYCxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IG1haW4sXHJcbiAgICAgICAgY2FwdGlvbjogJ+uplOyduO2OmOydtOyngCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogY2FsLFxyXG4gICAgICAgIGNhcHRpb246ICfsupjrprDrjZQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IHRvZG8sXHJcbiAgICAgICAgY2FwdGlvbjogJ+2IrOuRkOumrOyKpO2KuCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogbWVtbyxcclxuICAgICAgICBjYXB0aW9uOiAn66mU66qoJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBjb21tLFxyXG4gICAgICAgIGNhcHRpb246ICfsu6TrrqTri4jti7AnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IHN0b3AsXHJcbiAgICAgICAgY2FwdGlvbjogJ+yKpO2DkeybjOy5mCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==