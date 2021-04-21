webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/compoment/Game/Scissors.tsx":
/*!*****************************************!*\
  !*** ./src/compoment/Game/Scissors.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/wangcch/Development/repositories/wangcch/wangcch.cc/src/compoment/Game/Scissors.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar HAND_MAP = [\"✊\", \"✌️\", \"🖐\"];\n\nvar ScissorsView = function ScissorsView() {\n  _s();\n\n  var timer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"👋\"),\n      view = _useState[0],\n      setView = _useState[1];\n\n  var clear = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (timer.current) {\n      clearInterval(timer.current);\n      timer.current = undefined;\n    }\n  }, []);\n  var start = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    timer.current = setInterval(function () {\n      setView(HAND_MAP[parseInt(String(Math.random() * 3), 10)]);\n    }, 80);\n    setTimeout(function () {\n      clear();\n      timer.current = setInterval(function () {\n        setView(HAND_MAP[parseInt(String(Math.random() * 3), 10)]);\n      }, 200);\n      setTimeout(function () {\n        clear();\n        timer.current = setInterval(function () {\n          setView(HAND_MAP[parseInt(String(Math.random() * 3), 10)]);\n        }, 300);\n        setTimeout(function () {\n          console.info(\"end\");\n          clear();\n        }, 400);\n      }, 1000);\n    }, 1200);\n  }, [clear]);\n  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    if (!timer.current) {\n      start();\n    } else {\n      clear();\n    }\n  }, [start, clear]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return clear;\n  }, [clear]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      cursor: \"pointer\"\n    },\n    onClick: onClick,\n    children: view\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ScissorsView, \"yLbeYkFRQNFDd9VRskzEpNIZVc0=\");\n\n_c = ScissorsView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScissorsView);\n\nvar _c;\n\n$RefreshReg$(_c, \"ScissorsView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbWVudC9HYW1lL1NjaXNzb3JzLnRzeD8yYmZiIl0sIm5hbWVzIjpbIkhBTkRfTUFQIiwiU2Npc3NvcnNWaWV3IiwidGltZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3IiwiY2xlYXIiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGVhckludGVydmFsIiwidW5kZWZpbmVkIiwic3RhcnQiLCJzZXRJbnRlcnZhbCIsInBhcnNlSW50IiwiU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwiaW5mbyIsIm9uQ2xpY2siLCJ1c2VFZmZlY3QiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosQ0FBakI7O0FBRUEsSUFBTUMsWUFBZ0IsR0FBRyxTQUFuQkEsWUFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCOztBQUQ2QixrQkFFTEMsc0RBQVEsQ0FBQyxJQUFELENBRkg7QUFBQSxNQUV0QkMsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBSTdCLE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQzlCLFFBQUlOLEtBQUssQ0FBQ08sT0FBVixFQUFtQjtBQUNqQkMsbUJBQWEsQ0FBQ1IsS0FBSyxDQUFDTyxPQUFQLENBQWI7QUFDQVAsV0FBSyxDQUFDTyxPQUFOLEdBQWdCRSxTQUFoQjtBQUNEO0FBQ0YsR0FMd0IsRUFLdEIsRUFMc0IsQ0FBekI7QUFPQSxNQUFNQyxLQUFLLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUM5Qk4sU0FBSyxDQUFDTyxPQUFOLEdBQWdCSSxXQUFXLENBQUMsWUFBTTtBQUNoQ1AsYUFBTyxDQUFDTixRQUFRLENBQUNjLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBakIsQ0FBUCxFQUE0QixFQUE1QixDQUFULENBQVQsQ0FBUDtBQUNELEtBRjBCLEVBRXhCLEVBRndCLENBQTNCO0FBSUFDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZYLFdBQUs7QUFDTEwsV0FBSyxDQUFDTyxPQUFOLEdBQWdCSSxXQUFXLENBQUMsWUFBTTtBQUNoQ1AsZUFBTyxDQUFDTixRQUFRLENBQUNjLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBakIsQ0FBUCxFQUE0QixFQUE1QixDQUFULENBQVQsQ0FBUDtBQUNELE9BRjBCLEVBRXhCLEdBRndCLENBQTNCO0FBR0FDLGdCQUFVLENBQUMsWUFBTTtBQUNmWCxhQUFLO0FBQ0xMLGFBQUssQ0FBQ08sT0FBTixHQUFnQkksV0FBVyxDQUFDLFlBQU07QUFDaENQLGlCQUFPLENBQUNOLFFBQVEsQ0FBQ2MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUFqQixDQUFQLEVBQTRCLEVBQTVCLENBQVQsQ0FBVCxDQUFQO0FBQ0QsU0FGMEIsRUFFeEIsR0FGd0IsQ0FBM0I7QUFHQUMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2ZDLGlCQUFPLENBQUNDLElBQVIsQ0FBYSxLQUFiO0FBQ0FiLGVBQUs7QUFDTixTQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQsT0FUUyxFQVNQLElBVE8sQ0FBVjtBQVVELEtBZlMsRUFlUCxJQWZPLENBQVY7QUFnQkQsR0FyQndCLEVBcUJ0QixDQUFDQSxLQUFELENBckJzQixDQUF6QjtBQXVCQSxNQUFNYyxPQUFPLEdBQUdiLHlEQUFXLENBQUMsWUFBTTtBQUNoQyxRQUFJLENBQUNOLEtBQUssQ0FBQ08sT0FBWCxFQUFvQjtBQUNsQkcsV0FBSztBQUNOLEtBRkQsTUFFTztBQUNMTCxXQUFLO0FBQ047QUFDRixHQU4wQixFQU14QixDQUFDSyxLQUFELEVBQVFMLEtBQVIsQ0FOd0IsQ0FBM0I7QUFRQWUseURBQVMsQ0FBQztBQUFBLFdBQU1mLEtBQU47QUFBQSxHQUFELEVBQWMsQ0FBQ0EsS0FBRCxDQUFkLENBQVQ7QUFFQSxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFZ0IsWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFtQyxXQUFPLEVBQUVGLE9BQTVDO0FBQUEsY0FDR2hCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FqREQ7O0dBQU1KLFk7O0tBQUFBLFk7QUFtRFNBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbWVudC9HYW1lL1NjaXNzb3JzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSEFORF9NQVAgPSBbXCLinIpcIiwgXCLinIzvuI9cIiwgXCLwn5aQXCJdO1xuXG5jb25zdCBTY2lzc29yc1ZpZXc6IEZDID0gKCkgPT4ge1xuICBjb25zdCB0aW1lciA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4+KCk7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKFwi8J+Ri1wiKTtcblxuICBjb25zdCBjbGVhciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodGltZXIuY3VycmVudCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lci5jdXJyZW50KTtcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdGltZXIuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZpZXcoSEFORF9NQVBbcGFyc2VJbnQoU3RyaW5nKE1hdGgucmFuZG9tKCkgKiAzKSwgMTApXSk7XG4gICAgfSwgODApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGVhcigpO1xuICAgICAgdGltZXIuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VmlldyhIQU5EX01BUFtwYXJzZUludChTdHJpbmcoTWF0aC5yYW5kb20oKSAqIDMpLCAxMCldKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgdGltZXIuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRWaWV3KEhBTkRfTUFQW3BhcnNlSW50KFN0cmluZyhNYXRoLnJhbmRvbSgpICogMyksIDEwKV0pO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oXCJlbmRcIik7XG4gICAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sIDEyMDApO1xuICB9LCBbY2xlYXJdKTtcblxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghdGltZXIuY3VycmVudCkge1xuICAgICAgc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXIoKTtcbiAgICB9XG4gIH0sIFtzdGFydCwgY2xlYXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gY2xlYXIsIFtjbGVhcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAge3ZpZXd9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2lzc29yc1ZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/compoment/Game/Scissors.tsx\n");

/***/ })

})