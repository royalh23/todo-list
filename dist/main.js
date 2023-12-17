/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

::backdrop {
  backdrop-filter: blur(4px);
}

.selected {
  background-color: #CCC;
}

#content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100px 1fr;
  height: inherit;
}

.sidebar, 
.main,
.tasks, 
.projects {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  grid-column: 1 / 3;
  padding-left: 50px;
  font-size: 2.8rem;
  font-weight: bold;
  color: white;
  background-color: #1992d4;
}

.sidebar {
  gap: 15px;
  background-color: #ddd;
  padding: 20px;
}

.main {
  gap: 15px;
}

.tasks {
  gap: 12px;
}

.title {
  font-weight: bold;
  font-size: 1.8rem;
}

.projects {
  gap: 5px;
}

.app-item {
  cursor: pointer;
  display: grid;
  grid-template-columns: 30px 100px;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
}

.project-item {
  cursor: pointer;
  display: grid;
  grid-template-columns: 30px 100px 1fr;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
}

.project-item > img:last-child {
  justify-self: end;
  visibility: hidden;
}

.app-item:hover,
.project-item:hover {
  border-radius: 5px;
  background-color: #ccc;
}

img[src\$="svg"] {
  width: 25px;
  height: 25px;
}

.add-project-input {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.add-project-input-field {
  padding: 0 10px;
  font-size: 1.1rem;
  border: 0;
  border-radius: 5px;
  grid-column: 1 / 3;
  height: 40px;
}

button {
  cursor: pointer;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  font-size: 1.1rem;
}

button:active {
  transform: translateY(4px);
}

.add-btn, .cancel-btn {
  justify-self: center;
}

.add-btn {
  background-color: rgb(0, 179, 255);
}

.cancel-btn, .remove-btn {
  background-color: rgb(243, 59, 90);
}

.edit-btn, .save-btn {
  background-color: rgb(6, 149, 27);
}

.main {
  background-color: beige;
  padding: 30px 100px;
}

#todo-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 600px;
}

#todo-form label {
  font-size: 1.3rem;
}

#todo-form input, 
#todo-form textarea,
#todo-form select {
  border: 1px solid rgb(221, 221, 221);
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 5px;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  box-shadow: 4px 4px 5px rgb(220, 220, 220);
}

textarea {
  resize: none;
}

#todo-form select {
  background-color: #fff;
}

.task-title,
.dscrp,
.due-date,
.priority {
  display: flex;
  flex-direction: column;
  gap: 5px;
} 

.form-buttons {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.tasks > div {
  display: grid;
  grid-template-columns: 20px repeat(5, 150px);
  justify-items: center;
  align-items: center;
}

dialog {
  border-radius: 15px;
  padding: 32px;
  border: 0;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,aAAa;EACb,iCAAiC;EACjC,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,SAAS;EACT,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,oCAAoC;EACpC,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;;EAIE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX","sourcesContent":["html {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n::backdrop {\n  backdrop-filter: blur(4px);\n}\n\n.selected {\n  background-color: #CCC;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 100px 1fr;\n  height: inherit;\n}\n\n.sidebar, \n.main,\n.tasks, \n.projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  padding-left: 50px;\n  font-size: 2.8rem;\n  font-weight: bold;\n  color: white;\n  background-color: #1992d4;\n}\n\n.sidebar {\n  gap: 15px;\n  background-color: #ddd;\n  padding: 20px;\n}\n\n.main {\n  gap: 15px;\n}\n\n.tasks {\n  gap: 12px;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\n.projects {\n  gap: 5px;\n}\n\n.app-item {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 30px 100px;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n}\n\n.project-item {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 30px 100px 1fr;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n}\n\n.project-item > img:last-child {\n  justify-self: end;\n  visibility: hidden;\n}\n\n.app-item:hover,\n.project-item:hover {\n  border-radius: 5px;\n  background-color: #ccc;\n}\n\nimg[src$=\"svg\"] {\n  width: 25px;\n  height: 25px;\n}\n\n.add-project-input {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.add-project-input-field {\n  padding: 0 10px;\n  font-size: 1.1rem;\n  border: 0;\n  border-radius: 5px;\n  grid-column: 1 / 3;\n  height: 40px;\n}\n\nbutton {\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n  border: 0;\n  font-size: 1.1rem;\n}\n\nbutton:active {\n  transform: translateY(4px);\n}\n\n.add-btn, .cancel-btn {\n  justify-self: center;\n}\n\n.add-btn {\n  background-color: rgb(0, 179, 255);\n}\n\n.cancel-btn, .remove-btn {\n  background-color: rgb(243, 59, 90);\n}\n\n.edit-btn, .save-btn {\n  background-color: rgb(6, 149, 27);\n}\n\n.main {\n  background-color: beige;\n  padding: 30px 100px;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  width: 600px;\n}\n\n#todo-form label {\n  font-size: 1.3rem;\n}\n\n#todo-form input, \n#todo-form textarea,\n#todo-form select {\n  border: 1px solid rgb(221, 221, 221);\n  font-size: 1rem;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n  box-shadow: 4px 4px 5px rgb(220, 220, 220);\n}\n\ntextarea {\n  resize: none;\n}\n\n#todo-form select {\n  background-color: #fff;\n}\n\n.task-title,\n.dscrp,\n.due-date,\n.priority {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n} \n\n.form-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.tasks > div {\n  display: grid;\n  grid-template-columns: 20px repeat(5, 150px);\n  justify-items: center;\n  align-items: center;\n}\n\ndialog {\n  border-radius: 15px;\n  padding: 32px;\n  border: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app-logic.js":
/*!**************************!*\
  !*** ./src/app-logic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const App = (function() {
  const projects = [];

  function initializeProjects() {
    const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Default Project");  
    defaultProject.selected = true;
    projects.push(defaultProject);
  }

  function createProject(input) {
    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](input.value);
    projects.push(newProject);
  }

  function removeProject(index) {
    projects.splice(index, 1);
  }

  return {projects, initializeProjects, createProject, removeProject};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
    this.selected = false;
  }

  createToDo(formData) {
    const newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](formData.get("title"),
                             formData.get("dscrp"),
                             formData.get("due-date"),
                             formData.get("priority"));
    this.toDos.push(newToDo);
  }

  removeToDo(index) {
    this.toDos.splice(index, 1);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  editTodo(formData) {
    this.title = formData.get("title");
    this.description = formData.get("dscrp");
    this.dueDate = formData.get("due-date");
    this.priority = formData.get("priority");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);

/***/ }),

/***/ "./src/svg-icons/black-remove.svg":
/*!****************************************!*\
  !*** ./src/svg-icons/black-remove.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "451d9800367e5585087a.svg";

/***/ }),

