webpackHotUpdate(6,{

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_markdown__ = __webpack_require__("./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
var _jsxFileName = "E:\\site\\git projects\\poker\\pages\\post.js";






/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3267370368"
  }, props.router.query.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3267370368" + " " + "markdown"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_markdown___default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n     ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3267370368",
    css: ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cc0IsQUFHNEIsQUFJQyxBQUtULEFBSUgsU0FDQyxHQUpaLE9BSzJCLENBZDNCLHdCQWVBLE1BWGEsV0FDYiIsImZpbGUiOiJwYWdlc1xccG9zdC5qcyIsInNvdXJjZVJvb3QiOiJFOlxcc2l0ZVxcZ2l0IHByb2plY3RzXFxwb2tlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcigocHJvcHMpID0+IChcclxuICA8TGF5b3V0PlxyXG4gICA8aDE+e3Byb3BzLnJvdXRlci5xdWVyeS50aXRsZX08L2gxPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XHJcbiAgICAgPE1hcmtkb3duIHNvdXJjZT17YFxyXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXHJcblllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxyXG5BbmQgd2UgY2FuIGhhdmUgYSB0aXRsZSBhcyB3ZWxsLlxyXG5cclxuIyMjIFRoaXMgaXMgYSB0aXRsZVxyXG5cclxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cclxuICAgICBgfS8+XHJcbiAgIDwvZGl2PlxyXG4gICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgIC5tYXJrZG93biB7XHJcbiAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICB9XHJcblxyXG4gICAgIC5tYXJrZG93biBhIHtcclxuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xyXG4gICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgIH1cclxuXHJcbiAgICAgLm1hcmtkb3duIGgzIHtcclxuICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgPC9MYXlvdXQ+XHJcbikpXHJcbiJdfQ== */\n/*@ sourceURL=pages\\post.js */"
  }));
}));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.9de86f9ba9fa210c92c6.hot-update.js.map