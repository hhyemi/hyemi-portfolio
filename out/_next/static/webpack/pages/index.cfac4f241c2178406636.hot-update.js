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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\React\\hyemi-portfolio\\src\\components\\Projects\\ProjectCard.js",
    _this = undefined,
    _s = $RefreshSig$();





var ProjectCard = function ProjectCard(_ref) {
  _s();

  var project = _ref.project;
  var id = project.id,
      title = project.title,
      content = project.content,
      items = project.items,
      term = project.term,
      personnel = project.personnel,
      front = project.front,
      back = project.back,
      func = project.func;

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselItem"], {
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
        lineNumber: 30,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselCaption"], {
        captionText: item.caption
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, _this)]
    }, item.src, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      sm: 12,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "project-wrapper__text-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "project-wrapper__text",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "project-detail",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [content, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAC1C\uBC1C\uAE30\uAC04"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: term
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 31
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAC1C\uBC1C\uC778\uC6D0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: personnel
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 31
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uC0AC\uC6A9\uAE30\uC220"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Frontend"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 21
                }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, _this), front, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["\u318D ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "Backend"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 23
                  }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 38
                  }, _this), back]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dl", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dt", {
                children: "\uAE30\uB2A5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("dd", {
                children: func
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          className: "cta-btn cta-btn--hero",
          href: "#",
          children: "See Live"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          className: "cta-btn text-color-main",
          href: "#",
          children: "Source Code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      sm: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
        activeIndex: activeIndex,
        next: next,
        previous: previous,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselIndicators"], {
          items: items,
          activeIndex: activeIndex,
          onClickHandler: goToIndex
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselControl"], {
          direction: "prev",
          directionText: "Previous",
          onClickHandler: previous
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselControl"], {
          direction: "next",
          directionText: "Next",
          onClickHandler: next
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(ProjectCard, "FYd3Lqf74+dQScd+D3/2SfzV0cE=");

_c = ProjectCard;
ProjectCard.propTypes = {
  project: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    term: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    personnel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    front: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    back: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    func: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  }).isRequired
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdENhcmQuanMiXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9qZWN0IiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJpdGVtcyIsInRlcm0iLCJwZXJzb25uZWwiLCJmcm9udCIsImJhY2siLCJmdW5jIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJtYXAiLCJpdGVtIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQUEsTUFDM0JDLEVBRDJCLEdBQ3VDRCxPQUR2QyxDQUMzQkMsRUFEMkI7QUFBQSxNQUN2QkMsS0FEdUIsR0FDdUNGLE9BRHZDLENBQ3ZCRSxLQUR1QjtBQUFBLE1BQ2hCQyxPQURnQixHQUN1Q0gsT0FEdkMsQ0FDaEJHLE9BRGdCO0FBQUEsTUFDUEMsS0FETyxHQUN1Q0osT0FEdkMsQ0FDUEksS0FETztBQUFBLE1BQ0FDLElBREEsR0FDdUNMLE9BRHZDLENBQ0FLLElBREE7QUFBQSxNQUNNQyxTQUROLEdBQ3VDTixPQUR2QyxDQUNNTSxTQUROO0FBQUEsTUFDaUJDLEtBRGpCLEdBQ3VDUCxPQUR2QyxDQUNpQk8sS0FEakI7QUFBQSxNQUN3QkMsSUFEeEIsR0FDdUNSLE9BRHZDLENBQ3dCUSxJQUR4QjtBQUFBLE1B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QUFTLENBQUNFLE1BUk87QUFTdkIxQixTQUFLLEVBQUV3QixpREFBUyxDQUFDRztBQVRNLEdBQWhCLEVBVU5DO0FBWG1CLENBQXhCO0FBY2VqQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZmFjNGYyNDFjMjE3ODQwNjYzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2Fyb3VzZWwsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxDb250cm9sLCBDYXJvdXNlbEluZGljYXRvcnMsIENhcm91c2VsQ2FwdGlvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zdCB7IGlkLCB0aXRsZSwgY29udGVudCwgaXRlbXMsIHRlcm0sIHBlcnNvbm5lbCwgZnJvbnQsIGJhY2ssIGZ1bmMgfSA9IHByb2plY3Q7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcclxuICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgPENhcm91c2VsSXRlbSBvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX0gb25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9IGtleT17aXRlbS5zcmN9PlxyXG4gICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHRUZXh0fSAvPlxyXG4gICAgICA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IC8+XHJcbiAgICA8L0Nhcm91c2VsSXRlbT5cclxuICApKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBsZz17Nn0gc209ezEyfT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdC13cmFwcGVyX190ZXh0LXRpdGxlXCI+XHJcbiAgICAgICAgICA8Yj57dGl0bGV9PC9iPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXdyYXBwZXJfX3RleHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICA8ZHQ+6rCc67Cc6riw6rCEPC9kdD4gPGRkPnt0ZXJtfTwvZGQ+XHJcbiAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICA8ZHQ+6rCc67Cc7J247JuQPC9kdD4gPGRkPntwZXJzb25uZWx9PC9kZD5cclxuICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgIDxkbD5cclxuICAgICAgICAgICAgICAgIDxkdD7sgqzsmqnquLDsiKA8L2R0PlxyXG4gICAgICAgICAgICAgICAgPGRkPlxyXG4gICAgICAgICAgICAgICAgICDjho0gPGI+RnJvbnRlbmQ8L2I+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICB7ZnJvbnR9XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICDjho0gPGI+QmFja2VuZDwvYj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhY2t9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICA8ZHQ+6riw64qlPC9kdD5cclxuICAgICAgICAgICAgICAgIDxkZD57ZnVuY308L2RkPlxyXG4gICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiY3RhLWJ0biBjdGEtYnRuLS1oZXJvXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgU2VlIExpdmVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJjdGEtYnRuIHRleHQtY29sb3ItbWFpblwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFNvdXJjZSBDb2RlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPXs2fSBzbT17MTJ9PlxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG5leHQ9e25leHR9IHByZXZpb3VzPXtwcmV2aW91c30+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtpdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fSAvPlxyXG4gICAgICAgICAge3NsaWRlc31cclxuICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c30gLz5cclxuICAgICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e25leHR9IC8+XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuUHJvamVjdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHByb2plY3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRlcm06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwZXJzb25uZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmcm9udDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGJhY2s6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmdW5jOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheVxyXG4gIH0pLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9