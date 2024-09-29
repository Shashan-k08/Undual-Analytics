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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\assignment1\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\assignment1\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ0o7QUFFbkMsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0osaURBQVFBO1FBQUNDLE9BQU9BLG9EQUFLQTtrQkFDcEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbm1lbnQxLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    categories: [],\n    products: [],\n    selectedCategory: \"\",\n    searchQuery: \"\",\n    loading: false\n};\nconst productReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"FETCH_CATEGORIES\":\n            return {\n                ...state,\n                categories: action.payload\n            };\n        case \"FETCH_PRODUCTS\":\n            return {\n                ...state,\n                products: [\n                    ...state.products,\n                    ...action.payload\n                ]\n            };\n        case \"SET_CATEGORY\":\n            return {\n                ...state,\n                selectedCategory: action.payload,\n                products: []\n            }; // Clear products when category changes\n        case \"SET_SEARCH\":\n            return {\n                ...state,\n                searchQuery: action.payload,\n                products: []\n            };\n        case \"LOADING\":\n            return {\n                ...state,\n                loading: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    productState: productReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1DLGVBQWU7SUFDbkJDLFlBQVksRUFBRTtJQUNkQyxVQUFVLEVBQUU7SUFDWkMsa0JBQWtCO0lBQ2xCQyxhQUFhO0lBQ2JDLFNBQVM7QUFDWDtBQUVBLE1BQU1DLGlCQUFpQixDQUFDQyxRQUFRUCxZQUFZLEVBQUVRO0lBQzVDLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRU4sWUFBWU8sT0FBT0UsT0FBTztZQUFDO1FBQ2hELEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdILEtBQUs7Z0JBQUVMLFVBQVU7dUJBQUlLLE1BQU1MLFFBQVE7dUJBQUtNLE9BQU9FLE9BQU87aUJBQUM7WUFBQztRQUN0RSxLQUFLO1lBQ0gsT0FBTztnQkFBRSxHQUFHSCxLQUFLO2dCQUFFSixrQkFBa0JLLE9BQU9FLE9BQU87Z0JBQUVSLFVBQVUsRUFBRTtZQUFDLEdBQUcsdUNBQXVDO1FBQzlHLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdLLEtBQUs7Z0JBQUVILGFBQWFJLE9BQU9FLE9BQU87Z0JBQUVSLFVBQVUsRUFBRTtZQUFDO1FBQy9ELEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdLLEtBQUs7Z0JBQUVGLFNBQVNHLE9BQU9FLE9BQU87WUFBQztRQUM3QztZQUNFLE9BQU9IO0lBQ1g7QUFDRjtBQUNBLE1BQU1JLGNBQWNaLHNEQUFlQSxDQUFDO0lBQ2hDYSxjQUFjTjtBQUNoQjtBQUVBLGlFQUFlSyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaWdubWVudDEvLi9zcmMvcmVkdWNlcnMvaW5kZXguanM/NWMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBjYXRlZ29yaWVzOiBbXSxcclxuICBwcm9kdWN0czogW10sXHJcbiAgc2VsZWN0ZWRDYXRlZ29yeTogXCJcIixcclxuICBzZWFyY2hRdWVyeTogXCJcIixcclxuICBsb2FkaW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHByb2R1Y3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiRkVUQ0hfQ0FURUdPUklFU1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJGRVRDSF9QUk9EVUNUU1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IFsuLi5zdGF0ZS5wcm9kdWN0cywgLi4uYWN0aW9uLnBheWxvYWRdIH07XHJcbiAgICBjYXNlIFwiU0VUX0NBVEVHT1JZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzZWxlY3RlZENhdGVnb3J5OiBhY3Rpb24ucGF5bG9hZCwgcHJvZHVjdHM6IFtdIH07IC8vIENsZWFyIHByb2R1Y3RzIHdoZW4gY2F0ZWdvcnkgY2hhbmdlc1xyXG4gICAgY2FzZSBcIlNFVF9TRUFSQ0hcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaFF1ZXJ5OiBhY3Rpb24ucGF5bG9hZCwgcHJvZHVjdHM6IFtdIH07XHJcbiAgICBjYXNlIFwiTE9BRElOR1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHByb2R1Y3RTdGF0ZTogcHJvZHVjdFJlZHVjZXIsXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsImNhdGVnb3JpZXMiLCJwcm9kdWN0cyIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWFyY2hRdWVyeSIsImxvYWRpbmciLCJwcm9kdWN0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJyb290UmVkdWNlciIsInByb2R1Y3RTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/index.js\n");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./src/reducers/index.js\");\n\n\n\n// Custom logging middleware\nconst loggerMiddleware = (store)=>(next)=>(action)=>{\n            console.log(\"Dispatching action:\", action);\n            const result = next(action);\n            console.log(\"New state:\", store.getState());\n            return result;\n        };\n// Create the Redux store with middleware (Thunk and logger)\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()), loggerMiddleware) // Add the logger middleware\n);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBQ3JCO0FBQ007QUFFdEMsNEJBQTRCO0FBQzVCLE1BQU1JLG1CQUFtQkMsQ0FBQUEsUUFBU0MsQ0FBQUEsT0FBUUMsQ0FBQUE7WUFDeENDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJGO1lBQ25DLE1BQU1HLFNBQVNKLEtBQUtDO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUMsY0FBY0osTUFBTU0sUUFBUTtZQUN4QyxPQUFPRDtRQUNUO0FBRUEsNERBQTREO0FBQzVELE1BQU1MLFFBQVFMLGtEQUFXQSxDQUN2QkcsaURBQVdBLEVBQ1hGLHNEQUFlQSxDQUFDQyxvREFBS0EsRUFBRUUsa0JBQWtCLDRCQUE0Qjs7QUFHdkUsaUVBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ25tZW50MS8uL3NyYy9zdG9yZS9zdG9yZS5qcz9lZWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcblxyXG4vLyBDdXN0b20gbG9nZ2luZyBtaWRkbGV3YXJlXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0Rpc3BhdGNoaW5nIGFjdGlvbjonLCBhY3Rpb24pO1xyXG4gIGNvbnN0IHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcclxuICBjb25zb2xlLmxvZygnTmV3IHN0YXRlOicsIHN0b3JlLmdldFN0YXRlKCkpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIFJlZHV4IHN0b3JlIHdpdGggbWlkZGxld2FyZSAoVGh1bmsgYW5kIGxvZ2dlcilcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlck1pZGRsZXdhcmUpIC8vIEFkZCB0aGUgbG9nZ2VyIG1pZGRsZXdhcmVcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInJvb3RSZWR1Y2VyIiwibG9nZ2VyTWlkZGxld2FyZSIsInN0b3JlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJnZXRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();