webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/compoment/Layout/Nav.tsx":
/*!**************************************!*\
  !*** ./src/compoment/Layout/Nav.tsx ***!
  \**************************************/
/*! exports provided: NAV_ITEMS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAV_ITEMS\", function() { return NAV_ITEMS; });\n/* harmony import */ var _Users_wangcch_Development_repositories_wangcch_wangcch_cc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_wangcch_Development_repositories_wangcch_wangcch_cc_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/wangcch/Development/repositories/wangcch/wangcch.cc/src/compoment/Layout/Nav.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_wangcch_Development_repositories_wangcch_wangcch_cc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar NAV_ITEMS = [{\n  path: \"/\",\n  name: \"HOME\"\n}, {\n  path: \"/space\",\n  name: \"PHOTOGRAPHY\"\n}];\n\nvar Nav = function Nav(props) {\n  var route = props.route,\n      rest = Object(_Users_wangcch_Development_repositories_wangcch_wangcch_cc_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props, [\"route\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", _objectSpread(_objectSpread({}, rest), {}, {\n    children: [route, NAV_ITEMS.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        \"data-selected\": item.path === route,\n        href: item.path,\n        children: item.name\n      }, item.path, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this);\n    })]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbWVudC9MYXlvdXQvTmF2LnRzeD9lMGQzIl0sIm5hbWVzIjpbIk5BVl9JVEVNUyIsInBhdGgiLCJuYW1lIiwiTmF2IiwicHJvcHMiLCJyb3V0ZSIsInJlc3QiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFPTyxJQUFNQSxTQUFvQixHQUFHLENBQ2xDO0FBQ0VDLE1BQUksRUFBRSxHQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGtDLEVBS2xDO0FBQ0VELE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTGtDLENBQTdCOztBQWVQLElBQU1DLEdBQWlCLEdBQUcsU0FBcEJBLEdBQW9CLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQzNCQyxLQUQyQixHQUNSRCxLQURRLENBQzNCQyxLQUQyQjtBQUFBLE1BQ2pCQyxJQURpQiw2S0FDUkYsS0FEUTs7QUFHbkMsc0JBQ0UsNEdBQVNFLElBQVQ7QUFBQSxlQUNHRCxLQURILEVBRUdMLFNBQVMsQ0FBQ08sR0FBVixDQUFjLFVBQUNDLElBQUQ7QUFBQSwwQkFDYixxRUFBQyxnREFBRDtBQUFNLHlCQUFlQSxJQUFJLENBQUNQLElBQUwsS0FBY0ksS0FBbkM7QUFBMEQsWUFBSSxFQUFFRyxJQUFJLENBQUNQLElBQXJFO0FBQUEsa0JBQ0dPLElBQUksQ0FBQ047QUFEUixTQUErQ00sSUFBSSxDQUFDUCxJQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFkLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQWJEOztLQUFNRSxHO0FBZVNBLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbWVudC9MYXlvdXQvTmF2LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMsIERldGFpbGVkSFRNTFByb3BzLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgdHlwZSBOYXZJdGVtID0ge1xuICBwYXRoOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBOQVZfSVRFTVM6IE5hdkl0ZW1bXSA9IFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIG5hbWU6IFwiSE9NRVwiLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvc3BhY2VcIixcbiAgICBuYW1lOiBcIlBIT1RPR1JBUEhZXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgdHlwZSBOYXZQcm9wcyA9IHtcbiAgcm91dGU/OiBzdHJpbmc7XG59ICYgRGV0YWlsZWRIVE1MUHJvcHM8SFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LCBIVE1MRWxlbWVudD47XG5cbmNvbnN0IE5hdjogRkM8TmF2UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcm91dGUsIC4uLnJlc3QgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiB7Li4ucmVzdH0+XG4gICAgICB7cm91dGV9XG4gICAgICB7TkFWX0lURU1TLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8TGluayBkYXRhLXNlbGVjdGVkPXtpdGVtLnBhdGggPT09IHJvdXRlfSBrZXk9e2l0ZW0ucGF0aH0gaHJlZj17aXRlbS5wYXRofT5cbiAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/compoment/Layout/Nav.tsx\n");

/***/ })

})