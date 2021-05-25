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
    _this = undefined;



 // eslint-disable-next-line arrow-body-style

var Projects = function Projects() {
  var _s = $RefreshSig$();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    id: "projects",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "page-title",
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), _public_projectsData__WEBPACK_IMPORTED_MODULE_3__["projectsData"].map(_s(function (project) {
        _s();

        var id = project.id,
            title = project.title,
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
              lineNumber: 46,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
              captionText: item.caption
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)]
          }, item.src, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
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
                children: "job-up (\uC9C1\uC5C5\uC744 \uC7A1\uC5B4)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "project-wrapper__text",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "project-detail",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\uCDE8\uC5C5\uC900\uBE44\uC0DD\uC744 \uC704\uD55C \uC77C\uC815\uAD00\uB9AC\uC640 \uC815\uBCF4\uAE30\uB85D \uBC0F \uACF5\uC720\uB97C \uC704\uD55C \uCDE8\uC5C5\uAD00\uB9AC \uC6F9\uC0AC\uC774\uD2B8 \uD83D\uDCDD \u270F\uFE0F ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 69
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uAC1C\uBC1C\uAE30\uAC04"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 25
                    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: "2021-04.12 ~ 2021-05.21"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 39
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uAC1C\uBC1C\uC778\uC6D0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 25
                    }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: "1\uBA85 (\uAC1C\uC778\uD504\uB85C\uC81D\uD2B8)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 39
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uC0AC\uC6A9\uAE30\uC220"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                        children: "Frontend"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 29
                      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 45
                      }, _this), "react, next immer, faker, prop-types redux, redux-saga ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 82
                      }, _this), "styled-components, fortawesome, reactstrap chart.js, tui-calendar ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 93
                      }, _this), "react-calendar, react-dnd, react-quill, react-color, react-bootstrap-sweetalert ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 107
                      }, _this), "react-github-login, react-google-login webpack, babel, eslint, dotenv-webpack", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                          children: "Backend"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 31
                        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 46
                        }, _this), "mysql, sequelize node, express, nodemon axios, cors, helmet, hpp bcrypt, cookie-parser, passport dotenv, morgan multer, ejs nodemailer"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                      children: "\uAE30\uB2A5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                      children: ["\u25AA\uFE0F \uB2EC\uB825\uD615\uD0DC\uB85C \uC77C\uC815\uC744 \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 27
                      }, _this), " \u25AA\uFE0F \uB4DC\uB78D\uC564 \uB4DC\uB798\uADF8\uB97C \uC774\uC6A9\uD55C Todo-List \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 27
                      }, _this), " \u25AA\uFE0F \uBA54\uBAA8\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 53
                      }, _this), "\u25AA\uFE0F \uC2A4\uD0D1\uC6CC\uCE58\uB97C \uD1B5\uD55C \uACF5\uBD80\uC2DC\uAC04 \uAE30\uB85D\uD558\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 27
                      }, _this), " \u25AA\uFE0F \uC815\uBCF4\uACF5\uC720\uB97C \uC704\uD55C \uCEE4\uBBA4\uB2C8\uD2F0 \uAE30\uB2A5"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cta-btn cta-btn--hero",
                href: "#",
                children: "See Live"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cta-btn text-color-main",
                href: "#",
                children: "Source Code"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
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
                lineNumber: 106,
                columnNumber: 19
              }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this);
      }, "FYd3Lqf74+dQScd+D3/2SfzV0cE="))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9qZWN0c0RhdGEiLCJtYXAiLCJwcm9qZWN0IiwiaWQiLCJ0aXRsZSIsIml0ZW1zIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJpdGVtIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBYUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixzQkFDRTtBQUFTLE1BQUUsRUFBQyxVQUFaO0FBQUEsMkJBQ0UscUVBQUMsb0RBQUQ7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdDLGlFQUFZLENBQUNDLEdBQWIsSUFBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQUE7O0FBQUEsWUFDckJDLEVBRHFCLEdBQ0FELE9BREEsQ0FDckJDLEVBRHFCO0FBQUEsWUFDakJDLEtBRGlCLEdBQ0FGLE9BREEsQ0FDakJFLEtBRGlCO0FBQUEsWUFDVkMsS0FEVSxHQUNBSCxPQURBLENBQ1ZHLEtBRFU7O0FBQUEsd0JBR1NDLHNEQUFRLENBQUMsQ0FBRCxDQUhqQjtBQUFBLFlBR3RCQyxXQUhzQjtBQUFBLFlBR1RDLGNBSFM7O0FBQUEseUJBSUtGLHNEQUFRLENBQUMsS0FBRCxDQUpiO0FBQUEsWUFJdEJHLFNBSnNCO0FBQUEsWUFJWEMsWUFKVzs7QUFNN0IsWUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixjQUFJ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LEVBQUVJLElBQTFDO0FBQWdELHNCQUFRLEVBQUVHLFFBQTFEO0FBQUEsc0NBQ0UscUVBQUMsNkRBQUQ7QUFBb0IscUJBQUssRUFBRVQsS0FBM0I7QUFBa0MsMkJBQVcsRUFBRUUsV0FBL0M7QUFBNEQsOEJBQWMsRUFBRVE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVHRSxNQUZILGVBR0UscUVBQUMsMERBQUQ7QUFBaUIseUJBQVMsRUFBQyxNQUEzQjtBQUFrQyw2QkFBYSxFQUFDLFVBQWhEO0FBQTJELDhCQUFjLEVBQUVIO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFJRSxxRUFBQywwREFBRDtBQUFpQix5QkFBUyxFQUFDLE1BQTNCO0FBQWtDLDZCQUFhLEVBQUMsTUFBaEQ7QUFBdUQsOEJBQWMsRUFBRUg7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUErREQsT0E3RkEsa0NBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUdELENBdEdEOztLQUFNWixRO0FBd0dTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NmNkODE0YzFkMjI5ZTdmNDdhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIENhcm91c2VsLFxyXG4gIENhcm91c2VsSXRlbSxcclxuICBDYXJvdXNlbENvbnRyb2wsXHJcbiAgQ2Fyb3VzZWxJbmRpY2F0b3JzLFxyXG4gIENhcm91c2VsQ2FwdGlvblxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgcHJvamVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vcHVibGljL3Byb2plY3RzRGF0YSc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+UHJvamVjdHM8L2gzPlxyXG4gICAgICAgIHtwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGlkLCB0aXRsZSwgaXRlbXMgfSA9IHByb2plY3Q7XHJcblxyXG4gICAgICAgICAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICAgIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSAwID8gaXRlbXMubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPENhcm91c2VsSXRlbSBvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX0gb25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9IGtleT17aXRlbS5zcmN9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdFRleHR9IC8+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsQ2FwdGlvbiBjYXB0aW9uVGV4dD17aXRlbS5jYXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBsZz17Nn0gc209ezEyfT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJfX3RleHQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+am9iLXVwICjsp4Hsl4XsnYQg7J6h7Ja0KTwvYj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qtd3JhcHBlcl9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDst6jsl4XspIDruYTsg53snYQg7JyE7ZWcIOydvOygleq0gOumrOyZgCDsoJXrs7TquLDroZ0g67CPIOqzteycoOulvCDsnITtlZwg7Leo7JeF6rSA66asIOybueyCrOydtO2KuCDwn5OdIOKcj++4jyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+6rCc67Cc6riw6rCEPC9kdD4gPGRkPjIwMjEtMDQuMTIgfiAyMDIxLTA1LjIxPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkdD7qsJzrsJzsnbjsm5A8L2R0PiA8ZGQ+MeuqhSAo6rCc7J247ZSE66Gc7KCd7Yq4KTwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZHQ+7IKs7Jqp6riw7IigPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOOGjSA8Yj5Gcm9udGVuZDwvYj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QsIG5leHQgaW1tZXIsIGZha2VyLCBwcm9wLXR5cGVzIHJlZHV4LCByZWR1eC1zYWdhIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlZC1jb21wb25lbnRzLCBmb3J0YXdlc29tZSwgcmVhY3RzdHJhcCBjaGFydC5qcywgdHVpLWNhbGVuZGFyIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LWNhbGVuZGFyLCByZWFjdC1kbmQsIHJlYWN0LXF1aWxsLCByZWFjdC1jb2xvciwgcmVhY3QtYm9vdHN0cmFwLXN3ZWV0YWxlcnQgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtZ2l0aHViLWxvZ2luLCByZWFjdC1nb29nbGUtbG9naW4gd2VicGFjaywgYmFiZWwsIGVzbGludCwgZG90ZW52LXdlYnBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOOGjSA8Yj5CYWNrZW5kPC9iPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15c3FsLCBzZXF1ZWxpemUgbm9kZSwgZXhwcmVzcywgbm9kZW1vbiBheGlvcywgY29ycywgaGVsbWV0LCBocHAgYmNyeXB0LCBjb29raWUtcGFyc2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3BvcnQgZG90ZW52LCBtb3JnYW4gbXVsdGVyLCBlanMgbm9kZW1haWxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkdD7quLDriqU8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg4paq77iPIOuLrOugpe2Yle2DnOuhnCDsnbzsoJXsnYQg6riw66Gd7ZWgIOyImCDsnojripQg6riw64qlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+IOKWqu+4jyDrk5zrno3slaQg65Oc656Y6re466W8IOydtOyaqe2VnCBUb2RvLUxpc3Qg6riw64qlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+IOKWqu+4jyDrqZTrqqjrpbwg7KCA7J6l7ZWgIOyImCDsnojripQg6riw64qlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOKWqu+4jyDsiqTtg5Hsm4zsuZjrpbwg7Ya17ZWcIOqzteu2gOyLnOqwhCDquLDroZ3tlZjripQg6riw64qlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+IOKWqu+4jyDsoJXrs7Tqs7XsnKDrpbwg7JyE7ZWcIOy7pOuupOuLiO2LsCDquLDriqVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImN0YS1idG4gY3RhLWJ0bi0taGVyb1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VlIExpdmVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiY3RhLWJ0biB0ZXh0LWNvbG9yLW1haW5cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNvdXJjZSBDb2RlXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgbGc9ezZ9IHNtPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBuZXh0PXtuZXh0fSBwcmV2aW91cz17cHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtpdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fSAvPlxyXG4gICAgICAgICAgICAgICAgICB7c2xpZGVzfVxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cInByZXZcIiBkaXJlY3Rpb25UZXh0PVwiUHJldmlvdXNcIiBvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e25leHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==