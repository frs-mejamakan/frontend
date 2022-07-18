"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.services */ \"(api)/./src/services/auth.services.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst providers = [next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n  clientId: \"752342701275-igmm5s3l7r6gu1l683rvi5oeb62tvj8s.apps.googleusercontent.com\",\n  clientSecret: \"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\"\n}), next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n  clientId: \"721058375653826\",\n  clientSecret: \"666dde087dffc67152fef11f3673a6a1\"\n})];\nconst secret = \"oqyiJ0QQ6SJPvPoWeeK6LeY+ehiugweEGC2a3NwVD4JBoeF0g2jQHiMtBMTzJTvXIaRAlDUjY4S0PqKxocOyrtjBhY/On52sZHis7E857IrAXbHL7aSS8t+jnlO13bBGlWrPQHExlvO5CsonlR8JWiG6c6zWPtAVtdKWetiQ0f+b7YFNsZHoinUTWRtbjqMkpelrA1PJU2fdV1D+tTIZrReVdYIj6TrV0OaPxA==%\";\nconst callbacks = {};\n\ncallbacks.signIn = async function signIn({\n  user\n}) {\n  const {\n    data\n  } = await (0,_services_auth_services__WEBPACK_IMPORTED_MODULE_3__.signUser)({\n    email: user.email,\n    name: user.name,\n    image: user.image\n  });\n\n  if (!data.success) {\n    return false;\n  }\n\n  user.token = data.token;\n  return true;\n};\n\ncallbacks.jwt = async function jwt({\n  token,\n  user\n}) {\n  if (user?.token) {\n    token.accessToken = user.token;\n  }\n\n  return token;\n};\n\ncallbacks.session = async function session({\n  session,\n  token\n}) {\n  session.accessToken = token.accessToken;\n  if (!session.accessToken) return session;\n  const {\n    data\n  } = await (0,_services_auth_services__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)(session.accessToken);\n  session.user = _objectSpread(_objectSpread({}, session.user), data.data);\n  return session;\n}; // callbacks.redirect = async function redirect({ url, baseUrl }) {\n//   return baseUrl;\n// };\n\n\nconst pages = {\n  signIn: '/auth/signin'\n};\nconst options = {\n  providers,\n  secret,\n  callbacks,\n  pages\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUssU0FBUyxHQUFHLENBQ2hCSixpRUFBYyxDQUFDO0VBQ2JLLFFBQVEsRUFBRUMsMEVBREc7RUFFYkcsWUFBWSxFQUFFSCxxQ0FBNENJO0FBRjdDLENBQUQsQ0FERSxFQUtoQlQsbUVBQWdCLENBQUM7RUFDZkksUUFBUSxFQUFFQyxpQkFESztFQUVmRyxZQUFZLEVBQUVILGtDQUE4Q007QUFGN0MsQ0FBRCxDQUxBLENBQWxCO0FBV0EsTUFBTUMsTUFBTSxHQUFHUCwyT0FBZjtBQUVBLE1BQU1TLFNBQVMsR0FBRyxFQUFsQjs7QUFFQUEsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLGVBQWVBLE1BQWYsQ0FBc0I7RUFBRUM7QUFBRixDQUF0QixFQUFnQztFQUNqRCxNQUFNO0lBQUVDO0VBQUYsSUFBVyxNQUFNZixpRUFBUSxDQUFDO0lBQzlCZ0IsS0FBSyxFQUFFRixJQUFJLENBQUNFLEtBRGtCO0lBRTlCQyxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFGbUI7SUFHOUJDLEtBQUssRUFBRUosSUFBSSxDQUFDSTtFQUhrQixDQUFELENBQS9COztFQU1BLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxPQUFWLEVBQW1CO0lBQ2pCLE9BQU8sS0FBUDtFQUNEOztFQUVETCxJQUFJLENBQUNNLEtBQUwsR0FBYUwsSUFBSSxDQUFDSyxLQUFsQjtFQUVBLE9BQU8sSUFBUDtBQUNELENBZEQ7O0FBZ0JBUixTQUFTLENBQUNTLEdBQVYsR0FBZ0IsZUFBZUEsR0FBZixDQUFtQjtFQUFFRCxLQUFGO0VBQVNOO0FBQVQsQ0FBbkIsRUFBb0M7RUFDbEQsSUFBSUEsSUFBSSxFQUFFTSxLQUFWLEVBQWlCO0lBQ2ZBLEtBQUssQ0FBQ0UsV0FBTixHQUFvQlIsSUFBSSxDQUFDTSxLQUF6QjtFQUNEOztFQUVELE9BQU9BLEtBQVA7QUFDRCxDQU5EOztBQVFBUixTQUFTLENBQUNXLE9BQVYsR0FBb0IsZUFBZUEsT0FBZixDQUF1QjtFQUFFQSxPQUFGO0VBQVdIO0FBQVgsQ0FBdkIsRUFBMkM7RUFDN0RHLE9BQU8sQ0FBQ0QsV0FBUixHQUFzQkYsS0FBSyxDQUFDRSxXQUE1QjtFQUNBLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxXQUFiLEVBQTBCLE9BQU9DLE9BQVA7RUFFMUIsTUFBTTtJQUFFUjtFQUFGLElBQVcsTUFBTWhCLHVFQUFjLENBQUN3QixPQUFPLENBQUNELFdBQVQsQ0FBckM7RUFDQUMsT0FBTyxDQUFDVCxJQUFSLG1DQUFvQlMsT0FBTyxDQUFDVCxJQUE1QixHQUFxQ0MsSUFBSSxDQUFDQSxJQUExQztFQUVBLE9BQU9RLE9BQVA7QUFDRCxDQVJELEVBVUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxLQUFLLEdBQUc7RUFDWlgsTUFBTSxFQUFFO0FBREksQ0FBZDtBQUlBLE1BQU1ZLE9BQU8sR0FBRztFQUNkeEIsU0FEYztFQUVkUyxNQUZjO0VBR2RFLFNBSGM7RUFJZFk7QUFKYyxDQUFoQjtBQU9BLGlFQUFlLENBQUNFLEdBQUQsRUFBTUMsR0FBTixLQUFjL0IsZ0RBQVEsQ0FBQzhCLEdBQUQsRUFBTUMsR0FBTixFQUFXRixPQUFYLENBQXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVqYW1ha2FuLWFwcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuaW1wb3J0IEZhY2Vib29rUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9mYWNlYm9vayc7XG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciwgc2lnblVzZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzJztcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBHb29nbGVQcm92aWRlcih7XG4gICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgfSksXG4gIEZhY2Vib29rUHJvdmlkZXIoe1xuICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GQUNFQk9PS19DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GQUNFQk9PS19DTElFTlRfU0VDUkVULFxuICB9KSxcbl07XG5cbmNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0pXVF9TRUNSRVQ7XG5cbmNvbnN0IGNhbGxiYWNrcyA9IHt9O1xuXG5jYWxsYmFja3Muc2lnbkluID0gYXN5bmMgZnVuY3Rpb24gc2lnbkluKHsgdXNlciB9KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc2lnblVzZXIoe1xuICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICBpbWFnZTogdXNlci5pbWFnZSxcbiAgfSk7XG5cbiAgaWYgKCFkYXRhLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1c2VyLnRva2VuID0gZGF0YS50b2tlbjtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNhbGxiYWNrcy5qd3QgPSBhc3luYyBmdW5jdGlvbiBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gIGlmICh1c2VyPy50b2tlbikge1xuICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gdXNlci50b2tlbjtcbiAgfVxuXG4gIHJldHVybiB0b2tlbjtcbn07XG5cbmNhbGxiYWNrcy5zZXNzaW9uID0gYXN5bmMgZnVuY3Rpb24gc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgc2Vzc2lvbi5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuO1xuICBpZiAoIXNlc3Npb24uYWNjZXNzVG9rZW4pIHJldHVybiBzZXNzaW9uO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoc2Vzc2lvbi5hY2Nlc3NUb2tlbik7XG4gIHNlc3Npb24udXNlciA9IHsgLi4uc2Vzc2lvbi51c2VyLCAuLi5kYXRhLmRhdGEgfTtcblxuICByZXR1cm4gc2Vzc2lvbjtcbn07XG5cbi8vIGNhbGxiYWNrcy5yZWRpcmVjdCA9IGFzeW5jIGZ1bmN0aW9uIHJlZGlyZWN0KHsgdXJsLCBiYXNlVXJsIH0pIHtcbi8vICAgcmV0dXJuIGJhc2VVcmw7XG4vLyB9O1xuXG5jb25zdCBwYWdlcyA9IHtcbiAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbn07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHByb3ZpZGVycyxcbiAgc2VjcmV0LFxuICBjYWxsYmFja3MsXG4gIHBhZ2VzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkZhY2Vib29rUHJvdmlkZXIiLCJnZXRDdXJyZW50VXNlciIsInNpZ25Vc2VyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfU0VDUkVUIiwiTkVYVF9QVUJMSUNfRkFDRUJPT0tfQ0xJRU5UX0lEIiwiTkVYVF9QVUJMSUNfRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVCIsInNlY3JldCIsIk5FWFRfUFVCTElDX0pXVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiZGF0YSIsImVtYWlsIiwibmFtZSIsImltYWdlIiwic3VjY2VzcyIsInRva2VuIiwiand0IiwiYWNjZXNzVG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiLCJvcHRpb25zIiwicmVxIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentUser\": () => (/* binding */ getCurrentUser),\n/* harmony export */   \"signUser\": () => (/* binding */ signUser)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signUser = async payload => {\n  const request = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${\"http://localhost:5000/api/v1\"}/user/sign`, payload);\n\n  try {\n    return {\n      success: true,\n      data: request.data\n    };\n  } catch (error) {\n    return {\n      success: true,\n      data: error.message\n    };\n  }\n};\nconst getCurrentUser = async token => {\n  const request = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${\"http://localhost:5000/api/v1\"}/user/me`, {\n    headers: {\n      Authorization: `Bearer ${token}`\n    }\n  });\n\n  try {\n    return {\n      success: true,\n      data: request.data\n    };\n  } catch (error) {\n    return {\n      success: true,\n      data: error.message\n    };\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxRQUFRLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtFQUN6QyxNQUFNQyxPQUFPLEdBQUcsTUFBTUgsaURBQUEsQ0FDbkIsR0FBRUssOEJBQWdDLFlBRGYsRUFFcEJILE9BRm9CLENBQXRCOztFQUtBLElBQUk7SUFDRixPQUFPO01BQ0xNLE9BQU8sRUFBRSxJQURKO01BRUxDLElBQUksRUFBRU4sT0FBTyxDQUFDTTtJQUZULENBQVA7RUFJRCxDQUxELENBS0UsT0FBT0MsS0FBUCxFQUFjO0lBQ2QsT0FBTztNQUNMRixPQUFPLEVBQUUsSUFESjtNQUVMQyxJQUFJLEVBQUVDLEtBQUssQ0FBQ0M7SUFGUCxDQUFQO0VBSUQ7QUFDRixDQWpCTTtBQW1CQSxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsS0FBUCxJQUFpQjtFQUM3QyxNQUFNVixPQUFPLEdBQUcsTUFBTUgsZ0RBQUEsQ0FDbkIsR0FBRUssOEJBQWdDLFVBRGYsRUFFcEI7SUFBRVUsT0FBTyxFQUFFO01BQUVDLGFBQWEsRUFBRyxVQUFTSCxLQUFNO0lBQWpDO0VBQVgsQ0FGb0IsQ0FBdEI7O0VBS0EsSUFBSTtJQUNGLE9BQU87TUFDTEwsT0FBTyxFQUFFLElBREo7TUFFTEMsSUFBSSxFQUFFTixPQUFPLENBQUNNO0lBRlQsQ0FBUDtFQUlELENBTEQsQ0FLRSxPQUFPQyxLQUFQLEVBQWM7SUFDZCxPQUFPO01BQ0xGLE9BQU8sRUFBRSxJQURKO01BRUxDLElBQUksRUFBRUMsS0FBSyxDQUFDQztJQUZQLENBQVA7RUFJRDtBQUNGLENBakJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVqYW1ha2FuLWFwcC8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzLmpzPzI0MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IHNpZ25Vc2VyID0gYXN5bmMgKHBheWxvYWQpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vdXNlci9zaWduYCxcbiAgICBwYXlsb2FkXG4gICk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IHJlcXVlc3QuZGF0YSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogZXJyb3IubWVzc2FnZSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAodG9rZW4pID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91c2VyL21lYCxcbiAgICB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSB9XG4gICk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IHJlcXVlc3QuZGF0YSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogZXJyb3IubWVzc2FnZSxcbiAgICB9O1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwic2lnblVzZXIiLCJwYXlsb2FkIiwicmVxdWVzdCIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0Q3VycmVudFVzZXIiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/auth.services.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();