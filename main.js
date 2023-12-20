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
  grid-template-columns: 30px 150px 1fr;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,aAAa;EACb,iCAAiC;EACjC,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,SAAS;EACT,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,oCAAoC;EACpC,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;;EAIE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX","sourcesContent":["html {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n::backdrop {\n  backdrop-filter: blur(4px);\n}\n\n.selected {\n  background-color: #CCC;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 100px 1fr;\n  height: inherit;\n}\n\n.sidebar, \n.main,\n.tasks, \n.projects {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  padding-left: 50px;\n  font-size: 2.8rem;\n  font-weight: bold;\n  color: white;\n  background-color: #1992d4;\n}\n\n.sidebar {\n  gap: 15px;\n  background-color: #ddd;\n  padding: 20px;\n}\n\n.main {\n  gap: 15px;\n}\n\n.tasks {\n  gap: 12px;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\n.projects {\n  gap: 5px;\n}\n\n.app-item {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 30px 100px;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n}\n\n.project-item {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 30px 150px 1fr;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n}\n\n.project-item > img:last-child {\n  justify-self: end;\n  visibility: hidden;\n}\n\n.app-item:hover,\n.project-item:hover {\n  border-radius: 5px;\n  background-color: #ccc;\n}\n\nimg[src$=\"svg\"] {\n  width: 25px;\n  height: 25px;\n}\n\n.add-project-input {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.add-project-input-field {\n  padding: 0 10px;\n  font-size: 1.1rem;\n  border: 0;\n  border-radius: 5px;\n  grid-column: 1 / 3;\n  height: 40px;\n}\n\nbutton {\n  cursor: pointer;\n  color: #fff;\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n  border: 0;\n  font-size: 1.1rem;\n}\n\nbutton:active {\n  transform: translateY(4px);\n}\n\n.add-btn, .cancel-btn {\n  justify-self: center;\n}\n\n.add-btn {\n  background-color: rgb(0, 179, 255);\n}\n\n.cancel-btn, .remove-btn {\n  background-color: rgb(243, 59, 90);\n}\n\n.edit-btn, .save-btn {\n  background-color: rgb(6, 149, 27);\n}\n\n.main {\n  background-color: beige;\n  padding: 30px 100px;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  width: 600px;\n}\n\n#todo-form label {\n  font-size: 1.3rem;\n}\n\n#todo-form input, \n#todo-form textarea,\n#todo-form select {\n  border: 1px solid rgb(221, 221, 221);\n  font-size: 1rem;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n  box-shadow: 4px 4px 5px rgb(220, 220, 220);\n}\n\ntextarea {\n  resize: none;\n}\n\n#todo-form select {\n  background-color: #fff;\n}\n\n.task-title,\n.dscrp,\n.due-date,\n.priority {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n} \n\n.form-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n}\n\n.tasks > div {\n  display: grid;\n  grid-template-columns: 20px repeat(5, 150px);\n  justify-items: center;\n  align-items: center;\n}\n\ndialog {\n  border-radius: 15px;\n  padding: 32px;\n  border: 0;\n}"],"sourceRoot":""}]);
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

  function initializeApp() {
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

  return {projects, initializeApp, createProject, removeProject};
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

  // Initialize the app
  _app_logic__WEBPACK_IMPORTED_MODULE_5__["default"].initializeApp();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBUTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxrREFBRzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwLWxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLnNpZGViYXIsIFxuLm1haW4sXG4udGFza3MsIFxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDIuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5OTJkNDtcbn1cblxuLnNpZGViYXIge1xuICBnYXA6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYWluIHtcbiAgZ2FwOiAxNXB4O1xufVxuXG4udGFza3Mge1xuICBnYXA6IDEycHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnByb2plY3RzIHtcbiAgZ2FwOiA1cHg7XG59XG5cbi5hcHAtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDEwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMTUwcHggMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4ucHJvamVjdC1pdGVtID4gaW1nOmxhc3QtY2hpbGQge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYXBwLWl0ZW06aG92ZXIsXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG5pbWdbc3JjXFwkPVwic3ZnXCJdIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmFkZC1wcm9qZWN0LWlucHV0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5hZGQtcHJvamVjdC1pbnB1dC1maWVsZCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGhlaWdodDogNDBweDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLmFkZC1idG4sIC5jYW5jZWwtYnRuIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5hZGQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3OSwgMjU1KTtcbn1cblxuLmNhbmNlbC1idG4sIC5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgNTksIDkwKTtcbn1cblxuLmVkaXQtYnRuLCAuc2F2ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMTQ5LCAyNyk7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIHBhZGRpbmc6IDMwcHggMTAwcHg7XG59XG5cbiN0b2RvLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuI3RvZG8tZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4jdG9kby1mb3JtIGlucHV0LCBcbiN0b2RvLWZvcm0gdGV4dGFyZWEsXG4jdG9kby1mb3JtIHNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggcmdiKDIyMCwgMjIwLCAyMjApO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuI3RvZG8tZm9ybSBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4udGFzay10aXRsZSxcbi5kc2NycCxcbi5kdWUtZGF0ZSxcbi5wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufSBcblxuLmZvcm0tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwMHB4O1xufVxuXG4udGFza3MgPiBkaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggcmVwZWF0KDUsIDE1MHB4KTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaWFsb2cge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3JkZXI6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5zaWRlYmFyLCBcXG4ubWFpbixcXG4udGFza3MsIFxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk5MmQ0O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBnYXA6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYXBwLWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDE1MHB4IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IGltZzpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYXBwLWl0ZW06aG92ZXIsXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG5pbWdbc3JjJD1cXFwic3ZnXFxcIl0ge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1pbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtaW5wdXQtZmllbGQge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLmFkZC1idG4sIC5jYW5jZWwtYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTc5LCAyNTUpO1xcbn1cXG5cXG4uY2FuY2VsLWJ0biwgLnJlbW92ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgNTksIDkwKTtcXG59XFxuXFxuLmVkaXQtYnRuLCAuc2F2ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDE0OSwgMjcpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gIHBhZGRpbmc6IDMwcHggMTAwcHg7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbiN0b2RvLWZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQsIFxcbiN0b2RvLWZvcm0gdGV4dGFyZWEsXFxuI3RvZG8tZm9ybSBzZWxlY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA1cHggcmdiKDIyMCwgMjIwLCAyMjApO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiN0b2RvLWZvcm0gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi50YXNrLXRpdGxlLFxcbi5kc2NycCxcXG4uZHVlLWRhdGUsXFxuLnByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufSBcXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi50YXNrcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IHJlcGVhdCg1LCAxNTBweCk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICBib3JkZXI6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IEFwcCA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7ICBcbiAgICBkZWZhdWx0UHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGlucHV0KSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByZXR1cm4ge3Byb2plY3RzLCBpbml0aWFsaXplQXBwLCBjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvRG9zID0gW107XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlVG9Ebyhmb3JtRGF0YSkge1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXcgVG9Ebyhmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuZ2V0KFwiZHNjcnBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmdldChcImR1ZS1kYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKSk7XG4gICAgdGhpcy50b0Rvcy5wdXNoKG5ld1RvRG8pO1xuICB9XG5cbiAgcmVtb3ZlVG9EbyhpbmRleCkge1xuICAgIHRoaXMudG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGVkaXRUb2RvKGZvcm1EYXRhKSB7XG4gICAgdGhpcy50aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkc2NycFwiKTtcbiAgICB0aGlzLmR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJkdWUtZGF0ZVwiKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9EbzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgUHJvamVjdEljb24gZnJvbSBcIi4vc3ZnLWljb25zL3Byb2plY3QtaWNvbi5zdmdcIjtcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi9zdmctaWNvbnMvcGx1cy5zdmdcIjsgXG5pbXBvcnQgQmxhY2tSZW1vdmVJY29uIGZyb20gXCIuL3N2Zy1pY29ucy9ibGFjay1yZW1vdmUuc3ZnXCI7XG5pbXBvcnQgUmVkUmVtb3ZlSWNvbiBmcm9tIFwiLi9zdmctaWNvbnMvcmVkLXJlbW92ZS5zdmdcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLWxvZ2ljXCI7XG5cbigoKSA9PiB7XG4gIC8vIENyZWF0ZSBhIGhlbHBlciBmb3Igc2V0dGluZyBhdHRyaWJ1dGVzXG4gIGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJzKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZFByb2plY3QoZSkge1xuICAgIGlmICghYWRkVGFzay5oYXNDaGlsZE5vZGVzKCkpIGFkZFRhc2suYXBwZW5kKGFkZFRhc2tJY29uLCBhZGRUYXNrVGV4dCk7XG4gICAgY29uc3QgY2xpY2tlZFByb2plY3QgPSBBcHAucHJvamVjdHNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdO1xuICAgIEFwcC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICBjbGlja2VkUHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGFza3NIZWFkZXIudGV4dENvbnRlbnQgPSBjbGlja2VkUHJvamVjdC5uYW1lO1xuICAgIHRhc2tzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkaXNwbGF5VGFza3MoY2xpY2tlZFByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdCwgaW5kZXgpIHtcbiAgICAvLyBDcmVhdGUgcHJvamVjdCBlbGVtZW50c1xuICAgIGNvbnN0IHByb2plY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmVJY29uID0gbmV3IEltYWdlKCk7XG4gIFxuICAgIC8vIFNldCBwcm9qZWN0IGVsZW1lbnRzJyBjb250ZW50XG4gICAgcHJvamVjdEljb24uc3JjID0gUHJvamVjdEljb247XG4gICAgcHJvamVjdEljb24uYWx0ID0gXCJQcm9qZWN0IEljb25cIjtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICByZW1vdmVJY29uLnNyYyA9IEJsYWNrUmVtb3ZlSWNvbjtcbiAgICByZW1vdmVJY29uLmFsdCA9IFwiUmVtb3ZlIEljb25cIjtcbiAgXG4gICAgLy8gQWRkIHByb2plY3QgZWxlbWVudHMnIGNsYXNzZXMgYW5kIGRhdGFzZXRcbiAgICBwcm9qZWN0Tm9kZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuICAgIHByb2plY3ROb2RlLmRhdGFzZXQuaW5kZXggPSBgJHtpbmRleH1gO1xuICBcbiAgICAvLyBBcHBlbmQgcHJvamVjdCBlbGVtZW50cyBhY2NvcmRpbmdseVxuICAgIHByb2plY3ROb2RlLmFwcGVuZChwcm9qZWN0SWNvbiwgcHJvamVjdE5hbWUsIHJlbW92ZUljb24pO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3ROb2RlKTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3Qgbm9kZSBhbmQgcmVtb3ZlSWNvblxuICAgIHByb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkUHJvamVjdCk7XG5cbiAgICByZW1vdmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdCwgaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICByZW1vdmVJY29uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9KTtcbiAgICBcbiAgICBwcm9qZWN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgcmVtb3ZlSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9KTtcblxuICAgIC8vIE1ha2UgcmVtb3ZlSWNvbiByZWQgd2hlbiBpdCdzIG9uIGhvdmVyXG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHJlbW92ZUljb24uc3JjID0gUmVkUmVtb3ZlSWNvbik7XG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gcmVtb3ZlSWNvbi5zcmMgPSBCbGFja1JlbW92ZUljb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0LCBpbmRleCkge1xuICAgIC8vIFJlbW92ZSBwcm9qZWN0J3MgbWFpbiBwYWdlIGNvbnRlbnRzIGlmIGl0IHdhcyBzZWxlY3RlZFxuICAgIGlmIChwcm9qZWN0LnNlbGVjdGVkKSB7XG4gICAgICB0YXNrc0hlYWRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBBcHAucmVtb3ZlUHJvamVjdChpbmRleCk7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaywgaW5kZXgpIHtcbiAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAvLyBTZXQgYXR0cmlidXRlcyBhbmQgdGV4dCBjb250ZW50XG4gICAgc2V0QXR0cmlidXRlcyhjaGVja0JveCwge1xuICAgICAgXCJuYW1lXCI6IFwidGFza1wiLFxuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwiaWRcIjogYHRhc2stJHtpbmRleH1gLFxuICAgIH0pO1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYHRhc2stJHtpbmRleH1gKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJSZW1vdmVcIjtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgICAvLyBTZXQgY2xhc3Nlc1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWJ0blwiKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcblxuICAgIC8vIEFwcGVuZCBlbGVtZW50c1xuICAgIHRhc2tOb2RlLmFwcGVuZChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5LCByZW1vdmVCdG4sIGVkaXRCdG4pO1xuICAgIHRhc2tzLmFwcGVuZCh0YXNrTm9kZSk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnMgXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW1vdmVUYXNrKGluZGV4KTtcbiAgICB9KTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0VGFzayh0YXNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2spIHtcbiAgICBlZGl0RGlhbG9nLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjcmVhdGVUb0RvRm9ybShlZGl0RGlhbG9nLCBcInNhdmVcIiwgdGFzayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSk7XG4gICAgc2hvd0RpYWxvZyhlZGl0RGlhbG9nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAvLyBTZXQgYSBmbGFnIGZvciB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGxldCBzZWxlY3RlZDtcblxuICAgIC8vIFJlbW92ZSB0YXNrIGZyb20gc2VsZWN0ZWQgcHJvamVjdFxuICAgIEFwcC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQpIHtcbiAgICAgICAgcHJvamVjdC5yZW1vdmVUb0RvKGluZGV4KTtcbiAgICAgICAgc2VsZWN0ZWQgPSBwcm9qZWN0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRhc2tzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkaXNwbGF5VGFza3Moc2VsZWN0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIEFwcC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gZGlzcGxheVByb2plY3QocHJvamVjdCwgaW5kZXgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhwcm9qZWN0KSB7XG4gICAgcHJvamVjdC50b0Rvcy5mb3JFYWNoKCh0YXNrLCBpbmRleCk9PiBkaXNwbGF5VGFzayh0YXNrLCBpbmRleCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTmV3UHJvamVjdChpbnB1dCkge1xuICAgIEFwcC5jcmVhdGVQcm9qZWN0KGlucHV0KTtcbiAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgcmVtb3ZlSW5wdXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJbnB1dCgpIHtcbiAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGFkZFByb2plY3QpO1xuXG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAvL0FkZCBjbGFzc2VzXG4gICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1pbnB1dFwiKTtcbiAgICBwcm9qZWN0SW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtaW5wdXQtZmllbGRcIik7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kKHByb2plY3RJbnB1dEZpZWxkLCBhZGRCdG4sIGNhbmNlbEJ0bik7XG4gICAgc2lkZWJhci5hcHBlbmQocHJvamVjdElucHV0KTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gYnV0dG9uc1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkTmV3UHJvamVjdChwcm9qZWN0SW5wdXRGaWVsZCk7XG4gICAgfSk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVJbnB1dCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUb0RvRm9ybShkaWFsb2csIGJ0bk5hbWUsIHRhc2sgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlVmFsdWUgPSBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzY3JwVmFsdWUgPSBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVWYWx1ZSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9IFwiXCIpIHtcbiAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eURhdGEgPSBbXCItLVBsZWFzZSBzZWxlY3QgdGFzaydzIHByaW9yaXR5LS1cIiwgXCJsb3dcIiwgXCJtZWRpdW1cIiwgXCJ1cmdlbnRcIl07XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZSo6XCI7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb24qOlwiO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGUqOlwiO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5KjpcIjtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIHByaW9yaXR5RGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGRhdGE7XG4gICAgICBpZiAoaW5kZXggPT09IDApIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgdG9kb0Zvcm0uaWQgPSBcInRvZG8tZm9ybVwiO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gICAgc2V0QXR0cmlidXRlcyh0aXRsZUlucHV0LCB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0aXRsZVwiLFxuICAgICAgXCJpZFwiOiBcInRpdGxlXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiR3JvY2VyeVwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgICAgXCJ2YWx1ZVwiOiBgJHt0aXRsZVZhbHVlfWAsXG4gICAgfSk7XG5cbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRzY3JwXCIpO1xuICAgIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25JbnB1dCwge1xuICAgICAgXCJuYW1lXCI6IFwiZHNjcnBcIixcbiAgICAgIFwiaWRcIjogXCJkc2NycFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkJ1eSBicmVhZCwgZXRjLlwiLFxuICAgICAgXCJyb3dzXCI6IFwiNVwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgIH0pO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkc2NycFZhbHVlO1xuXG4gICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZS1kYXRlXCIpO1xuICAgIHNldEF0dHJpYnV0ZXMoZHVlRGF0ZUlucHV0LCB7XG4gICAgICBcInR5cGVcIjogXCJkYXRlXCIsXG4gICAgICBcIm5hbWVcIjogXCJkdWUtZGF0ZVwiLFxuICAgICAgXCJpZFwiOiBcImR1ZS1kYXRlXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFwiXCIsXG4gICAgICBcInZhbHVlXCI6IGAke2R1ZURhdGVWYWx1ZX1gLFxuICAgIH0pO1xuXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKHByaW9yaXR5U2VsZWN0LCB7XG4gICAgICBcIm5hbWVcIjogXCJwcmlvcml0eVwiLFxuICAgICAgXCJpZFwiOiBcInByaW9yaXR5XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFwiXCIsXG4gICAgfSk7XG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBwcmlvcml0eVZhbHVlO1xuXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZHNjcnBcIik7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImZvcm0tYnV0dG9uc1wiKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgICB0aXRsZS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGR1ZURhdGUuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcbiAgICBwcmlvcml0eS5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuICAgIGJ1dHRvbnMuYXBwZW5kKGNhbmNlbEJ0bik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGJ1dHRvbnMpO1xuICAgIGRpYWxvZy5hcHBlbmQodG9kb0Zvcm0pO1xuXG4gICAgLy8gQ3JlYXRlIGJ1dHRvbiBkZXBlbmRpbmcgb24gYnRuTmFtZVxuICAgIGlmIChidG5OYW1lID09PSBcImFkZFwiKSB7XG4gICAgICAvLyBDcmVhdGUgYWRkQnRuXG4gICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKTtcbiAgICAgIGJ1dHRvbnMuaW5zZXJ0QmVmb3JlKGFkZEJ0biwgY2FuY2VsQnRuKTtcblxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGFkZEJ0blxuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAodG9kb0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRvZG9Gb3JtKTtcbiAgICAgICAgICBhZGROZXdUYXNrKGZvcm1EYXRhKTtcbiAgICAgICAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDcmVhdGUgc2F2ZUJ0blxuICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWJ0blwiKTtcbiAgICAgIGJ1dHRvbnMuaW5zZXJ0QmVmb3JlKHNhdmVCdG4sIGNhbmNlbEJ0bik7XG5cbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBzYXZlQnRuXG4gICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAodG9kb0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgbGV0IHNlbGVjdGVkO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0b2RvRm9ybSk7XG4gICAgICAgICAgdGFzay5lZGl0VG9kbyhmb3JtRGF0YSk7XG4gICAgICAgICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgQXBwLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICBzZWxlY3RlZCA9IHByb2plY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkaXNwbGF5VGFza3Moc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VEaWFsb2coZGlhbG9nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5ld1Rhc2soZm9ybURhdGEpIHtcbiAgICAvLyBTZXQgYSBmbGFnIGZvciB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGxldCBzZWxlY3RlZDtcblxuICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCBvbmx5XG4gICAgQXBwLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBpZiAocHJvamVjdC5zZWxlY3RlZCkge1xuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRvRG8oZm9ybURhdGEpO1xuICAgICAgICBzZWxlY3RlZCA9IHByb2plY3Q7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGFza3MudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRpc3BsYXlUYXNrcyhzZWxlY3RlZCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVJbnB1dCgpIHtcbiAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKHNpZGViYXIubGFzdENoaWxkKTtcbiAgICBzaWRlYmFyLmFwcGVuZChhZGRQcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlRGlhbG9nKGRpYWxvZykge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0RpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gIH1cblxuICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgYWRkRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIilcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRQcm9qZWN0SWNvbi5zcmMgPSBQbHVzSWNvbjtcbiAgYWRkUHJvamVjdEljb24uYWx0ID0gXCJBZGQgUHJvamVjdCBJY29uXCI7XG4gIGNvbnN0IGFkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZFRhc2tJY29uID0gbmV3IEltYWdlKCk7XG4gIGFkZFRhc2tJY29uLnNyYyA9IFBsdXNJY29uO1xuICBhZGRUYXNrSWNvbi5hbHQgPSBcIkFkZCBUYXNrIGljb25cIjtcbiAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIENyZWF0ZSBUb0RvIGZvcm0gYW5kIGFwcGVuZCBpdCB0byBkaWFsb2dcbiAgY3JlYXRlVG9Eb0Zvcm0oYWRkRGlhbG9nLCBcImFkZFwiKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICBwcm9qZWN0c1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhcHAtaXRlbVwiKTtcblxuICB0YXNrc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRhc2tzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1wiKTtcbiAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiYXBwLWl0ZW1cIik7XG5cbiAgLy8gRmlsbCBlbGVtZW50c1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvRG8gTGlzdFwiO1xuICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBhZGRQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgYWRkVGFza1RleHQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIHRhc2tzSGVhZGVyLnRleHRDb250ZW50ID0gXCJEZWZhdWx0IFByb2plY3RcIjtcblxuICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgYWRkUHJvamVjdC5hcHBlbmQoYWRkUHJvamVjdEljb24sIGFkZFByb2plY3RUZXh0KTtcbiAgYWRkVGFzay5hcHBlbmQoYWRkVGFza0ljb24sIGFkZFRhc2tUZXh0KTtcbiAgc2lkZWJhci5hcHBlbmQocHJvamVjdHNUaXRsZSwgcHJvamVjdHMpO1xuICBjb250ZW50LmFwcGVuZChhZGREaWFsb2csIGVkaXREaWFsb2csIGhlYWRlciwgc2lkZWJhciwgbWFpbik7XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgYXBwXG4gIEFwcC5pbml0aWFsaXplQXBwKCk7XG5cbiAgLy8gRGlzcGxheSBwcm9qZWN0c1xuICBkaXNwbGF5UHJvamVjdHMoKTtcblxuICAvLyBEaXNwbGF5IFwiYWRkIHByb2plY3RcIiBidXR0b25cbiAgc2lkZWJhci5hcHBlbmQoYWRkUHJvamVjdCk7XG5cbiAgLy8gRGlzcGxheSB0b0Rvc0hlYWRlciwgdG9Eb3MsIGFuZCBhZGRUb0RvXG4gIG1haW4uYXBwZW5kKHRhc2tzSGVhZGVyLCB0YXNrcywgYWRkVGFzayk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byBhZGRQcm9qZWN0IGFuZCBhZGRUYXNrIGVsZW1lbnRzIHRvIGNvbGxlY3QgaW5wdXRcbiAgLy8gZnJvbSB0aGVtIGFuZCBjcmVhdGUgcHJvamVjdHMgYW5kIHRvZG9zIGNvcnJlc3BvbmRpbmdseVxuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0SW5wdXQpO1xuICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93RGlhbG9nKGFkZERpYWxvZykpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=