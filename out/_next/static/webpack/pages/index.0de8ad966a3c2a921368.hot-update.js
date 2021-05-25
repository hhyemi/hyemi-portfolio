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
/* harmony import */ var _public_projectsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/projectsData */ "./src/public/projectsData.js");


var _jsxFileName = "C:\\React\\hyemi-portfolio\\src\\components\\Projects\\Projects.js",
    _this = undefined,
    _s = $RefreshSig$();



 // eslint-disable-next-line arrow-body-style

var Projects = function Projects() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animating = _useState2[0],
      setAnimating = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "projects",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "page-title",
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), _public_projectsData__WEBPACK_IMPORTED_MODULE_3__["projectsData"].map(function (project) {
        var id = project.id,
            title = project.title,
            items = project.items;

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
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
              captionText: item.caption
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)]
          }, item.src, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
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
                lineNumber: 54,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "project-wrapper__text",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "project-detail",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\uCDE8\uC5C5\uC900\uBE44\uC0DD\uC744 \uC704\uD55C \uC77C\uC815\uAD00\uB9AC\uC640 \uC815\uBCF4\uAE30\uB85D \uBC0F \uACF5\uC720\uB97C \uC704\uD55C \uCDE8\uC5C5\uAD00\uB9AC \uC6F9\uC0AC\uC774\uD2B8 \uD83D\uDCDD \u270F\uFE0F ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 69
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uAC1C\uBC1C\uAE30\uAC04"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 25
                    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: "2021-04.12 ~ 2021-05.21"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 39
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uAC1C\uBC1C\uC778\uC6D0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 25
                    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: "1\uBA85 (\uAC1C\uC778\uD504\uB85C\uC81D\uD2B8)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 39
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uC0AC\uC6A9\uAE30\uC220"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                        children: "Frontend"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 29
                      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 45
                      }, _this), "react, next immer, faker, prop-types redux, redux-saga ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 82
                      }, _this), "styled-components, fortawesome, reactstrap chart.js, tui-calendar ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 93
                      }, _this), "react-calendar, react-dnd, react-quill, react-color, react-bootstrap-sweetalert ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 107
                      }, _this), "react-github-login, react-google-login webpack, babel, eslint, dotenv-webpack", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                          children: "Backend"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 31
                        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 46
                        }, _this), "mysql, sequelize node, express, nodemon axios, cors, helmet, hpp bcrypt, cookie-parser, passport dotenv, morgan multer, ejs nodemailer"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uAE30\uB2A5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: ["\u25AA\uFE0F \uB2EC\uB825\uD615\uD0DC\uB85C \uC77C\uC815\uC744 \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 27
                      }, _this), " \u25AA\uFE0F \uB4DC\uB78D\uC564 \uB4DC\uB798\uADF8\uB97C \uC774\uC6A9\uD55C Todo-List \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 27
                      }, _this), " \u25AA\uFE0F \uBA54\uBAA8\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 53
                      }, _this), "\u25AA\uFE0F \uC2A4\uD0D1\uC6CC\uCE58\uB97C \uD1B5\uD55C \uACF5\uBD80\uC2DC\uAC04 \uAE30\uB85D\uD558\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 27
                      }, _this), " \u25AA\uFE0F \uC815\uBCF4\uACF5\uC720\uB97C \uC704\uD55C \uCEE4\uBBA4\uB2C8\uD2F0 \uAE30\uB2A5"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cta-btn cta-btn--hero",
                href: "#",
                children: "See Live"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cta-btn text-color-main",
                href: "#",
                children: "Source Code"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
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
                lineNumber: 105,
                columnNumber: 19
              }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(Projects, "FYd3Lqf74+dQScd+D3/2SfzV0cE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJwcm9qZWN0c0RhdGEiLCJtYXAiLCJwcm9qZWN0IiwiaWQiLCJ0aXRsZSIsIml0ZW1zIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJpdGVtIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQWFBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsQ0FBRCxDQUR6QjtBQUFBLE1BQ2RDLFdBRGM7QUFBQSxNQUNEQyxjQURDOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEtBQUQsQ0FGckI7QUFBQSxNQUVkRyxTQUZjO0FBQUEsTUFFSEMsWUFGRzs7QUFHckIsc0JBQ0U7QUFBUyxNQUFFLEVBQUMsVUFBWjtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHQyxpRUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUFBLFlBQ3JCQyxFQURxQixHQUNBRCxPQURBLENBQ3JCQyxFQURxQjtBQUFBLFlBQ2pCQyxLQURpQixHQUNBRixPQURBLENBQ2pCRSxLQURpQjtBQUFBLFlBQ1ZDLEtBRFUsR0FDQUgsT0FEQSxDQUNWRyxLQURVOztBQUc3QixZQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLGNBQUlSLFNBQUos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RUFBRVUsSUFBMUM7QUFBZ0Qsc0JBQVEsRUFBRUcsUUFBMUQ7QUFBQSxzQ0FDRSxxRUFBQyw2REFBRDtBQUFvQixxQkFBSyxFQUFFSixLQUEzQjtBQUFrQywyQkFBVyxFQUFFVCxXQUEvQztBQUE0RCw4QkFBYyxFQUFFYztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdFLE1BRkgsZUFHRSxxRUFBQywwREFBRDtBQUFpQix5QkFBUyxFQUFDLE1BQTNCO0FBQWtDLDZCQUFhLEVBQUMsVUFBaEQ7QUFBMkQsOEJBQWMsRUFBRUg7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRixlQUlFLHFFQUFDLDBEQUFEO0FBQWlCLHlCQUFTLEVBQUMsTUFBM0I7QUFBa0MsNkJBQWEsRUFBQyxNQUFoRDtBQUF1RCw4QkFBYyxFQUFFSDtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQStERCxPQTFGQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtHRCxDQXJHRDs7R0FBTVosUTs7S0FBQUEsUTtBQXVHU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGRlOGFkOTY2YTNjMmE5MjEzNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBDYXJvdXNlbCxcclxuICBDYXJvdXNlbEl0ZW0sXHJcbiAgQ2Fyb3VzZWxDb250cm9sLFxyXG4gIENhcm91c2VsSW5kaWNhdG9ycyxcclxuICBDYXJvdXNlbENhcHRpb25cclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IHByb2plY3RzRGF0YSB9IGZyb20gJy4uLy4uL3B1YmxpYy9wcm9qZWN0c0RhdGEnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5Qcm9qZWN0czwvaDM+XHJcbiAgICAgICAge3Byb2plY3RzRGF0YS5tYXAoKHByb2plY3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBpdGVtcyB9ID0gcHJvamVjdDtcclxuXHJcbiAgICAgICAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBnb1RvSW5kZXggPSAobmV3SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIG9uRXhpdGluZz17KCkgPT4gc2V0QW5pbWF0aW5nKHRydWUpfSBvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX0ga2V5PXtpdGVtLnNyY30+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXs2fSBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlcl9fdGV4dC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Yj57dGl0bGV9PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIOy3qOyXheykgOu5hOyDneydhCDsnITtlZwg7J287KCV6rSA66as7JmAIOygleuztOq4sOuhnSDrsI8g6rO17Jyg66W8IOychO2VnCDst6jsl4XqtIDrpqwg7Ju57IKs7J207Yq4IPCfk50g4pyP77iPIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkdD7qsJzrsJzquLDqsIQ8L2R0PiA8ZGQ+MjAyMS0wNC4xMiB+IDIwMjEtMDUuMjE8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGR0PuqwnOuwnOyduOybkDwvZHQ+IDxkZD4x66qFICjqsJzsnbjtlITroZzsoJ3tirgpPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkdD7sgqzsmqnquLDsiKA8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg44aNIDxiPkZyb250ZW5kPC9iPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdCwgbmV4dCBpbW1lciwgZmFrZXIsIHByb3AtdHlwZXMgcmVkdXgsIHJlZHV4LXNhZ2EgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVkLWNvbXBvbmVudHMsIGZvcnRhd2Vzb21lLCByZWFjdHN0cmFwIGNoYXJ0LmpzLCB0dWktY2FsZW5kYXIgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtY2FsZW5kYXIsIHJlYWN0LWRuZCwgcmVhY3QtcXVpbGwsIHJlYWN0LWNvbG9yLCByZWFjdC1ib290c3RyYXAtc3dlZXRhbGVydCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdC1naXRodWItbG9naW4sIHJlYWN0LWdvb2dsZS1sb2dpbiB3ZWJwYWNrLCBiYWJlbCwgZXNsaW50LCBkb3RlbnYtd2VicGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg44aNIDxiPkJhY2tlbmQ8L2I+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlzcWwsIHNlcXVlbGl6ZSBub2RlLCBleHByZXNzLCBub2RlbW9uIGF4aW9zLCBjb3JzLCBoZWxtZXQsIGhwcCBiY3J5cHQsIGNvb2tpZS1wYXJzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzcG9ydCBkb3RlbnYsIG1vcmdhbiBtdWx0ZXIsIGVqcyBub2RlbWFpbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGR0Puq4sOuKpTwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDilqrvuI8g64us66Cl7ZiV7YOc66GcIOydvOygleydhCDquLDroZ3tlaAg7IiYIOyeiOuKlCDquLDriqVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4g4paq77iPIOuTnOuejeyVpCDrk5zrnpjqt7jrpbwg7J207Jqp7ZWcIFRvZG8tTGlzdCDquLDriqVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4g4paq77iPIOuplOuqqOulvCDsoIDsnqXtlaAg7IiYIOyeiOuKlCDquLDriqUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg4paq77iPIOyKpO2DkeybjOy5mOulvCDthrXtlZwg6rO167aA7Iuc6rCEIOq4sOuhne2VmOuKlCDquLDriqVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4g4paq77iPIOygleuztOqzteycoOulvCDsnITtlZwg7Luk666k64uI7YuwIOq4sOuKpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiY3RhLWJ0biBjdGEtYnRuLS1oZXJvXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZWUgTGl2ZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJjdGEtYnRuIHRleHQtY29sb3ItbWFpblwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU291cmNlIENvZGVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17Nn0gc209ezEyfT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG5leHQ9e25leHR9IHByZXZpb3VzPXtwcmV2aW91c30+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEluZGljYXRvcnMgaXRlbXM9e2l0ZW1zfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgICAgIHtzbGlkZXN9XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c30gLz5cclxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJuZXh0XCIgZGlyZWN0aW9uVGV4dD1cIk5leHRcIiBvbkNsaWNrSGFuZGxlcj17bmV4dH0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9