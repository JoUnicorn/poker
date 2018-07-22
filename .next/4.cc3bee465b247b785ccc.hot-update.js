webpackHotUpdate(4,{

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "E:\\site\\git projects\\poker\\components\\Sidebar.js";




function getPosts() {
  return [{
    id: 'Stocks',
    title: 'Stocks'
  }, {
    id: 'Options',
    title: 'Options'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3950785544"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3950785544"
  }, post.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3950785544",
    css: "li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBR3lCLEFBS0ssQUFNVCxZQUNkLElBWGUsYUFDZixxQkFJYSxXQUNTLG9CQUN0QiIsImZpbGUiOiJjb21wb25lbnRzXFxTaWRlYmFyLmpzIiwic291cmNlUm9vdCI6IkU6XFxzaXRlXFxnaXQgcHJvamVjdHNcXHBva2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gZ2V0UG9zdHMgKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IGlkOiAnU3RvY2tzJywgdGl0bGU6ICdTdG9ja3MnfSxcclxuICAgIHsgaWQ6ICdPcHRpb25zJywgdGl0bGU6ICdPcHRpb25zJ30sXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxyXG4gIDxsaT5cclxuICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XHJcbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvbGk+XHJcbilcclxuXHJcbmNvbnN0IHNpZGViYXJNID0ge1xyXG4gIGZsb2F0OiAnbGVmdCcsXHJcbiAgd2lkdGg6ICcyNjBweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAncmVkJ1xyXG59XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17c2lkZWJhck19PlxyXG4gICAgICA8aDE+TWVudTwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgxLCBhIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXX0= */\n/*@ sourceURL=components\\Sidebar.js */"
  }));
};

var sidebarM = {
  float: 'left',
  width: '260px',
  backgroundColor: 'red'
};

var Sidebar = function Sidebar() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: sidebarM,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    className: "jsx-2011046022"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: "jsx-2011046022"
  }, "Menu"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: "jsx-2011046022"
  }, getPosts().map(function (post) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    });
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2011046022",
    css: "h1.jsx-2011046022,a.jsx-2011046022{font-family:\"Arial\";}ul.jsx-2011046022{padding:0;}li.jsx-2011046022{list-style:none;margin:5px 0;}a.jsx-2011046022{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2011046022:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUcrQixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHNcXFNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiRTpcXHNpdGVcXGdpdCBwcm9qZWN0c1xccG9rZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0cyAoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgaWQ6ICdTdG9ja3MnLCB0aXRsZTogJ1N0b2Nrcyd9LFxyXG4gICAgeyBpZDogJ09wdGlvbnMnLCB0aXRsZTogJ09wdGlvbnMnfSxcclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbiAgPGxpPlxyXG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cclxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9saT5cclxuKVxyXG5cclxuY29uc3Qgc2lkZWJhck0gPSB7XHJcbiAgZmxvYXQ6ICdsZWZ0JyxcclxuICB3aWR0aDogJzI2MHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnXHJcbn1cclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzaWRlYmFyTX0+XHJcbiAgICAgIDxoMT5NZW51PC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtnZXRQb3N0cygpLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDEsIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiJdfQ== */\n/*@ sourceURL=components\\Sidebar.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
false

})
//# sourceMappingURL=4.cc3bee465b247b785ccc.hot-update.js.map