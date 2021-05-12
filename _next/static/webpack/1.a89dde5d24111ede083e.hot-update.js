webpackHotUpdate_N_E(1,{

/***/ "./src/compoment/Layout/ThemeSwitch.tsx":
/*!**********************************************!*\
  !*** ./src/compoment/Layout/ThemeSwitch.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_wangcch_Development_repositories_wangcch_wangcch_cc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _compoment_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/compoment/Icons */ \"./src/compoment/Icons/index.ts\");\n\n\n\nvar _jsxFileName = \"/Users/wangcch/Development/repositories/wangcch/wangcch.cc/src/compoment/Layout/ThemeSwitch.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_wangcch_Development_repositories_wangcch_wangcch_cc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar ThemeSwitch = function ThemeSwitch(props) {\n  _s();\n\n  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_3__[\"useTheme\"])(),\n      theme = _useTheme.theme,\n      setTheme = _useTheme.setTheme,\n      systemTheme = _useTheme.systemTheme;\n\n  var curTheme = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return theme === \"systhem\" ? systemTheme : theme;\n  }, [theme, systemTheme]);\n  console.info(curTheme);\n  var node = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    switch (curTheme) {\n      case \"dark\":\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_compoment_Icons__WEBPACK_IMPORTED_MODULE_5__[\"LightMode\"], {\n          width: 16,\n          height: 16\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 16\n        }, _this);\n\n      case \"light\":\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_compoment_Icons__WEBPACK_IMPORTED_MODULE_5__[\"DarkMode\"], {\n          width: 16,\n          height: 16\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 16\n        }, _this);\n\n      default:\n        return null;\n    }\n  }, [curTheme]);\n  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (curTheme === \"dark\") {\n      setTheme(\"light\");\n    } else {\n      setTheme(\"dark\");\n    }\n  }, [curTheme]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].button, _objectSpread(_objectSpread({\n    initial: {\n      scale: 0\n    },\n    animate: {\n      scale: 1\n    }\n  }, props), {}, {\n    onClick: onClick,\n    children: node\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ThemeSwitch, \"1h9vhEWzqMhBwao+9A0Y0JgKzvc=\", false, function () {\n  return [next_themes__WEBPACK_IMPORTED_MODULE_3__[\"useTheme\"]];\n});\n\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\n\nvar _c;\n\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbWVudC9MYXlvdXQvVGhlbWVTd2l0Y2gudHN4PzU0N2IiXSwibmFtZXMiOlsiVGhlbWVTd2l0Y2giLCJwcm9wcyIsInVzZVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsInN5c3RlbVRoZW1lIiwiY3VyVGhlbWUiLCJ1c2VNZW1vIiwiY29uc29sZSIsImluZm8iLCJub2RlIiwib25DbGljayIsInVzZUNhbGxiYWNrIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2hCQyw0REFBUSxFQURRO0FBQUEsTUFDakRDLEtBRGlELGFBQ2pEQSxLQURpRDtBQUFBLE1BQzFDQyxRQUQwQyxhQUMxQ0EsUUFEMEM7QUFBQSxNQUNoQ0MsV0FEZ0MsYUFDaENBLFdBRGdDOztBQUd6RCxNQUFNQyxRQUFRLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxXQUFPSixLQUFLLEtBQUssU0FBVixHQUFzQkUsV0FBdEIsR0FBb0NGLEtBQTNDO0FBQUEsR0FBRCxFQUFvRCxDQUFDQSxLQUFELEVBQVFFLFdBQVIsQ0FBcEQsQ0FBeEI7QUFFQUcsU0FBTyxDQUFDQyxJQUFSLENBQWFILFFBQWI7QUFDQSxNQUFNSSxJQUFJLEdBQUdILHFEQUFPLENBQUMsWUFBTTtBQUN6QixZQUFRRCxRQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0UsNEJBQU8scUVBQUMsMERBQUQ7QUFBVyxlQUFLLEVBQUUsRUFBbEI7QUFBc0IsZ0JBQU0sRUFBRTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQUNGLFdBQUssT0FBTDtBQUNFLDRCQUFPLHFFQUFDLHlEQUFEO0FBQVUsZUFBSyxFQUFFLEVBQWpCO0FBQXFCLGdCQUFNLEVBQUU7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDs7QUFDRjtBQUNFLGVBQU8sSUFBUDtBQU5KO0FBUUQsR0FUbUIsRUFTakIsQ0FBQ0EsUUFBRCxDQVRpQixDQUFwQjtBQVdBLE1BQU1LLE9BQU8sR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2hDLFFBQUlOLFFBQVEsS0FBSyxNQUFqQixFQUF5QjtBQUN2QkYsY0FBUSxDQUFDLE9BQUQsQ0FBUjtBQUNELEtBRkQsTUFFTztBQUNMQSxjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0Q7QUFDRixHQU4wQixFQU14QixDQUFDRSxRQUFELENBTndCLENBQTNCO0FBUUEsc0JBQ0UscUVBQUMsb0RBQUQsQ0FBUSxNQUFSO0FBQWUsV0FBTyxFQUFFO0FBQUVPLFdBQUssRUFBRTtBQUFULEtBQXhCO0FBQXNDLFdBQU8sRUFBRTtBQUFFQSxXQUFLLEVBQUU7QUFBVDtBQUEvQyxLQUFpRVosS0FBakU7QUFBd0UsV0FBTyxFQUFFVSxPQUFqRjtBQUFBLGNBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0E5QkQ7O0dBQU1WLFc7VUFDcUNFLG9EOzs7S0FEckNGLFc7QUFnQ1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbWVudC9MYXlvdXQvVGhlbWVTd2l0Y2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW1wb3J0IHsgRGFya01vZGUsIExpZ2h0TW9kZSB9IGZyb20gXCJAL2NvbXBvbWVudC9JY29uc1wiO1xuXG5jb25zdCBUaGVtZVN3aXRjaDogRkM8eyBjbGFzc05hbWU/OiBzdHJpbmcgfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUsIHN5c3RlbVRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IGN1clRoZW1lID0gdXNlTWVtbygoKSA9PiAodGhlbWUgPT09IFwic3lzdGhlbVwiID8gc3lzdGVtVGhlbWUgOiB0aGVtZSksIFt0aGVtZSwgc3lzdGVtVGhlbWVdKTtcblxuICBjb25zb2xlLmluZm8oY3VyVGhlbWUpO1xuICBjb25zdCBub2RlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgc3dpdGNoIChjdXJUaGVtZSkge1xuICAgICAgY2FzZSBcImRhcmtcIjpcbiAgICAgICAgcmV0dXJuIDxMaWdodE1vZGUgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSAvPjtcbiAgICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgICByZXR1cm4gPERhcmtNb2RlIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIFtjdXJUaGVtZV0pO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGN1clRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGhlbWUoXCJkYXJrXCIpO1xuICAgIH1cbiAgfSwgW2N1clRoZW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmJ1dHRvbiBpbml0aWFsPXt7IHNjYWxlOiAwIH19IGFuaW1hdGU9e3sgc2NhbGU6IDEgfX0gey4uLnByb3BzfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtub2RlfVxuICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/compoment/Layout/ThemeSwitch.tsx\n");

/***/ })

})