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
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/context */ "./src/context/context.js");


var _jsxFileName = "C:\\React\\hyemi-portfolio\\src\\components\\Projects\\Projects.js",
    _this = undefined,
    _s = $RefreshSig$();





var Projects = function Projects() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
      projects = _useContext.projects;

  var items = projects[0].items;

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "projects",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "page-title",
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 6,
          sm: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "project-wrapper__text-title",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "job-up (\uC9C1\uC5C5\uC744 \uC7A1\uC5B4)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "project-wrapper__text",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "project-detail",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\uCDE8\uC5C5\uC900\uBE44\uC0DD\uC744 \uC704\uD55C \uC77C\uC815\uAD00\uB9AC\uC640 \uC815\uBCF4\uAE30\uB85D \uBC0F \uACF5\uC720\uB97C \uC704\uD55C \uCDE8\uC5C5\uAD00\uB9AC \uC6F9\uC0AC\uC774\uD2B8 \uD83D\uDCDD \u270F\uFE0F ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 65
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                    children: "\uAC1C\uBC1C\uAE30\uAC04"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                    children: "2021-04.12 ~ 2021-05.21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 35
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                    children: "\uAC1C\uBC1C\uC778\uC6D0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 21
                  }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                    children: "1\uBA85 (\uAC1C\uC778\uD504\uB85C\uC81D\uD2B8)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 35
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                    children: "\uC0AC\uC6A9\uAE30\uC220"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                    children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      children: "Frontend"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 25
                    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 41
                    }, _this), front, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                        children: "Backend"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 27
                      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 42
                      }, _this), "mysql, sequelize node, express, nodemon axios, cors, helmet, hpp bcrypt, cookie-parser, passport dotenv, morgan multer, ejs nodemailer"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                    children: "\uAE30\uB2A5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                    children: ["\u25AA\uFE0F \uB2EC\uB825\uD615\uD0DC\uB85C \uC77C\uC815\uC744 \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, _this), " \u25AA\uFE0F \uB4DC\uB78D\uC564 \uB4DC\uB798\uADF8\uB97C \uC774\uC6A9\uD55C Todo-List \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 23
                    }, _this), " \u25AA\uFE0F \uBA54\uBAA8\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 49
                    }, _this), "\u25AA\uFE0F \uC2A4\uD0D1\uC6CC\uCE58\uB97C \uD1B5\uD55C \uACF5\uBD80\uC2DC\uAC04 \uAE30\uB85D\uD558\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, _this), " \u25AA\uFE0F \uC815\uBCF4\uACF5\uC720\uB97C \uC704\uD55C \uCEE4\uBBA4\uB2C8\uD2F0 \uAE30\uB2A5"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              className: "cta-btn cta-btn--hero",
              href: "#",
              children: "See Live"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              className: "cta-btn text-color-main",
              href: "#",
              children: "Source Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
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
              lineNumber: 94,
              columnNumber: 15
            }, _this), items.map(function (item) {
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
                  lineNumber: 97,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
                  captionText: item.caption
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, _this)]
              }, item.src, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
              direction: "prev",
              directionText: "Previous",
              onClickHandler: previous
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
              direction: "next",
              directionText: "Next",
              onClickHandler: next
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_s(Projects, "tQYMN/OGfdwTOvbI5lThcY3QyAg=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJ1c2VDb250ZXh0IiwiUG9ydGZvbGlvQ29udGV4dCIsInByb2plY3RzIiwiaXRlbXMiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsImZyb250IiwibWFwIiwiaXRlbSIsInNyYyIsImFsdFRleHQiLCJjYXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsb0JBQ0FDLHdEQUFVLENBQUNDLHdEQUFELENBRFY7QUFBQSxNQUNiQyxRQURhLGVBQ2JBLFFBRGE7O0FBQUEsTUFFYkMsS0FGYSxHQUVIRCxRQUFRLENBQUMsQ0FBRCxDQUZMLENBRWJDLEtBRmE7O0FBQUEsa0JBSWlCQyxzREFBUSxDQUFDLENBQUQsQ0FKekI7QUFBQSxNQUlkQyxXQUpjO0FBQUEsTUFJREMsY0FKQzs7QUFBQSxtQkFLYUYsc0RBQVEsQ0FBQyxLQUFELENBTHJCO0FBQUEsTUFLZEcsU0FMYztBQUFBLE1BS0hDLFlBTEc7O0FBT3JCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsUUFBSUYsU0FBSixFQUFlO0FBQ2YsUUFBTUcsU0FBUyxHQUFHTCxXQUFXLEtBQUtGLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQS9CLEdBQW1DLENBQW5DLEdBQXVDTixXQUFXLEdBQUcsQ0FBdkU7QUFDQUMsa0JBQWMsQ0FBQ0ksU0FBRCxDQUFkO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFB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MERBQUQ7QUFBaUIsdUJBQVMsRUFBQyxNQUEzQjtBQUFrQywyQkFBYSxFQUFDLFVBQWhEO0FBQTJELDRCQUFjLEVBQUVOO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRSxxRUFBQywwREFBRDtBQUFpQix1QkFBUyxFQUFDLE1BQTNCO0FBQWtDLDJCQUFhLEVBQUMsTUFBaEQ7QUFBdUQsNEJBQWMsRUFBRUg7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzRUQsQ0E5RkQ7O0dBQU1WLFE7O0tBQUFBLFE7QUFnR1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhYTcwNmFhZWQwNDU2NDRhMmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgQ2Fyb3VzZWwsXHJcbiAgQ2Fyb3VzZWxJdGVtLFxyXG4gIENhcm91c2VsQ29udHJvbCxcclxuICBDYXJvdXNlbEluZGljYXRvcnMsXHJcbiAgQ2Fyb3VzZWxDYXB0aW9uXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgUG9ydGZvbGlvQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2NvbnRleHQnO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9qZWN0cyB9ID0gdXNlQ29udGV4dChQb3J0Zm9saW9Db250ZXh0KTtcclxuICBjb25zdCB7IGl0ZW1zIH0gPSBwcm9qZWN0c1swXTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcclxuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSAwID8gaXRlbXMubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcclxuICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlByb2plY3RzPC9oMz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz17Nn0gc209ezEyfT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlcl9fdGV4dC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxiPmpvYi11cCAo7KeB7JeF7J2EIOyeoeyWtCk8L2I+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIOy3qOyXheykgOu5hOyDneydhCDsnITtlZwg7J287KCV6rSA66as7JmAIOygleuztOq4sOuhnSDrsI8g6rO17Jyg66W8IOychO2VnCDst6jsl4XqtIDrpqwg7Ju57IKs7J207Yq4IPCfk50g4pyP77iPIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdD7qsJzrsJzquLDqsIQ8L2R0PiA8ZGQ+MjAyMS0wNC4xMiB+IDIwMjEtMDUuMjE8L2RkPlxyXG4gICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGR0PuqwnOuwnOyduOybkDwvZHQ+IDxkZD4x66qFICjqsJzsnbjtlITroZzsoJ3tirgpPC9kZD5cclxuICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdD7sgqzsmqnquLDsiKA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgIOOGjSA8Yj5Gcm9udGVuZDwvYj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZnJvbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDjho0gPGI+QmFja2VuZDwvYj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15c3FsLCBzZXF1ZWxpemUgbm9kZSwgZXhwcmVzcywgbm9kZW1vbiBheGlvcywgY29ycywgaGVsbWV0LCBocHAgYmNyeXB0LCBjb29raWUtcGFyc2VyLCBwYXNzcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RlbnYsIG1vcmdhbiBtdWx0ZXIsIGVqcyBub2RlbWFpbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdD7quLDriqU8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgIOKWqu+4jyDri6zroKXtmJXtg5zroZwg7J287KCV7J2EIOq4sOuhne2VoCDsiJgg7J6I64qUIOq4sOuKpVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+IOKWqu+4jyDrk5zrno3slaQg65Oc656Y6re466W8IOydtOyaqe2VnCBUb2RvLUxpc3Qg6riw64qlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4g4paq77iPIOuplOuqqOulvCDsoIDsnqXtlaAg7IiYIOyeiOuKlCDquLDriqUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICDilqrvuI8g7Iqk7YOR7JuM7LmY66W8IO2Gte2VnCDqs7XrtoDsi5zqsIQg6riw66Gd7ZWY64qUIOq4sOuKpVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+IOKWqu+4jyDsoJXrs7Tqs7XsnKDrpbwg7JyE7ZWcIOy7pOuupOuLiO2LsCDquLDriqVcclxuICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJjdGEtYnRuIGN0YS1idG4tLWhlcm9cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgU2VlIExpdmVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImN0YS1idG4gdGV4dC1jb2xvci1tYWluXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIFNvdXJjZSBDb2RlXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz17Nn0gc209ezEyfT5cclxuICAgICAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gbmV4dD17bmV4dH0gcHJldmlvdXM9e3ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtpdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fSAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW0gb25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9IG9uRXhpdGVkPXsoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpfSBrZXk9e2l0ZW0uc3JjfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsQ2FwdGlvbiBjYXB0aW9uVGV4dD17aXRlbS5jYXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJwcmV2XCIgZGlyZWN0aW9uVGV4dD1cIlByZXZpb3VzXCIgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfSAvPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e25leHR9IC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9