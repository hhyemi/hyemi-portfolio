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
  front: 'react, next immer, faker, prop-types redux, redux-saga <br>\r\n \n dd',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3B1YmxpYy9wcm9qZWN0c0RhdGEuanMiXSwibmFtZXMiOlsicHJvamVjdHNEYXRhIiwiaWQiLCJuYW5vaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0ZXJtIiwicGVyc29ubmVsIiwiZnJvbnQiLCJpdGVtcyIsInNyYyIsIm1haW4iLCJjYXB0aW9uIiwiY2FsIiwidG9kbyIsIm1lbW8iLCJjb21tIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBQ08sSUFBTUEsWUFBWSxHQUFHLENBQzFCO0FBQ0VDLElBQUUsRUFBRUMscURBQU0sRUFEWjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsU0FBTyxFQUFFLGdEQUhYO0FBSUVDLE1BQUksRUFBRSx5QkFKUjtBQUtFQyxXQUFTLEVBQUUsYUFMYjtBQU1FQyxPQUFLLEVBQUUsdUVBTlQ7QUFPRUMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsT0FBRyxFQUFFQywyREFEUDtBQUVFQyxXQUFPLEVBQUU7QUFGWCxHQURLLEVBS0w7QUFDRUYsT0FBRyxFQUFFRywwREFEUDtBQUVFRCxXQUFPLEVBQUU7QUFGWCxHQUxLLEVBU0w7QUFDRUYsT0FBRyxFQUFFSSwyREFEUDtBQUVFRixXQUFPLEVBQUU7QUFGWCxHQVRLLEVBYUw7QUFDRUYsT0FBRyxFQUFFSywyREFEUDtBQUVFSCxXQUFPLEVBQUU7QUFGWCxHQWJLLEVBaUJMO0FBQ0VGLE9BQUcsRUFBRU0sMkRBRFA7QUFFRUosV0FBTyxFQUFFO0FBRlgsR0FqQkssRUFxQkw7QUFDRUYsT0FBRyxFQUFFTywyREFEUDtBQUVFTCxXQUFPLEVBQUU7QUFGWCxHQXJCSztBQVBULENBRDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhMDEzNWVmMDU4ZWI2ODI3YzQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xyXG5cclxuaW1wb3J0IG1haW4gZnJvbSAnLi4vYXNzZXRzL2ltZy9tYWluLnBuZyc7XHJcbmltcG9ydCBjYWwgZnJvbSAnLi4vYXNzZXRzL2ltZy9jYWwucG5nJztcclxuaW1wb3J0IHRvZG8gZnJvbSAnLi4vYXNzZXRzL2ltZy90b2RvLnBuZyc7XHJcbmltcG9ydCBtZW1vIGZyb20gJy4uL2Fzc2V0cy9pbWcvbWVtby5wbmcnO1xyXG5pbXBvcnQgY29tbSBmcm9tICcuLi9hc3NldHMvaW1nL2NvbW0ucG5nJztcclxuaW1wb3J0IHN0b3AgZnJvbSAnLi4vYXNzZXRzL2ltZy9zdG9wLnBuZyc7XHJcblxyXG4vLyBQUk9KRUNUUyBEQVRBXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0RhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IG5hbm9pZCgpLFxyXG4gICAgdGl0bGU6ICdqb2ItdXAgKOyngeyXheydhCDsnqHslrQpJyxcclxuICAgIGNvbnRlbnQ6ICfst6jsl4XspIDruYTsg53snYQg7JyE7ZWcIOydvOygleq0gOumrOyZgCDsoJXrs7TquLDroZ0g67CPIOqzteycoOulvCDsnITtlZwg7Leo7JeF6rSA66asIOybueyCrOydtO2KuCDwn5OdIOKcj++4jyAnLFxyXG4gICAgdGVybTogJzIwMjEtMDQuMTIgfiAyMDIxLTA1LjIxJyxcclxuICAgIHBlcnNvbm5lbDogJzHrqoUgKOqwnOyduO2UhOuhnOygne2KuCknLFxyXG4gICAgZnJvbnQ6ICdyZWFjdCwgbmV4dCBpbW1lciwgZmFrZXIsIHByb3AtdHlwZXMgcmVkdXgsIHJlZHV4LXNhZ2EgPGJyPlxcclxcbiBcXG4gZGQnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogbWFpbixcclxuICAgICAgICBjYXB0aW9uOiAn66mU7J247Y6Y7J207KeAJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBjYWwsXHJcbiAgICAgICAgY2FwdGlvbjogJ+y6mOumsOuNlCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogdG9kbyxcclxuICAgICAgICBjYXB0aW9uOiAn7Yis65GQ66as7Iqk7Yq4J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBtZW1vLFxyXG4gICAgICAgIGNhcHRpb246ICfrqZTrqqgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IGNvbW0sXHJcbiAgICAgICAgY2FwdGlvbjogJ+y7pOuupOuLiO2LsCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogc3RvcCxcclxuICAgICAgICBjYXB0aW9uOiAn7Iqk7YOR7JuM7LmYJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9