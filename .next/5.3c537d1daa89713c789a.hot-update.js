webpackHotUpdate(5,{

/***/ "./pages/stock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);

var _jsxFileName = "E:\\site\\git projects\\poker\\pages\\stock.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var Stock = function Stock(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, " Stock"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, " 1st financial product: stock"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, " Mechanisms and profit "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, " Mechanism: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, " Bull strategy: buy at time t and sell at time t+n "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, " Bear strategy: sell at time t and buy at time t+n ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, " Profit: "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, " Bull strategy: selling price - buying price - transaction cost "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, " Bear strategy: buying price - selling price - transaction cost ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, " Mechanisms and profit "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.show.dataset.name));
};

Stock.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, res, show;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=MS2Rg8PPdkKdQix6s2dY");

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            console.log("Fetched show: ".concat(show.dataset.dataset_code));
            return _context.abrupt("return", {
              show: show
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Stock);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/stock")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.3c537d1daa89713c789a.hot-update.js.map