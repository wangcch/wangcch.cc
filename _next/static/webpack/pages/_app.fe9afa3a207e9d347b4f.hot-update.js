webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/compoment/Game/Scissors.tsx":
/*!*****************************************!*\
  !*** ./src/compoment/Game/Scissors.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/wangcch/Development/repositories/wangcch/wangcch.cc/src/compoment/Game/Scissors.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar HAND_MAP = [\"✊\", \"✌️\", \"🖐\"];\n\nvar ScissorsView = function ScissorsView() {\n  _s();\n\n  var timer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"👋\"),\n      view = _useState[0],\n      setView = _useState[1];\n\n  var clear = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (timer.current) {\n      clearInterval(timer.current);\n      timer.current = undefined;\n    }\n  }, []);\n  var start = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    timer.current = setInterval(function () {\n      setView(HAND_MAP[parseInt(String(Math.random() * 3), 10)]);\n    }, 100);\n  }, []);\n  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (!timer.current) {\n      start();\n    } else {\n      clear();\n    }\n  }, [start, clear]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return clear;\n  }, [clear]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      cursor: \"pointer\",\n      marginRight: \"2rem\"\n    },\n    onClick: onClick,\n    children: view\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ScissorsView, \"yLbeYkFRQNFDd9VRskzEpNIZVc0=\");\n\n_c = ScissorsView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScissorsView);\n\nvar _c;\n\n$RefreshReg$(_c, \"ScissorsView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbWVudC9HYW1lL1NjaXNzb3JzLnRzeD8yYmZiIl0sIm5hbWVzIjpbIkhBTkRfTUFQIiwiU2Npc3NvcnNWaWV3IiwidGltZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3IiwiY2xlYXIiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwidW5kZWZpbmVkIiwic3RhcnQiLCJzZXRJbnRlcnZhbCIsInBhcnNlSW50IiwiU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsIm9uQ2xpY2siLCJ1c2VFZmZlY3QiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixDQUFqQjs7QUFFQSxJQUFNQyxZQUFnQixHQUFHLFNBQW5CQSxZQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sRUFBcEI7O0FBRDZCLGtCQUVMQyxzREFBUSxDQUFDLElBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFJN0IsTUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDOUIsUUFBSU4sS0FBSyxDQUFDTyxPQUFWLEVBQW1CO0FBQ2pCQyxtQkFBYSxDQUFDUixLQUFLLENBQUNPLE9BQVAsQ0FBYjtBQUNBUCxXQUFLLENBQUNPLE9BQU4sR0FBZ0JFLFNBQWhCO0FBQ0Q7QUFDRixHQUx3QixFQUt0QixFQUxzQixDQUF6QjtBQU9BLE1BQU1DLEtBQUssR0FBR0oseURBQVcsQ0FBQyxZQUFNO0FBQzlCTixTQUFLLENBQUNPLE9BQU4sR0FBZ0JJLFdBQVcsQ0FBQyxZQUFNO0FBQ2hDUCxhQUFPLENBQUNOLFFBQVEsQ0FBQ2MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUFqQixDQUFQLEVBQTRCLEVBQTVCLENBQVQsQ0FBVCxDQUFQO0FBQ0QsS0FGMEIsRUFFeEIsR0FGd0IsQ0FBM0I7QUFHRCxHQUp3QixFQUl0QixFQUpzQixDQUF6QjtBQU1BLE1BQU1DLE9BQU8sR0FBR1YseURBQVcsQ0FBQyxZQUFNO0FBQ2hDLFFBQUksQ0FBQ04sS0FBSyxDQUFDTyxPQUFYLEVBQW9CO0FBQ2xCRyxXQUFLO0FBQ04sS0FGRCxNQUVPO0FBQ0xMLFdBQUs7QUFDTjtBQUNGLEdBTjBCLEVBTXhCLENBQUNLLEtBQUQsRUFBUUwsS0FBUixDQU53QixDQUEzQjtBQVFBWSx5REFBUyxDQUFDO0FBQUEsV0FBTVosS0FBTjtBQUFBLEdBQUQsRUFBYyxDQUFDQSxLQUFELENBQWQsQ0FBVDtBQUVBLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVhLFlBQU0sRUFBRSxTQUFWO0FBQXFCQyxpQkFBVyxFQUFFO0FBQWxDLEtBQVo7QUFBd0QsV0FBTyxFQUFFSCxPQUFqRTtBQUFBLGNBQ0diO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FoQ0Q7O0dBQU1KLFk7O0tBQUFBLFk7QUFrQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbWVudC9HYW1lL1NjaXNzb3JzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSEFORF9NQVAgPSBbXCLinIpcIiwgXCLinIzvuI9cIiwgXCLwn5aQXCJdO1xuXG5jb25zdCBTY2lzc29yc1ZpZXc6IEZDID0gKCkgPT4ge1xuICBjb25zdCB0aW1lciA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4+KCk7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKFwi8J+Ri1wiKTtcblxuICBjb25zdCBjbGVhciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodGltZXIuY3VycmVudCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lci5jdXJyZW50KTtcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdGltZXIuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZpZXcoSEFORF9NQVBbcGFyc2VJbnQoU3RyaW5nKE1hdGgucmFuZG9tKCkgKiAzKSwgMTApXSk7XG4gICAgfSwgMTAwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCF0aW1lci5jdXJyZW50KSB7XG4gICAgICBzdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhcigpO1xuICAgIH1cbiAgfSwgW3N0YXJ0LCBjbGVhcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBjbGVhciwgW2NsZWFyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpblJpZ2h0OiBcIjJyZW1cIiB9fSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHt2aWV3fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Npc3NvcnNWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/compoment/Game/Scissors.tsx\n");

/***/ })

})