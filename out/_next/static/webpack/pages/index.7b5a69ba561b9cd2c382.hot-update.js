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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["\uCDE8\uC5C5\uC900\uBE44\uC0DD\uC744 \uC704\uD55C \uC77C\uC815\uAD00\uB9AC\uC640 \uC815\uBCF4\uAE30\uB85D \uBC0F \uACF5\uC720\uB97C \uC704\uD55C \uCDE8\uC5C5\uAD00\uB9AC \uC6F9\uC0AC\uC774\uD2B8 \uD83D\uDCDD \u270F\uFE0F ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 61
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAC1C\uBC1C\uAE30\uAC04"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: "2021-04.12 ~ 2021-05.21"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 31
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAC1C\uBC1C\uC778\uC6D0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: "1\uBA85 (\uAC1C\uC778\uD504\uB85C\uC81D\uD2B8)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 31
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uC0AC\uC6A9\uAE30\uC220"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Frontend"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 21
                }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, _this), "react, next immer, faker, prop-types redux, redux-saga ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 74
                }, _this), "styled-components, fortawesome, reactstrap chart.js, tui-calendar ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 85
                }, _this), "react-calendar, react-dnd, react-quill, react-color, react-bootstrap-sweetalert ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 99
                }, _this), "react-github-login, react-google-login webpack, babel, eslint, dotenv-webpack", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "Backend"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 23
                  }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 38
                  }, _this), "mysql, sequelize node, express, nodemon axios, cors, helmet, hpp bcrypt, cookie-parser, passport dotenv, morgan multer, ejs nodemailer"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAE30\uB2A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: ["\u25AA\uFE0F \uB2EC\uB825\uD615\uD0DC\uB85C \uC77C\uC815\uC744 \uAE30\uB85D\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this), " \u25AA\uFE0F \uB4DC\uB78D\uC564 \uB4DC\uB798\uADF8\uB97C \uC774\uC6A9\uD55C Todo-List \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, _this), " \u25AA\uFE0F \uBA54\uBAA8\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 45
                }, _this), "\u25AA\uFE0F \uC2A4\uD0D1\uC6CC\uCE58\uB97C \uD1B5\uD55C \uACF5\uBD80\uC2DC\uAC04 \uAE30\uB85D\uD558\uB294 \uAE30\uB2A5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, _this), " \u25AA\uFE0F \uC815\uBCF4\uACF5\uC720\uB97C \uC704\uD55C \uCEE4\uBBA4\uB2C8\uD2F0 \uAE30\uB2A5"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
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
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          className: "cta-btn text-color-main",
          href: "#",
          children: "Source Code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
          lineNumber: 88,
          columnNumber: 11
        }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
          direction: "prev",
          directionText: "Previous",
          onClickHandler: previous
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
          direction: "next",
          directionText: "Next",
          onClickHandler: next
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdENhcmQuanMiXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9qZWN0IiwiaWQiLCJ0aXRsZSIsIml0ZW1zIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJtYXAiLCJpdGVtIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQUEsTUFDM0JDLEVBRDJCLEdBQ05ELE9BRE0sQ0FDM0JDLEVBRDJCO0FBQUEsTUFDdkJDLEtBRHVCLEdBQ05GLE9BRE0sQ0FDdkJFLEtBRHVCO0FBQUEsTUFDaEJDLEtBRGdCLEdBQ05ILE9BRE0sQ0FDaEJHLEtBRGdCOztBQUFBLGtCQUdHQyxzREFBUSxDQUFDLENBQUQsQ0FIWDtBQUFBLE1BRzVCQyxXQUg0QjtBQUFBLE1BR2ZDLGNBSGU7O0FBQUEsbUJBSURGLHNEQUFRLENBQUMsS0FBRCxDQUpQO0FBQUEsTUFJNUJHLFNBSjRCO0FBQUEsTUFJakJDLFlBSmlCOztBQU1uQyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFFBQUlGLFNBQUosRUFBZTtBQUNmLFFBQU1HLFNBQVMsR0FBR0wsV0FBVyxLQUFLRixLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUEvQixHQUFtQyxDQUFuQyxHQUF1Q04sV0FBVyxHQUFHLENBQXZFO0FBQ0FDLGtCQUFjLENBQUNJLFNBQUQsQ0FBZDtBQUNELEdBSkQ7O0FBTUEsTUFB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QUZILGVBR0UscUVBQUMsMERBQUQ7QUFBaUIsbUJBQVMsRUFBQyxNQUEzQjtBQUFrQyx1QkFBYSxFQUFDLFVBQWhEO0FBQTJELHdCQUFjLEVBQUVIO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSxxRUFBQywwREFBRDtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQWtDLHVCQUFhLEVBQUMsTUFBaEQ7QUFBdUQsd0JBQWMsRUFBRUg7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBNUZEOztHQUFNVixXOztLQUFBQSxXO0FBOEZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YjVhNjliYTU2MWI5Y2QyYzM4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2Fyb3VzZWwsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxDb250cm9sLCBDYXJvdXNlbEluZGljYXRvcnMsIENhcm91c2VsQ2FwdGlvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zdCB7IGlkLCB0aXRsZSwgaXRlbXMgfSA9IHByb2plY3Q7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcclxuICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgPENhcm91c2VsSXRlbSBvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX0gb25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9IGtleT17aXRlbS5zcmN9PlxyXG4gICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHRUZXh0fSAvPlxyXG4gICAgICA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IC8+XHJcbiAgICA8L0Nhcm91c2VsSXRlbT5cclxuICApKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBsZz17Nn0gc209ezEyfT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyX190ZXh0LXRpdGxlXCI+XHJcbiAgICAgICAgICA8Yj57dGl0bGV9PC9iPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJfX3RleHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAg7Leo7JeF7KSA67mE7IOd7J2EIOychO2VnCDsnbzsoJXqtIDrpqzsmYAg7KCV67O06riw66GdIOuwjyDqs7XsnKDrpbwg7JyE7ZWcIOy3qOyXheq0gOumrCDsm7nsgqzsnbTtirgg8J+TnSDinI/vuI8gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgPGR0PuqwnOuwnOq4sOqwhDwvZHQ+IDxkZD4yMDIxLTA0LjEyIH4gMjAyMS0wNS4yMTwvZGQ+XHJcbiAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICA8ZHQ+6rCc67Cc7J247JuQPC9kdD4gPGRkPjHrqoUgKOqwnOyduO2UhOuhnOygne2KuCk8L2RkPlxyXG4gICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgPGR0PuyCrOyaqeq4sOyIoDwvZHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgIOOGjSA8Yj5Gcm9udGVuZDwvYj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHJlYWN0LCBuZXh0IGltbWVyLCBmYWtlciwgcHJvcC10eXBlcyByZWR1eCwgcmVkdXgtc2FnYSA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgc3R5bGVkLWNvbXBvbmVudHMsIGZvcnRhd2Vzb21lLCByZWFjdHN0cmFwIGNoYXJ0LmpzLCB0dWktY2FsZW5kYXIgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHJlYWN0LWNhbGVuZGFyLCByZWFjdC1kbmQsIHJlYWN0LXF1aWxsLCByZWFjdC1jb2xvciwgcmVhY3QtYm9vdHN0cmFwLXN3ZWV0YWxlcnQgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHJlYWN0LWdpdGh1Yi1sb2dpbiwgcmVhY3QtZ29vZ2xlLWxvZ2luIHdlYnBhY2ssIGJhYmVsLCBlc2xpbnQsIGRvdGVudi13ZWJwYWNrXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICDjho0gPGI+QmFja2VuZDwvYj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgbXlzcWwsIHNlcXVlbGl6ZSBub2RlLCBleHByZXNzLCBub2RlbW9uIGF4aW9zLCBjb3JzLCBoZWxtZXQsIGhwcCBiY3J5cHQsIGNvb2tpZS1wYXJzZXIsIHBhc3Nwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgZG90ZW52LCBtb3JnYW4gbXVsdGVyLCBlanMgbm9kZW1haWxlclxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2RkPlxyXG4gICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgPGR0Puq4sOuKpTwvZHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGQ+XHJcbiAgICAgICAgICAgICAgICAgIOKWqu+4jyDri6zroKXtmJXtg5zroZwg7J287KCV7J2EIOq4sOuhne2VoCDsiJgg7J6I64qUIOq4sOuKpVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz4g4paq77iPIOuTnOuejeyVpCDrk5zrnpjqt7jrpbwg7J207Jqp7ZWcIFRvZG8tTGlzdCDquLDriqVcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+IOKWqu+4jyDrqZTrqqjrpbwg7KCA7J6l7ZWgIOyImCDsnojripQg6riw64qlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDilqrvuI8g7Iqk7YOR7JuM7LmY66W8IO2Gte2VnCDqs7XrtoDsi5zqsIQg6riw66Gd7ZWY64qUIOq4sOuKpVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz4g4paq77iPIOygleuztOqzteycoOulvCDsnITtlZwg7Luk666k64uI7YuwIOq4sOuKpVxyXG4gICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJjdGEtYnRuIGN0YS1idG4tLWhlcm9cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBTZWUgTGl2ZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImN0YS1idG4gdGV4dC1jb2xvci1tYWluXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgU291cmNlIENvZGVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbGc9ezZ9IHNtPXsxMn0+XHJcbiAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gbmV4dD17bmV4dH0gcHJldmlvdXM9e3ByZXZpb3VzfT5cclxuICAgICAgICAgIDxDYXJvdXNlbEluZGljYXRvcnMgaXRlbXM9e2l0ZW1zfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9IC8+XHJcbiAgICAgICAgICB7c2xpZGVzfVxyXG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJwcmV2XCIgZGlyZWN0aW9uVGV4dD1cIlByZXZpb3VzXCIgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfSAvPlxyXG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJuZXh0XCIgZGlyZWN0aW9uVGV4dD1cIk5leHRcIiBvbkNsaWNrSGFuZGxlcj17bmV4dH0gLz5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==