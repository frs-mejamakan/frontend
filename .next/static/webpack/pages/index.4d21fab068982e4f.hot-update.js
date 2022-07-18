"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/LandingPage/Hero/Hero.js":
/*!*************************************************!*\
  !*** ./src/components/LandingPage/Hero/Hero.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mixpanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixpanel */ \"./src/mixpanel.js\");\n/* harmony import */ var _utils_ScrollToView_scrollToViewButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/ScrollToView/scrollToViewButton */ \"./src/utils/ScrollToView/scrollToViewButton.js\");\n/* harmony import */ var _Shared_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Button/Button */ \"./src/components/Shared/Button/Button.js\");\n/* harmony import */ var _Hero_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.styles */ \"./src/components/LandingPage/Hero/Hero.styles.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_assets_Hero_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/assets/Hero.webp */ \"./public/assets/Hero.webp\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/Code/Desktop/Projects/mejamakan/web/src/components/LandingPage/Hero/Hero.js\";\n\n\n\n\n\n\n\n\n\n\n\n\nconst Hero = _ref => {\n  let {\n    session\n  } = _ref;\n  let hero = 'Lauk delivery starting from RM10 per person';\n  let desc = 'We prepare, cook and deliver delicious Malaysian lauk Mondays to Fridays';\n  let cta = 'GET YOUR FIRST MEAL FREE';\n  let ctaLink = '/payments/plans';\n\n  if (session && !session.user.subscribed) {\n    hero = 'Cooking and deciding what to eat is hard';\n    desc = 'Spend more time with your family and let us worry about dinner';\n    cta = 'CREATE MY DINNER PLAN';\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n      src: _public_assets_Hero_webp__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      height: \"450px\",\n      objectFit: \"cover\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hero_styles__WEBPACK_IMPORTED_MODULE_4__.HeroContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h1\", {\n        children: hero\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n        children: desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n        href: ctaLink,\n        onClick: () => {\n          _mixpanel__WEBPACK_IMPORTED_MODULE_1__.Mixpanel.track('CTA Button Clicked', {\n            section: 'Hero'\n          });\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Shared_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          children: cta\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nUGFnZS9IZXJvL0hlcm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNUyxJQUFJLEdBQUcsUUFBaUI7RUFBQSxJQUFoQjtJQUFFQztFQUFGLENBQWdCO0VBQzVCLElBQUlDLElBQUksR0FBRyw2Q0FBWDtFQUNBLElBQUlDLElBQUksR0FDTiwwRUFERjtFQUVBLElBQUlDLEdBQUcsR0FBRywwQkFBVjtFQUNBLElBQUlDLE9BQU8sR0FBRyxpQkFBZDs7RUFFQSxJQUFJSixPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDSyxJQUFSLENBQWFDLFVBQTdCLEVBQXlDO0lBQ3ZDTCxJQUFJLEdBQUcsMENBQVA7SUFDQUMsSUFBSSxHQUFHLGdFQUFQO0lBQ0FDLEdBQUcsR0FBRyx1QkFBTjtFQUNEOztFQUVELG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsbURBQUQ7TUFBTyxHQUFHLEVBQUVOLGdFQUFaO01BQW9CLE1BQU0sRUFBQyxPQUEzQjtNQUFtQyxTQUFTLEVBQUM7SUFBN0M7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBRUUsOERBQUMsdURBQUQ7TUFBQSx3QkFDRTtRQUFBLFVBQUtJO01BQUw7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURGLGVBRUU7UUFBQSxVQUFJQztNQUFKO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFGRixlQUdFLDhEQUFDLGtEQUFEO1FBQ0UsSUFBSSxFQUFFRSxPQURSO1FBRUUsT0FBTyxFQUFFLE1BQU07VUFDYmIscURBQUEsQ0FBZSxvQkFBZixFQUFxQztZQUFFaUIsT0FBTyxFQUFFO1VBQVgsQ0FBckM7UUFDRCxDQUpIO1FBQUEsdUJBTUUsOERBQUMsNkRBQUQ7VUFBQSxVQUFTTDtRQUFUO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFORjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBSEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRkY7RUFBQSxnQkFERjtBQWlCRCxDQTlCRDs7S0FBTUo7QUFnQ04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UvSGVyby9IZXJvLmpzPzMyNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1peHBhbmVsIH0gZnJvbSAnLi4vLi4vLi4vbWl4cGFuZWwnO1xuaW1wb3J0IHsgc2Nyb2xsVG9WaWV3QnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvU2Nyb2xsVG9WaWV3L3Njcm9sbFRvVmlld0J1dHRvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL1NoYXJlZC9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IEhlcm9Db250YWluZXIgfSBmcm9tICcuL0hlcm8uc3R5bGVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9IZXJvLndlYnAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVybyA9ICh7IHNlc3Npb24gfSkgPT4ge1xuICBsZXQgaGVybyA9ICdMYXVrIGRlbGl2ZXJ5IHN0YXJ0aW5nIGZyb20gUk0xMCBwZXIgcGVyc29uJztcbiAgbGV0IGRlc2MgPVxuICAgICdXZSBwcmVwYXJlLCBjb29rIGFuZCBkZWxpdmVyIGRlbGljaW91cyBNYWxheXNpYW4gbGF1ayBNb25kYXlzIHRvIEZyaWRheXMnO1xuICBsZXQgY3RhID0gJ0dFVCBZT1VSIEZJUlNUIE1FQUwgRlJFRSc7XG4gIGxldCBjdGFMaW5rID0gJy9wYXltZW50cy9wbGFucyc7XG5cbiAgaWYgKHNlc3Npb24gJiYgIXNlc3Npb24udXNlci5zdWJzY3JpYmVkKSB7XG4gICAgaGVybyA9ICdDb29raW5nIGFuZCBkZWNpZGluZyB3aGF0IHRvIGVhdCBpcyBoYXJkJztcbiAgICBkZXNjID0gJ1NwZW5kIG1vcmUgdGltZSB3aXRoIHlvdXIgZmFtaWx5IGFuZCBsZXQgdXMgd29ycnkgYWJvdXQgZGlubmVyJztcbiAgICBjdGEgPSAnQ1JFQVRFIE1ZIERJTk5FUiBQTEFOJztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lcn0gaGVpZ2h0PSc0NTBweCcgb2JqZWN0Rml0PSdjb3ZlcicgLz5cbiAgICAgIDxIZXJvQ29udGFpbmVyPlxuICAgICAgICA8aDE+e2hlcm99PC9oMT5cbiAgICAgICAgPHA+e2Rlc2N9PC9wPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e2N0YUxpbmt9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgTWl4cGFuZWwudHJhY2soJ0NUQSBCdXR0b24gQ2xpY2tlZCcsIHsgc2VjdGlvbjogJ0hlcm8nIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uPntjdGF9PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvSGVyb0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNaXhwYW5lbCIsInNjcm9sbFRvVmlld0J1dHRvbiIsIkJ1dHRvbiIsIkhlcm9Db250YWluZXIiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkJhbm5lciIsIkxpbmsiLCJIZXJvIiwic2Vzc2lvbiIsImhlcm8iLCJkZXNjIiwiY3RhIiwiY3RhTGluayIsInVzZXIiLCJzdWJzY3JpYmVkIiwidHJhY2siLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LandingPage/Hero/Hero.js\n"));

/***/ })

});