webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Projects/ProjectCard.js":
/*!************************************************!*\
  !*** ./src/components/Projects/ProjectCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\React\\hyemi-portfolio\\src\\components\\Projects\\ProjectCard.js",
    _this = undefined,
    _s = $RefreshSig$();




var ProjectCard = function ProjectCard(_ref) {
  _s();

  var project = _ref.project;
  var id = project.id,
      title = project.title,
      content = project.content,
      items = project.items;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animating = _useState2[0],
      setAnimating = _useState2[1];

  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  var slides = items.map(function (item) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselItem"], {
      onExiting: function onExiting() {
        return setAnimating(true);
      },
      onExited: function onExited() {
        return setAnimating(false);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: item.src,
        alt: item.altText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
        captionText: item.caption
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this)]
    }, item.src, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 6,
      sm: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "project-wrapper__text-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "project-wrapper__text",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "project-detail",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [content, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAC1C\uBC1C\uAE30\uAC04"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: term
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 31
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAC1C\uBC1C\uC778\uC6D0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: personnel
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 31
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uC0AC\uC6A9\uAE30\uC220"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Frontend"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 21
                }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, _this), "react, next immer, faker, prop-types redux, redux-saga ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 74
                }, _this), "styled-components, fortawesome, reactstrap chart.js, tui-calendar ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 85
                }, _this), "react-calendar, react-dnd, react-quill, react-color, react-bootstrap-sweetalert ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 99
                }, _this), "react-github-login, react-google-login webpack, babel, eslint, dotenv-webpack", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "Backend"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 23
                  }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 38
                  }, _this), "mysql, sequelize node, express, nodemon axios, cors, helmet, hpp bcrypt, cookie-parser, passport dotenv, morgan multer, ejs nodemailer"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAE30\uB2A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: ["\u25AA\uFE0F \uB2EC\uB825\uD615\uD0DC\uB85C \uC77C\uC815\uC744 \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, _this), " \u25AA\uFE0F \uB4DC\uB78D\uC564 \uB4DC\uB798\uADF8\uB97C \uC774\uC6A9\uD55C Todo-List \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this), " \u25AA\uFE0F \uBA54\uBAA8\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 45
                }, _this), "\u25AA\uFE0F \uC2A4\uD0D1\uC6CC\uCE58\uB97C \uD1B5\uD55C \uACF5\uBD80\uC2DC\uAC04 \uAE30\uB85D\uD558\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this), " \u25AA\uFE0F \uC815\uBCF4\uACF5\uC720\uB97C \uC704\uD55C \uCEE4\uBBA4\uB2C8\uD2F0 \uAE30\uB2A5"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          className: "cta-btn cta-btn--hero",
          href: "#",
          children: "See Live"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          className: "cta-btn text-color-main",
          href: "#",
          children: "Source Code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      lg: 6,
      sm: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
        activeIndex: activeIndex,
        next: next,
        previous: previous,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselIndicators"], {
          items: items,
          activeIndex: activeIndex,
          onClickHandler: goToIndex
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
          direction: "prev",
          directionText: "Previous",
          onClickHandler: previous
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
          direction: "next",
          directionText: "Next",
          onClickHandler: next
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(ProjectCard, "FYd3Lqf74+dQScd+D3/2SfzV0cE=");

_c = ProjectCard;
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

$RefreshReg$(_c, "ProjectCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wdWJsaWMvcHJvamVjdHNEYXRhLmpzIl0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvamVjdCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaXRlbXMiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iLCJzcmMiLCJhbHRUZXh0IiwiY2FwdGlvbiIsInRlcm0iLCJwZXJzb25uZWwiLCJwcm9qZWN0c0RhdGEiLCJuYW5vaWQiLCJtYWluIiwiY2FsIiwidG9kbyIsIm1lbW8iLCJjb21tIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFBQSxNQUMzQkMsRUFEMkIsR0FDR0QsT0FESCxDQUMzQkMsRUFEMkI7QUFBQSxNQUN2QkMsS0FEdUIsR0FDR0YsT0FESCxDQUN2QkUsS0FEdUI7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDR0gsT0FESCxDQUNoQkcsT0FEZ0I7QUFBQSxNQUNQQyxLQURPLEdBQ0dKLE9BREgsQ0FDUEksS0FETzs7QUFBQSxrQkFHR0Msc0RBQVEsQ0FBQyxDQUFELENBSFg7QUFBQSxNQUc1QkMsV0FINEI7QUFBQSxNQUdmQyxjQUhlOztBQUFBLG1CQUlERixzREFBUSxDQUFDLEtBQUQsQ0FKUDtBQUFBLE1BSTVCRyxTQUo0QjtBQUFBLE1BSWpCQyxZQUppQjs7QUFNbkMsTUFBTUMsSUFBSSxHQUFHLFNB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TUVuQixPQUFLLEVBQUUsQ0FDTDtBQUNFZSxPQUFHLEVBQUVPLDJEQURQO0FBRUVMLFdBQU8sRUFBRTtBQUZYLEdBREssRUFLTDtBQUNFRixPQUFHLEVBQUVRLDBEQURQO0FBRUVOLFdBQU8sRUFBRTtBQUZYLEdBTEssRUFTTDtBQUNFRixPQUFHLEVBQUVTLDJEQURQO0FBRUVQLFdBQU8sRUFBRTtBQUZYLEdBVEssRUFhTDtBQUNFRixPQUFHLEVBQUVVLDJEQURQO0FBRUVSLFdBQU8sRUFBRTtBQUZYLEdBYkssRUFpQkw7QUFDRUYsT0FBRyxFQUFFVywyREFEUDtBQUVFVCxXQUFPLEVBQUU7QUFGWCxHQWpCSyxFQXFCTDtBQUNFRixPQUFHLEVBQUVZLDJEQURQO0FBRUVWLFdBQU8sRUFBRTtBQUZYLEdBckJLO0FBTlQsQ0FEMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWRiNGNhODNiOTkyMGVkMDg5ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcm91c2VsLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsQ29udHJvbCwgQ2Fyb3VzZWxJbmRpY2F0b3JzLCBDYXJvdXNlbENhcHRpb24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFByb2plY3RDYXJkID0gKHsgcHJvamVjdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgdGl0bGUsIGNvbnRlbnQsIGl0ZW1zIH0gPSBwcm9qZWN0O1xyXG5cclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb1RvSW5kZXggPSAobmV3SW5kZXgpID0+IHtcclxuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuICAgIHNldEFjdGl2ZUluZGV4KG5ld0luZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgIDxDYXJvdXNlbEl0ZW0gb25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9IG9uRXhpdGVkPXsoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpfSBrZXk9e2l0ZW0uc3JjfT5cclxuICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cclxuICAgICAgPENhcm91c2VsQ2FwdGlvbiBjYXB0aW9uVGV4dD17aXRlbS5jYXB0aW9ufSAvPlxyXG4gICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIDxDb2wgbGc9ezZ9IHNtPXsxMn0+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlcl9fdGV4dC10aXRsZVwiPlxyXG4gICAgICAgICAgPGI+e3RpdGxlfTwvYj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyX190ZXh0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgPGR0PuqwnOuwnOq4sOqwhDwvZHQ+IDxkZD57dGVybX08L2RkPlxyXG4gICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgPGR0PuqwnOuwnOyduOybkDwvZHQ+IDxkZD57cGVyc29ubmVsfTwvZGQ+XHJcbiAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICA8ZHQ+7IKs7Jqp6riw7IigPC9kdD5cclxuICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAg44aNIDxiPkZyb250ZW5kPC9iPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgcmVhY3QsIG5leHQgaW1tZXIsIGZha2VyLCBwcm9wLXR5cGVzIHJlZHV4LCByZWR1eC1zYWdhIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZWQtY29tcG9uZW50cywgZm9ydGF3ZXNvbWUsIHJlYWN0c3RyYXAgY2hhcnQuanMsIHR1aS1jYWxlbmRhciA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgcmVhY3QtY2FsZW5kYXIsIHJlYWN0LWRuZCwgcmVhY3QtcXVpbGwsIHJlYWN0LWNvbG9yLCByZWFjdC1ib290c3RyYXAtc3dlZXRhbGVydCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgcmVhY3QtZ2l0aHViLWxvZ2luLCByZWFjdC1nb29nbGUtbG9naW4gd2VicGFjaywgYmFiZWwsIGVzbGludCwgZG90ZW52LXdlYnBhY2tcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIOOGjSA8Yj5CYWNrZW5kPC9iPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBteXNxbCwgc2VxdWVsaXplIG5vZGUsIGV4cHJlc3MsIG5vZGVtb24gYXhpb3MsIGNvcnMsIGhlbG1ldCwgaHBwIGJjcnlwdCwgY29va2llLXBhcnNlciwgcGFzc3BvcnRcclxuICAgICAgICAgICAgICAgICAgICBkb3RlbnYsIG1vcmdhbiBtdWx0ZXIsIGVqcyBub2RlbWFpbGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICA8ZHQ+6riw64qlPC9kdD5cclxuICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAg4paq77iPIOuLrOugpe2Yle2DnOuhnCDsnbzsoJXsnYQg6riw66Gd7ZWgIOyImCDsnojripQg6riw64qlXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPiDilqrvuI8g65Oc656N7JWkIOuTnOuemOq3uOulvCDsnbTsmqntlZwgVG9kby1MaXN0IOq4sOuKpVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz4g4paq77iPIOuplOuqqOulvCDsoIDsnqXtlaAg7IiYIOyeiOuKlCDquLDriqUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIOKWqu+4jyDsiqTtg5Hsm4zsuZjrpbwg7Ya17ZWcIOqzteu2gOyLnOqwhCDquLDroZ3tlZjripQg6riw64qlXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPiDilqrvuI8g7KCV67O06rO17Jyg66W8IOychO2VnCDsu6TrrqTri4jti7Ag6riw64qlXHJcbiAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiY3RhLWJ0biBjdGEtYnRuLS1oZXJvXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgU2VlIExpdmVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJjdGEtYnRuIHRleHQtY29sb3ItbWFpblwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFNvdXJjZSBDb2RlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPXs2fSBzbT17MTJ9PlxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG5leHQ9e25leHR9IHByZXZpb3VzPXtwcmV2aW91c30+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtpdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fSAvPlxyXG4gICAgICAgICAge3NsaWRlc31cclxuICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c30gLz5cclxuICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e25leHR9IC8+XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XHJcbiIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XHJcblxyXG5pbXBvcnQgbWFpbiBmcm9tICcuLi9hc3NldHMvaW1nL21haW4ucG5nJztcclxuaW1wb3J0IGNhbCBmcm9tICcuLi9hc3NldHMvaW1nL2NhbC5wbmcnO1xyXG5pbXBvcnQgdG9kbyBmcm9tICcuLi9hc3NldHMvaW1nL3RvZG8ucG5nJztcclxuaW1wb3J0IG1lbW8gZnJvbSAnLi4vYXNzZXRzL2ltZy9tZW1vLnBuZyc7XHJcbmltcG9ydCBjb21tIGZyb20gJy4uL2Fzc2V0cy9pbWcvY29tbS5wbmcnO1xyXG5pbXBvcnQgc3RvcCBmcm9tICcuLi9hc3NldHMvaW1nL3N0b3AucG5nJztcclxuXHJcbi8vIFBST0pFQ1RTIERBVEFcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogbmFub2lkKCksXHJcbiAgICB0aXRsZTogJ2pvYi11cCAo7KeB7JeF7J2EIOyeoeyWtCknLFxyXG4gICAgY29udGVudDogJ+y3qOyXheykgOu5hOyDneydhCDsnITtlZwg7J287KCV6rSA66as7JmAIOygleuztOq4sOuhnSDrsI8g6rO17Jyg66W8IOychO2VnCDst6jsl4XqtIDrpqwg7Ju57IKs7J207Yq4IPCfk50g4pyP77iPICcsXHJcbiAgICB0ZXJtOiAnMjAyMS0wNC4xMiB+IDIwMjEtMDUuMjEnLFxyXG4gICAgcGVyc29ubmVsOiAnMeuqhSAo6rCc7J247ZSE66Gc7KCd7Yq4KScsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBtYWluLFxyXG4gICAgICAgIGNhcHRpb246ICfrqZTsnbjtjpjsnbTsp4AnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IGNhbCxcclxuICAgICAgICBjYXB0aW9uOiAn7LqY66aw642UJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiB0b2RvLFxyXG4gICAgICAgIGNhcHRpb246ICftiKzrkZDrpqzsiqTtirgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IG1lbW8sXHJcbiAgICAgICAgY2FwdGlvbjogJ+uplOuqqCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogY29tbSxcclxuICAgICAgICBjYXB0aW9uOiAn7Luk666k64uI7YuwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBzdG9wLFxyXG4gICAgICAgIGNhcHRpb246ICfsiqTtg5Hsm4zsuZgnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=