/***/ "./src/svg-icons/plus.svg":
/*!********************************!*\
  !*** ./src/svg-icons/plus.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/svg-icons/project-icon.svg":
/*!****************************************!*\
  !*** ./src/svg-icons/project-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "365f3e7f182c9f913994.svg";

/***/ }),

/***/ "./src/svg-icons/red-remove.svg":
/*!**************************************!*\
  !*** ./src/svg-icons/red-remove.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30ef74febcd1798d958d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _svg_icons_project_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-icons/project-icon.svg */ "./src/svg-icons/project-icon.svg");
/* harmony import */ var _svg_icons_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg-icons/plus.svg */ "./src/svg-icons/plus.svg");
/* harmony import */ var _svg_icons_black_remove_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-icons/black-remove.svg */ "./src/svg-icons/black-remove.svg");
/* harmony import */ var _svg_icons_red_remove_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg-icons/red-remove.svg */ "./src/svg-icons/red-remove.svg");
/* harmony import */ var _app_logic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-logic */ "./src/app-logic.js");


 




(() => {
  // Create a helper for setting attributes
  function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(attr => {
      el.setAttribute(attr, attrs[attr]);
    });
  }

  function loadProject(e) {
    if (!addTask.hasChildNodes()) addTask.append(addTaskIcon, addTaskText);
    const clickedProject = _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].projects[e.currentTarget.dataset.index];
    _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].projects.forEach(project => project.selected = false);
    clickedProject.selected = true;
    tasksHeader.textContent = clickedProject.name;
    tasks.textContent = "";
    displayTasks(clickedProject);
  }

  function displayProject(project, index) {
    // Create project elements
    const projectNode = document.createElement("div");
    const projectIcon = new Image();
    const projectName = document.createElement("div");
    const removeIcon = new Image();
  
    // Set project elements' content
    projectIcon.src = _svg_icons_project_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    projectIcon.alt = "Project Icon";
    projectName.textContent = project.name;
    removeIcon.src = _svg_icons_black_remove_svg__WEBPACK_IMPORTED_MODULE_3__;
    removeIcon.alt = "Remove Icon";
  
    // Add project elements' classes and dataset
    projectNode.classList.add("project-item");
    projectNode.dataset.index = `${index}`;
  
    // Append project elements accordingly
    projectNode.append(projectIcon, projectName, removeIcon);
    projects.appendChild(projectNode);

    // Add event listener to each project node and removeIcon
    projectNode.addEventListener("click", loadProject);

    removeIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      removeProject(project, index);
    });

    projectNode.addEventListener("mouseover", () => {
      removeIcon.style.visibility = "visible";
    });
    
    projectNode.addEventListener("mouseout", () => {
      removeIcon.style.visibility = "hidden";
    });

    // Make removeIcon red when it's on hover
    removeIcon.addEventListener("mouseover", () => removeIcon.src = _svg_icons_red_remove_svg__WEBPACK_IMPORTED_MODULE_4__);
    removeIcon.addEventListener("mouseout", () => removeIcon.src = _svg_icons_black_remove_svg__WEBPACK_IMPORTED_MODULE_3__);
  }

  function removeProject(project, index) {
    // Remove project's main page contents if it was selected
    if (project.selected) {
      tasksHeader.textContent = "";
      tasks.textContent = "";
      addTask.textContent = "";
    }

    _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].removeProject(index);
    projects.textContent = "";
    displayProjects();
  }

  function displayTask(task, index) {
    // Create elements
    const taskNode = document.createElement("div");
    const checkBox = document.createElement("input");
    const taskTitle = document.createElement("label");
    const taskDueDate = document.createElement("div");
    const taskPriority = document.createElement("div");
    const removeBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    // Set attributes and text content
    setAttributes(checkBox, {
      "name": "task",
      "type": "checkbox",
      "id": `task-${index}`,
    });
    taskTitle.setAttribute("for", `task-${index}`);
    taskTitle.textContent = task.title;
    taskDueDate.textContent = task.dueDate;
    taskPriority.textContent = task.priority;
    removeBtn.textContent = "Remove";
    editBtn.textContent = "Edit";

    // Set classes
    removeBtn.classList.add("remove-btn");
    editBtn.classList.add("edit-btn");

    // Append elements
    taskNode.append(checkBox, taskTitle, taskDueDate, taskPriority, removeBtn, editBtn);
    tasks.append(taskNode);

    // Add event listeners to buttons 
    removeBtn.addEventListener("click", () => {
      removeTask(index);
    });
    editBtn.addEventListener("click", () => {
      editTask(task);
    });
  }

  function editTask(task) {
    editDialog.textContent = "";
    createToDoForm(editDialog, "save", task,
                                       task.title,
                                       task.description,
                                       task.dueDate,
                                       task.priority);
    showDialog(editDialog);
  }

  function removeTask(index) {
    // Set a flag for the selected project
    let selected;

    // Remove task from selected project
    _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].projects.forEach(project => {
      if (project.selected) {
        project.removeToDo(index);
        selected = project;
      }
    });
    tasks.textContent = "";
    displayTasks(selected);
  }

  function displayProjects() {
    _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].projects.forEach((project, index) => displayProject(project, index));
  }

  function displayTasks(project) {
    project.toDos.forEach((task, index)=> displayTask(task, index));
  }

  function addNewProject(input) {
    _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].createProject(input);
    projects.textContent = "";
    displayProjects();
    removeInput();
  }

  function createProjectInput() {
    sidebar.removeChild(addProject);

    // Create elements
    const projectInput = document.createElement("div");
    const projectInputField = document.createElement("input");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    //Add classes
    projectInput.classList.add("add-project-input");
    projectInputField.classList.add("add-project-input-field");
    addBtn.classList.add("add-btn");
    cancelBtn.classList.add("cancel-btn");

    // Set text content
    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";

    // Append elements
    projectInput.append(projectInputField, addBtn, cancelBtn);
    sidebar.append(projectInput);

    // Add event listeners to buttons
    addBtn.addEventListener("click", () => {
      addNewProject(projectInputField);
    });
    cancelBtn.addEventListener("click", removeInput);
  }

  function createToDoForm(dialog, btnName, task = null,
                                           titleValue = "",
                                           dscrpValue = "",
                                           dueDateValue = "",
                                           priorityValue = "") {
    // Create elements
    const todoForm = document.createElement("form");
    const title = document.createElement("div");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const description = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("textarea");
    const dueDate = document.createElement("div");
    const dueDateLabel = document.createElement("label");
    const dueDateInput = document.createElement("input");
    const priority = document.createElement("div");
    const priorityLabel = document.createElement("label");
    const prioritySelect = document.createElement("select");
    const priorityData = ["--Please select task's priority--", "low", "medium", "urgent"];
    const buttons = document.createElement("div");
    const cancelBtn = document.createElement("button");

    // Set text content
    titleLabel.textContent = "Title*:";
    descriptionLabel.textContent = "Description*:";
    dueDateLabel.textContent = "Due date*:";
    priorityLabel.textContent = "Priority*:";
    cancelBtn.textContent = "Cancel";
    priorityData.forEach((data, index) => {
      const option = document.createElement("option");
      option.textContent = data;
      if (index === 0) option.value = "";
      prioritySelect.append(option);
    });

    // Set attributes
    todoForm.id = "todo-form";
    titleLabel.setAttribute("for", "title");
    setAttributes(titleInput, {
      "type": "text",
      "name": "title",
      "id": "title",
      "placeholder": "Grocery",
      "required": "",
      "value": `${titleValue}`,
    });

    descriptionLabel.setAttribute("for", "dscrp");
    setAttributes(descriptionInput, {
      "name": "dscrp",
      "id": "dscrp",
      "placeholder": "Buy bread, etc.",
      "rows": "5",
      "required": "",
    });
    descriptionInput.value = dscrpValue;

    dueDateLabel.setAttribute("for", "due-date");
    setAttributes(dueDateInput, {
      "type": "date",
      "name": "due-date",
      "id": "due-date",
      "required": "",
      "value": `${dueDateValue}`,
    });

    priorityLabel.setAttribute("for", "priority");
    setAttributes(prioritySelect, {
      "name": "priority",
      "id": "priority",
      "required": "",
    });
    prioritySelect.value = priorityValue;

    cancelBtn.setAttribute("type", "button");

    title.classList.add("task-title");
    description.classList.add("dscrp");
    dueDate.classList.add("due-date");
    priority.classList.add("priority");
    buttons.classList.add("form-buttons");
    cancelBtn.classList.add("cancel-btn");

    // Append elements
    title.append(titleLabel, titleInput);
    description.append(descriptionLabel, descriptionInput);
    dueDate.append(dueDateLabel, dueDateInput);
    priority.append(priorityLabel, prioritySelect);
    buttons.append(cancelBtn);
    todoForm.append(title, description, dueDate, priority, buttons);
    dialog.append(todoForm);

    // Create button depending on btnName
    if (btnName === "add") {
      // Create addBtn
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add";
      addBtn.classList.add("add-btn");
      buttons.insertBefore(addBtn, cancelBtn);

      // Add event listener to addBtn
      addBtn.addEventListener("click", (e) => {
        if (todoForm.checkValidity()) {
          e.preventDefault();
          const formData = new FormData(todoForm);
          addNewTask(formData);
          todoForm.reset();
          dialog.close();
        }
     });
    } else {
      // Create saveBtn
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.classList.add("save-btn");
      buttons.insertBefore(saveBtn, cancelBtn);

      // Add event listener to saveBtn
      saveBtn.addEventListener("click", (e) => {
        if (todoForm.checkValidity()) {
          let selected;
          e.preventDefault();
          const formData = new FormData(todoForm);
          task.editTodo(formData);
          todoForm.reset();
          dialog.close();
          tasks.textContent = "";
          _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].projects.forEach(project => {
            if (project.selected) {
              selected = project
            }
          });
          displayTasks(selected);
        }
      })
    }

    cancelBtn.addEventListener("click", () => {
      closeDialog(dialog);
    });
  }

  function addNewTask(formData) {
    // Set a flag for the selected project
    let selected;

    // Add the task to the selected project only
    _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].projects.forEach(project => {
      if (project.selected) {
        project.createToDo(formData);
        selected = project;
      }
    });
    tasks.textContent = "";
    displayTasks(selected);
  }

  function removeInput() {
    sidebar.removeChild(sidebar.lastChild);
    sidebar.append(addProject);
  }

  function closeDialog(dialog) {
    dialog.close();
  }

  function showDialog(dialog) {
    dialog.showModal();
  }

  // Create elements
  const content = document.getElementById("content");
  const addDialog = document.createElement("dialog");
  const editDialog = document.createElement("dialog")
  const header = document.createElement("div");
  const sidebar = document.createElement("div");
  const main = document.createElement("div");

  const projectsTitle = document.createElement("div");
  const projects = document.createElement("div");
  const addProject = document.createElement("div");
  const addProjectIcon = new Image();
  addProjectIcon.src = _svg_icons_plus_svg__WEBPACK_IMPORTED_MODULE_2__;
  addProjectIcon.alt = "Add Project Icon";
  const addProjectText = document.createElement("div");

  const tasksHeader = document.createElement("div");
  const tasks = document.createElement("div");
  const addTask = document.createElement("div");
  const addTaskIcon = new Image();
  addTaskIcon.src = _svg_icons_plus_svg__WEBPACK_IMPORTED_MODULE_2__;
  addTaskIcon.alt = "Add Task icon";
  const addTaskText = document.createElement("div");

  // Create ToDo form and append it to dialog
  createToDoForm(addDialog, "add");

  // Add classes
  header.classList.add("header");
  sidebar.classList.add("sidebar");
  main.classList.add("main");

  projectsTitle.classList.add("title");
  projects.classList.add("projects");
  addProject.classList.add("app-item");

  tasksHeader.classList.add("title");
  tasks.classList.add("tasks");
  addTask.classList.add("app-item");

  // Fill elements
  header.textContent = "ToDo List";
  projectsTitle.textContent = "Projects";
  addProjectText.textContent = "Add Project";
  addTaskText.textContent = "Add Task";
  tasksHeader.textContent = "Default Project";

  // Append elements
  addProject.append(addProjectIcon, addProjectText);
  addTask.append(addTaskIcon, addTaskText);
  sidebar.append(projectsTitle, projects);
  content.append(addDialog, editDialog, header, sidebar, main);

  // Initialize projects
  _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].initializeProjects();

  // Display projects
  displayProjects();

  // Display "add project" button
  sidebar.append(addProject);

  // Display toDosHeader, toDos, and addToDo
  main.append(tasksHeader, tasks, addTask);

  // Add event listeners to addProject and addTask elements to collect input
  // from them and create projects and todos correspondingly
  addProject.addEventListener("click", createProjectInput);
  addTask.addEventListener("click", () => showDialog(addDialog));
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBUTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxrREFBRzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwLWxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLnNpZGViYXIsIFxuLm1haW4sXG4udGFza3MsIFxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDIuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5OTJkNDtcbn1cblxuLnNpZGViYXIge1xuICBnYXA6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYWluIHtcbiAgZ2FwOiAxNXB4O1xufVxuXG4udGFza3Mge1xuICBnYXA6IDEycHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnByb2plY3RzIHtcbiAgZ2FwOiA1cHg7XG59XG5cbi5hcHAtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDEwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMTAwcHggMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4ucHJvamVjdC1pdGVtID4gaW1nOmxhc3QtY2hpbGQge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYXBwLWl0ZW06aG92ZXIsXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG5pbWdbc3JjXFwkPVwic3ZnXCJdIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmFkZC1wcm9qZWN0LWlucHV0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5hZGQtcHJvamVjdC1pbnB1dC1maWVsZCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGhlaWdodDogNDBweDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLmFkZC1idG4sIC5jYW5jZWwtYnRuIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5hZGQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3OSwgMjU1KTtcbn1cblxuLmNhbmNlbC1idG4sIC5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgNTksIDkwKTtcbn1cblxuLmVkaXQtYnRuLCAuc2F2ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMTQ5LCAyNyk7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIHBhZGRpbmc6IDMwcHggMTAwcHg7XG59XG5cbiN0b2RvLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuI3RvZG8tZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4jdG9kby1mb3JtIGlucHV0LCBcbiN0b2RvLWZvcm0gdGV4dGFyZWEsXG4jdG9kby1mb3JtIHNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuI3RvZG8tZm9ybSBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4udGFzay10aXRsZSxcbi5kc2NycCxcbi5kdWUtZGF0ZSxcbi5wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufSBcblxuLmZvcm0tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwMHB4O1xufVxuXG4udGFza3MgPiBkaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggcmVwZWF0KDUsIDE1MHB4KTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaWFsb2cge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3JkZXI6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5zaWRlYmFyLCBcXG4ubWFpbixcXG4udGFza3MsIFxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk5MmQ0O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBnYXA6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYXBwLWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDEwMHB4IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IGltZzpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYXBwLWl0ZW06aG92ZXIsXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG5pbWdbc3JjJD1cXFwic3ZnXFxcIl0ge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1pbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtaW5wdXQtZmllbGQge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLmFkZC1idG4sIC5jYW5jZWwtYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTc5LCAyNTUpO1xcbn1cXG5cXG4uY2FuY2VsLWJ0biwgLnJlbW92ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgNTksIDkwKTtcXG59XFxuXFxuLmVkaXQtYnRuLCAuc2F2ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDE0OSwgMjcpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gIHBhZGRpbmc6IDMwcHggMTAwcHg7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbiN0b2RvLWZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQsIFxcbiN0b2RvLWZvcm0gdGV4dGFyZWEsXFxuI3RvZG8tZm9ybSBzZWxlY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggcmdiKDIyMCwgMjIwLCAyMjApO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiN0b2RvLWZvcm0gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi50YXNrLXRpdGxlLFxcbi5kc2NycCxcXG4uZHVlLWRhdGUsXFxuLnByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufSBcXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi50YXNrcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IHJlcGVhdCg1LCAxNTBweCk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICBib3JkZXI6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IEFwcCA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplUHJvamVjdHMoKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiKTsgIFxuICAgIGRlZmF1bHRQcm9qZWN0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBwcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaW5wdXQpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpO1xuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGluZGV4KSB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7cHJvamVjdHMsIGluaXRpYWxpemVQcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b0RvcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNyZWF0ZVRvRG8oZm9ybURhdGEpIHtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8oZm9ybURhdGEuZ2V0KFwidGl0bGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmdldChcImRzY3JwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5nZXQoXCJkdWUtZGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIikpO1xuICAgIHRoaXMudG9Eb3MucHVzaChuZXdUb0RvKTtcbiAgfVxuXG4gIHJlbW92ZVRvRG8oaW5kZXgpIHtcbiAgICB0aGlzLnRvRG9zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBlZGl0VG9kbyhmb3JtRGF0YSkge1xuICAgIHRoaXMudGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHNjcnBcIik7XG4gICAgdGhpcy5kdWVEYXRlID0gZm9ybURhdGEuZ2V0KFwiZHVlLWRhdGVcIik7XG4gICAgdGhpcy5wcmlvcml0eSA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFByb2plY3RJY29uIGZyb20gXCIuL3N2Zy1pY29ucy9wcm9qZWN0LWljb24uc3ZnXCI7XG5pbXBvcnQgUGx1c0ljb24gZnJvbSBcIi4vc3ZnLWljb25zL3BsdXMuc3ZnXCI7IFxuaW1wb3J0IEJsYWNrUmVtb3ZlSWNvbiBmcm9tIFwiLi9zdmctaWNvbnMvYmxhY2stcmVtb3ZlLnN2Z1wiO1xuaW1wb3J0IFJlZFJlbW92ZUljb24gZnJvbSBcIi4vc3ZnLWljb25zL3JlZC1yZW1vdmUuc3ZnXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcC1sb2dpY1wiO1xuXG4oKCkgPT4ge1xuICAvLyBDcmVhdGUgYSBoZWxwZXIgZm9yIHNldHRpbmcgYXR0cmlidXRlc1xuICBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRQcm9qZWN0KGUpIHtcbiAgICBpZiAoIWFkZFRhc2suaGFzQ2hpbGROb2RlcygpKSBhZGRUYXNrLmFwcGVuZChhZGRUYXNrSWNvbiwgYWRkVGFza1RleHQpO1xuICAgIGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gQXBwLnByb2plY3RzW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XTtcbiAgICBBcHAucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgY2xpY2tlZFByb2plY3Quc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRhc2tzSGVhZGVyLnRleHRDb250ZW50ID0gY2xpY2tlZFByb2plY3QubmFtZTtcbiAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZGlzcGxheVRhc2tzKGNsaWNrZWRQcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QsIGluZGV4KSB7XG4gICAgLy8gQ3JlYXRlIHByb2plY3QgZWxlbWVudHNcbiAgICBjb25zdCBwcm9qZWN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBcbiAgICAvLyBTZXQgcHJvamVjdCBlbGVtZW50cycgY29udGVudFxuICAgIHByb2plY3RJY29uLnNyYyA9IFByb2plY3RJY29uO1xuICAgIHByb2plY3RJY29uLmFsdCA9IFwiUHJvamVjdCBJY29uXCI7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcmVtb3ZlSWNvbi5zcmMgPSBCbGFja1JlbW92ZUljb247XG4gICAgcmVtb3ZlSWNvbi5hbHQgPSBcIlJlbW92ZSBJY29uXCI7XG4gIFxuICAgIC8vIEFkZCBwcm9qZWN0IGVsZW1lbnRzJyBjbGFzc2VzIGFuZCBkYXRhc2V0XG4gICAgcHJvamVjdE5vZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICBwcm9qZWN0Tm9kZS5kYXRhc2V0LmluZGV4ID0gYCR7aW5kZXh9YDtcbiAgXG4gICAgLy8gQXBwZW5kIHByb2plY3QgZWxlbWVudHMgYWNjb3JkaW5nbHlcbiAgICBwcm9qZWN0Tm9kZS5hcHBlbmQocHJvamVjdEljb24sIHByb2plY3ROYW1lLCByZW1vdmVJY29uKTtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0Tm9kZSk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0IG5vZGUgYW5kIHJlbW92ZUljb25cbiAgICBwcm9qZWN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFByb2plY3QpO1xuXG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZW1vdmVQcm9qZWN0KHByb2plY3QsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHByb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgcmVtb3ZlSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfSk7XG4gICAgXG4gICAgcHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIHJlbW92ZUljb24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG5cbiAgICAvLyBNYWtlIHJlbW92ZUljb24gcmVkIHdoZW4gaXQncyBvbiBob3ZlclxuICAgIHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiByZW1vdmVJY29uLnNyYyA9IFJlZFJlbW92ZUljb24pO1xuICAgIHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHJlbW92ZUljb24uc3JjID0gQmxhY2tSZW1vdmVJY29uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCwgaW5kZXgpIHtcbiAgICAvLyBSZW1vdmUgcHJvamVjdCdzIG1haW4gcGFnZSBjb250ZW50cyBpZiBpdCB3YXMgc2VsZWN0ZWRcbiAgICBpZiAocHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgdGFza3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgdGFza3MudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgYWRkVGFzay50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgQXBwLnJlbW92ZVByb2plY3QoaW5kZXgpO1xuICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRhc2ssIGluZGV4KSB7XG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgLy8gU2V0IGF0dHJpYnV0ZXMgYW5kIHRleHQgY29udGVudFxuICAgIHNldEF0dHJpYnV0ZXMoY2hlY2tCb3gsIHtcbiAgICAgIFwibmFtZVwiOiBcInRhc2tcIixcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcImlkXCI6IGB0YXNrLSR7aW5kZXh9YCxcbiAgICB9KTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGB0YXNrLSR7aW5kZXh9YCk7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gICAgLy8gU2V0IGNsYXNzZXNcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZChcInJlbW92ZS1idG5cIik7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG5cIik7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgICB0YXNrTm9kZS5hcHBlbmQoY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgcmVtb3ZlQnRuLCBlZGl0QnRuKTtcbiAgICB0YXNrcy5hcHBlbmQodGFza05vZGUpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byBidXR0b25zIFxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmVtb3ZlVGFzayhpbmRleCk7XG4gICAgfSk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWRpdFRhc2sodGFzayk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VGFzayh0YXNrKSB7XG4gICAgZWRpdERpYWxvZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY3JlYXRlVG9Eb0Zvcm0oZWRpdERpYWxvZywgXCJzYXZlXCIsIHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkpO1xuICAgIHNob3dEaWFsb2coZWRpdERpYWxvZyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgLy8gU2V0IGEgZmxhZyBmb3IgdGhlIHNlbGVjdGVkIHByb2plY3RcbiAgICBsZXQgc2VsZWN0ZWQ7XG5cbiAgICAvLyBSZW1vdmUgdGFzayBmcm9tIHNlbGVjdGVkIHByb2plY3RcbiAgICBBcHAucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LnNlbGVjdGVkKSB7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9EbyhpbmRleCk7XG4gICAgICAgIHNlbGVjdGVkID0gcHJvamVjdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZGlzcGxheVRhc2tzKHNlbGVjdGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBBcHAucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IGRpc3BsYXlQcm9qZWN0KHByb2plY3QsIGluZGV4KSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdCkge1xuICAgIHByb2plY3QudG9Eb3MuZm9yRWFjaCgodGFzaywgaW5kZXgpPT4gZGlzcGxheVRhc2sodGFzaywgaW5kZXgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoaW5wdXQpIHtcbiAgICBBcHAuY3JlYXRlUHJvamVjdChpbnB1dCk7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIHJlbW92ZUlucHV0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0SW5wdXQoKSB7XG4gICAgc2lkZWJhci5yZW1vdmVDaGlsZChhZGRQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdElucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgLy9BZGQgY2xhc3Nlc1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtaW5wdXRcIik7XG4gICAgcHJvamVjdElucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWlucHV0LWZpZWxkXCIpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG5cbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzXG4gICAgcHJvamVjdElucHV0LmFwcGVuZChwcm9qZWN0SW5wdXRGaWVsZCwgYWRkQnRuLCBjYW5jZWxCdG4pO1xuICAgIHNpZGViYXIuYXBwZW5kKHByb2plY3RJbnB1dCk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnNcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZE5ld1Byb2plY3QocHJvamVjdElucHV0RmllbGQpO1xuICAgIH0pO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlSW5wdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9Eb0Zvcm0oZGlhbG9nLCBidG5OYW1lLCB0YXNrID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVZhbHVlID0gXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkc2NycFZhbHVlID0gXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVmFsdWUgPSBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSBcIlwiKSB7XG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgcHJpb3JpdHlEYXRhID0gW1wiLS1QbGVhc2Ugc2VsZWN0IHRhc2sncyBwcmlvcml0eS0tXCIsIFwibG93XCIsIFwibWVkaXVtXCIsIFwidXJnZW50XCJdO1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGUqOlwiO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uKjpcIjtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlKjpcIjtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eSo6XCI7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBwcmlvcml0eURhdGEuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBkYXRhO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgYXR0cmlidXRlc1xuICAgIHRvZG9Gb3JtLmlkID0gXCJ0b2RvLWZvcm1cIjtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICAgIHNldEF0dHJpYnV0ZXModGl0bGVJbnB1dCwge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwidGl0bGVcIixcbiAgICAgIFwiaWRcIjogXCJ0aXRsZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkdyb2NlcnlcIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwidmFsdWVcIjogYCR7dGl0bGVWYWx1ZX1gLFxuICAgIH0pO1xuXG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkc2NycFwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uSW5wdXQsIHtcbiAgICAgIFwibmFtZVwiOiBcImRzY3JwXCIsXG4gICAgICBcImlkXCI6IFwiZHNjcnBcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJCdXkgYnJlYWQsIGV0Yy5cIixcbiAgICAgIFwicm93c1wiOiBcIjVcIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICB9KTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZHNjcnBWYWx1ZTtcblxuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGR1ZURhdGVJbnB1dCwge1xuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZHVlLWRhdGVcIixcbiAgICAgIFwiaWRcIjogXCJkdWUtZGF0ZVwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgICAgXCJ2YWx1ZVwiOiBgJHtkdWVEYXRlVmFsdWV9YCxcbiAgICB9KTtcblxuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgc2V0QXR0cmlidXRlcyhwcmlvcml0eVNlbGVjdCwge1xuICAgICAgXCJuYW1lXCI6IFwicHJpb3JpdHlcIixcbiAgICAgIFwiaWRcIjogXCJwcmlvcml0eVwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgIH0pO1xuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gcHJpb3JpdHlWYWx1ZTtcblxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRzY3JwXCIpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ1dHRvbnNcIik7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnRuXCIpO1xuXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzXG4gICAgdGl0bGUuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0KTtcbiAgICBkdWVEYXRlLmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XG4gICAgcHJpb3JpdHkuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcbiAgICBidXR0b25zLmFwcGVuZChjYW5jZWxCdG4pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBidXR0b25zKTtcbiAgICBkaWFsb2cuYXBwZW5kKHRvZG9Gb3JtKTtcblxuICAgIC8vIENyZWF0ZSBidXR0b24gZGVwZW5kaW5nIG9uIGJ0bk5hbWVcbiAgICBpZiAoYnRuTmFtZSA9PT0gXCJhZGRcIikge1xuICAgICAgLy8gQ3JlYXRlIGFkZEJ0blxuICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1idG5cIik7XG4gICAgICBidXR0b25zLmluc2VydEJlZm9yZShhZGRCdG4sIGNhbmNlbEJ0bik7XG5cbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBhZGRCdG5cbiAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKHRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0b2RvRm9ybSk7XG4gICAgICAgICAgYWRkTmV3VGFzayhmb3JtRGF0YSk7XG4gICAgICAgICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIHNhdmVCdG5cbiAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKFwic2F2ZS1idG5cIik7XG4gICAgICBidXR0b25zLmluc2VydEJlZm9yZShzYXZlQnRuLCBjYW5jZWxCdG4pO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gc2F2ZUJ0blxuICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKHRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgIGxldCBzZWxlY3RlZDtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodG9kb0Zvcm0pO1xuICAgICAgICAgIHRhc2suZWRpdFRvZG8oZm9ybURhdGEpO1xuICAgICAgICAgIHRvZG9Gb3JtLnJlc2V0KCk7XG4gICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgdGFza3MudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIEFwcC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBwcm9qZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGlzcGxheVRhc2tzKHNlbGVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlRGlhbG9nKGRpYWxvZyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGROZXdUYXNrKGZvcm1EYXRhKSB7XG4gICAgLy8gU2V0IGEgZmxhZyBmb3IgdGhlIHNlbGVjdGVkIHByb2plY3RcbiAgICBsZXQgc2VsZWN0ZWQ7XG5cbiAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIHNlbGVjdGVkIHByb2plY3Qgb25seVxuICAgIEFwcC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgICAgcHJvamVjdC5jcmVhdGVUb0RvKGZvcm1EYXRhKTtcbiAgICAgICAgc2VsZWN0ZWQgPSBwcm9qZWN0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRhc2tzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkaXNwbGF5VGFza3Moc2VsZWN0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSW5wdXQoKSB7XG4gICAgc2lkZWJhci5yZW1vdmVDaGlsZChzaWRlYmFyLmxhc3RDaGlsZCk7XG4gICAgc2lkZWJhci5hcHBlbmQoYWRkUHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZURpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dEaWFsb2coZGlhbG9nKSB7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGFkZERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYWRkUHJvamVjdEljb24uc3JjID0gUGx1c0ljb247XG4gIGFkZFByb2plY3RJY29uLmFsdCA9IFwiQWRkIFByb2plY3QgSWNvblwiO1xuICBjb25zdCBhZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRUYXNrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRUYXNrSWNvbi5zcmMgPSBQbHVzSWNvbjtcbiAgYWRkVGFza0ljb24uYWx0ID0gXCJBZGQgVGFzayBpY29uXCI7XG4gIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyBDcmVhdGUgVG9EbyBmb3JtIGFuZCBhcHBlbmQgaXQgdG8gZGlhbG9nXG4gIGNyZWF0ZVRvRG9Gb3JtKGFkZERpYWxvZywgXCJhZGRcIik7XG5cbiAgLy8gQWRkIGNsYXNzZXNcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgcHJvamVjdHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYXBwLWl0ZW1cIik7XG5cbiAgdGFza3NIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG4gIGFkZFRhc2suY2xhc3NMaXN0LmFkZChcImFwcC1pdGVtXCIpO1xuXG4gIC8vIEZpbGwgZWxlbWVudHNcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUb0RvIExpc3RcIjtcbiAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgYWRkUHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICB0YXNrc0hlYWRlci50ZXh0Q29udGVudCA9IFwiRGVmYXVsdCBQcm9qZWN0XCI7XG5cbiAgLy8gQXBwZW5kIGVsZW1lbnRzXG4gIGFkZFByb2plY3QuYXBwZW5kKGFkZFByb2plY3RJY29uLCBhZGRQcm9qZWN0VGV4dCk7XG4gIGFkZFRhc2suYXBwZW5kKGFkZFRhc2tJY29uLCBhZGRUYXNrVGV4dCk7XG4gIHNpZGViYXIuYXBwZW5kKHByb2plY3RzVGl0bGUsIHByb2plY3RzKTtcbiAgY29udGVudC5hcHBlbmQoYWRkRGlhbG9nLCBlZGl0RGlhbG9nLCBoZWFkZXIsIHNpZGViYXIsIG1haW4pO1xuXG4gIC8vIEluaXRpYWxpemUgcHJvamVjdHNcbiAgQXBwLmluaXRpYWxpemVQcm9qZWN0cygpO1xuXG4gIC8vIERpc3BsYXkgcHJvamVjdHNcbiAgZGlzcGxheVByb2plY3RzKCk7XG5cbiAgLy8gRGlzcGxheSBcImFkZCBwcm9qZWN0XCIgYnV0dG9uXG4gIHNpZGViYXIuYXBwZW5kKGFkZFByb2plY3QpO1xuXG4gIC8vIERpc3BsYXkgdG9Eb3NIZWFkZXIsIHRvRG9zLCBhbmQgYWRkVG9Eb1xuICBtYWluLmFwcGVuZCh0YXNrc0hlYWRlciwgdGFza3MsIGFkZFRhc2spO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gYWRkUHJvamVjdCBhbmQgYWRkVGFzayBlbGVtZW50cyB0byBjb2xsZWN0IGlucHV0XG4gIC8vIGZyb20gdGhlbSBhbmQgY3JlYXRlIHByb2plY3RzIGFuZCB0b2RvcyBjb3JyZXNwb25kaW5nbHlcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdElucHV0KTtcbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd0RpYWxvZyhhZGREaWFsb2cpKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9