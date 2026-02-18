/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SNPro-VariableFont_wght.ttf */ \"./src/fonts/SNPro-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-VariableFont_wdth,wght.ttf */ \"./src/fonts/Roboto-VariableFont_wdth,wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\n@font-face{\n    font-family: \"SN Pro\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face{\n    font-family: \"Roboto\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n:root{\n    --primary-color: rgb(248, 206, 117);\n    --secondary-color: rgb(0, 0, 0);\n    --menu-color: #fff8e6;\n    --hover-color: rgb(246, 184, 51);\n    --font-size-large: clamp(1.2rem, 2vw, 1.5rem);\n    --font-size-normal: clamp(1rem, 1.3vw, 1.2rem);\n}\n\nbody{\n    display: grid;\n    grid-template-rows: 0.3fr 4fr;\n    grid-auto-flow: row;\n    height: 100vh;\n}\n\n#content{\n    transition: 0.3s ease;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/*HEADER SECTION*/\nheader{\n    flex: 0.3;\n    display: grid;\n    grid-template-columns: 0.3fr 3fr;\n    grid-auto-flow: columns;\n    gap: 50px;\n    background-color: var(--secondary-color);\n    padding: 5px;\n}\n\n.company-name{\n    font-family: \"SN Pro\";\n    color: var(--primary-color);\n}\n\n.company-name:hover{\n    cursor: pointer;\n}\n\nheader>nav{\n    width: 100%;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 30px;\n}\n\n.nav-buttons{\n    font-family: \"Roboto\";\n    font-weight: bold;\n    font-size: 10px;\n    background-color: var(--primary-color);\n    color: black;\n    padding: 10px;\n    border: 0;\n    border-radius: 8px;\n    height: 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: transform 0.2s ease;\n}\n\n.nav-buttons:hover{\n    cursor: pointer;\n    transform: scale(1.06);\n    background-color: var(--hover-color);\n}\n\n\n/*HOME PAGE*/\n.intro-container{\n    position: relative;\n    overflow: hidden;\n    height: 50vh;\n    width: 50vw;\n    flex: 1;\n\n    margin: auto;\n}\n\n\n.intro-text{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--primary-color);\n    font-size: 1.2rem;\n    text-align: center;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 5rem;\n}\n\n.intro-header{\n    font-family: \"SN Pro\";\n    font-weight: bold;\n    font-size: var(--font-size-large);\n}\n\n.intro-body{\n    font-family: \"Roboto\";\n    font-size: var(--font-size-normal);\n}\n\n.background-image{\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    filter: blur(1.3px) brightness(0.5);\n    transform: scale(1.05);\n}\n\n\n/*MENU PAGE*/\n.menu-container{\n    position: relative;\n    overflow: hidden;\n    width: 50vw;\n\n    margin: 8% auto;\n\n    display: grid;\n    grid-template-rows: 0.3fr 4fr;\n    grid-auto-flow: rows;\n    gap: 15px;\n    /* padding: 15px; */\n    border: 3px solid black;\n\n    background-color: var(--menu-color);\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);\n    transition: 0.5s transform;\n}\n\n.menu-container:hover{\n    transform: scale(1.01);\n}\n\n.menu-legend{\n    border-bottom: 2px solid black;\n    padding: 15px;\n}\n\n.menu-legend-text{\n    text-align: center;\n    font-size: var(--font-size-large);\n    transition: 0.2s transform;\n}\n\n.menu-legend-text:hover{\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n.menu-items-container{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.menu-category{\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid black;\n    padding: 15px;\n}\n\n.menu-category:last-child{\n    border-bottom: 0;\n}\n\n.menu-category-header{\n    margin-bottom: 15px;\n    font-size: var(--font-size-large);\n}\n\n.menu-category-items{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 100px);\n    grid-auto-flow: row;\n    gap: 80px;\n    row-gap: 30px;\n}\n\n.menu-item-image{\n    width: 110px;\n    height: 100px;\n}\n\n.menu-item-card{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--font-size-normal);\n    gap: 5px;\n    transition: 0.2s transform;\n}\n\n.menu-item-card:hover{\n    cursor: pointer;\n    transform: scale(1.03);\n}\n\n\n\n/*ABOUT PAGE*/\n.about-container{\n    position: relative;\n    overflow: hidden;\n    width: 50vw;\n\n    margin: 8% auto;\n\n    display: grid;\n    grid-template-rows: 0.3fr 4fr;\n    grid-auto-flow: rows;\n    /* padding: 15px; */\n    border: 3px solid black;\n\n    background-color: var(--menu-color);\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);\n    transition: 0.5s transform;\n}\n\n.about-container:hover{\n    transform: scale(1.02);\n}\n\n.about-legend-section{\n    padding: 15px;\n}\n\n.about-legend{\n    text-align: center;\n    font-family: \"Roboto\";\n    font-size: var(--font-size-large);\n}\n\n.about-content-section{\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.about-section-header>*{\n    text-align: center;\n    font-size: var(--font-size-large);\n}\n\n.about-section-content{\n    text-align: center;\n    font-family: \"SN Pro\";\n}\n\n.timing-section>*{\n    padding: 2px;\n}\n\n.welcome-section-content{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.welcome-section-header>*{\n    text-align: left;\n}\n\n.welcome-section>*{\n    text-align: left;\n    padding: 3px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ renderAbout)\n/* harmony export */ });\n/* harmony import */ var _aboutSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutSection.js */ \"./src/aboutSection.js\");\n\n\nfunction renderAbout(contentContainer){\n    if(contentContainer.children.length > 0){\n        contentContainer.innerHTML = '';\n    }\n\n    let aboutContainer = document.createElement('div');\n    aboutContainer.className = \"about-container\";\n\n    let aboutLegendSection = document.createElement('div');\n    aboutLegendSection.className = \"about-legend-section\";\n    let aboutLegend = document.createElement('h3');\n    aboutLegend.textContent = \"ABOUT US\";\n    aboutLegend.className = \"about-legend\";\n    aboutLegendSection.appendChild(aboutLegend);\n\n    let aboutContent = document.createElement('div');\n    aboutContent.className = \"about-content-section\";\n\n    let welcome = [\n        `We are a local cafe based in Abc, Def, focused on bringing the exquisite and authentic taste of pure blend coffee. We get our beans locally sourced where we can from\n        the highest quality farms, and where we can't, from brands internationally recognized for delivering the best taste. Our baristas are seasoned veterans in the field\n        of the Cafe, and are dedicated to elevate your coffee game further.`,\n        `We even have a special game for true coffee enthusiasts, where managing to figure out the flavors from a coffee bean rewards discounts, or even hamper prizes.`,\n        `Our cakes, similarly, are also made with love from authentic dairy, and with baking so gentle it'll remind even the fondest of their first dessert.`,\n        `Join us for an evening. Or a morning. Your call.`,\n    ];\n\n    let timings = [\n        \"Sunday - Thursday: 9am - 6pm\",\n        \"Friday - Saturday: 11am - 4pm\"\n    ];\n\n    let location = [\n        `We are located at Abc, Def.`,\n    ];\n\n    let welcomeSection = (0,_aboutSection_js__WEBPACK_IMPORTED_MODULE_0__.createSection)(\"Welcome\", welcome);\n    aboutContent.appendChild(welcomeSection);\n\n    let timingSection = (0,_aboutSection_js__WEBPACK_IMPORTED_MODULE_0__.createSection)(\"Timing\", timings);\n    aboutContent.appendChild(timingSection);\n\n    let locationSection = (0,_aboutSection_js__WEBPACK_IMPORTED_MODULE_0__.createSection)(\"Visit Us\", location);\n    aboutContent.appendChild(locationSection);\n\n    aboutContainer.appendChild(aboutLegendSection);\n    aboutContainer.appendChild(aboutContent);\n    contentContainer.appendChild(aboutContainer);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/aboutSection.js"
/*!*****************************!*\
  !*** ./src/aboutSection.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSection: () => (/* binding */ createSection)\n/* harmony export */ });\nfunction createSection(title, contents){\n    const sectionContainer = document.createElement('div');\n\n    let wordArray = title.split(\" \");\n    let arrLength = wordArray.length;\n    let sectionTitle = '';\n    for(let i = 0; i < arrLength; i++){\n        wordArray[i] = wordArray[i].toLowerCase();\n    };\n    sectionTitle = wordArray.join('-');\n    \n    sectionContainer.className = `${sectionTitle}-section`;\n\n    const sectionHeaderContainer = document.createElement('div');\n    sectionHeaderContainer.classList.add(\"about-section-header\");\n    sectionHeaderContainer.classList.add(`${sectionTitle}-section-header`);\n    const sectionHeader = document.createElement('h3');\n    sectionHeader.textContent = title;\n    sectionHeaderContainer.appendChild(sectionHeader);\n\n    const sectionContentContainer = document.createElement('div');\n    sectionContentContainer.classList.add(\"about-section-content\");\n    sectionContentContainer.classList.add(`${sectionTitle}-section-content`);\n\n    contents.forEach(content => {\n        const p = document.createElement('p');\n        p.textContent = content;\n        p.classList.add(`${sectionTitle}-content-text`);\n        sectionContentContainer.appendChild(p);\n    });\n\n    sectionContainer.appendChild(sectionHeaderContainer);\n    sectionContainer.appendChild(sectionContentContainer);\n\n    return sectionContainer;\n};\n    \n\n//# sourceURL=webpack://restaurant-page/./src/aboutSection.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/background.jpg */ \"./src/assets/images/background.jpg\");\n //Since you can't input this long path in line 8\n\nfunction renderHome(contentContainer){\n    if(contentContainer.children.length > 0){\n        contentContainer.innerHTML = '';\n    };\n\n    let introContainer = document.createElement('div');\n    introContainer.classList.add('intro-container');\n\n    let backgroundImg = document.createElement('img');\n    backgroundImg.src = _assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    backgroundImg.alt = \"An image of the cafe.\";\n    backgroundImg.style.display = \"block\";\n    backgroundImg.classList.add('background-image');\n\n    let introText = document.createElement('div');\n    introText.classList.add('intro-text');\n\n    let introHeader = document.createElement('h1');\n    introHeader.classList.add('intro-header');\n\n    let introBody = document.createElement('p');\n    introBody.classList.add('intro-body');\n\n    introHeader.textContent = \"Taste the Blend\";\n    introBody.textContent = \"A good brew isn't just about the coffee, its about the brewer. Experience exquisite coffee, made by the best in the craft. First one's on us.\";\n\n    introText.appendChild(introHeader);\n    introText.appendChild(introBody);\n\n    introContainer.appendChild(backgroundImg);\n    introContainer.appendChild(introText);\n    \n    contentContainer.appendChild(introContainer);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", (event)=>{\n    let contentContainer = document.querySelector(\"#content\");\n    let homeBtn = document.querySelector(\"#home-button\");\n    let menuBtn = document.querySelector(\"#menu-button\");\n    let aboutBtn = document.querySelector(\"#about-button\");\n\n    homeBtn.addEventListener(\"click\", ()=>{\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)(contentContainer);\n    });\n\n    menuBtn.addEventListener(\"click\", ()=>{\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenu)(contentContainer);\n    });\n\n    aboutBtn.addEventListener(\"click\", ()=>{\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.renderAbout)(contentContainer);\n    });\n\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.renderAbout)(contentContainer);\n\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _menuCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuCategory.js */ \"./src/menuCategory.js\");\n/* harmony import */ var _assets_images_single_shot_espresso_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/single-shot-espresso.jpg */ \"./src/assets/images/single-shot-espresso.jpg\");\n/* harmony import */ var _assets_images_double_shot_espresso_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/double-shot-espresso.jpg */ \"./src/assets/images/double-shot-espresso.jpg\");\n/* harmony import */ var _assets_images_americano_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/americano.jpg */ \"./src/assets/images/americano.jpg\");\n/* harmony import */ var _assets_images_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/cappuccino.jpg */ \"./src/assets/images/cappuccino.jpg\");\n/* harmony import */ var _assets_images_latte_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/latte.jpg */ \"./src/assets/images/latte.jpg\");\n/* harmony import */ var _assets_images_caramel_latte_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/caramel-latte.jpg */ \"./src/assets/images/caramel-latte.jpg\");\n/* harmony import */ var _assets_images_mocha_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/mocha.jpg */ \"./src/assets/images/mocha.jpg\");\n/* harmony import */ var _assets_images_cheesecake_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/cheesecake.jpg */ \"./src/assets/images/cheesecake.jpg\");\n/* harmony import */ var _assets_images_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/tiramisu.jpg */ \"./src/assets/images/tiramisu.jpg\");\n/* harmony import */ var _assets_images_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/chocolate-cake.jpg */ \"./src/assets/images/chocolate-cake.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction renderMenu(contentContainer){\n    if(contentContainer.children.length > 0){\n        contentContainer.innerHTML = '';\n    };\n\n    let menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menu-container\");\n\n    let menuLegend = document.createElement(\"div\");\n    menuLegend.classList.add(\"menu-legend\");\n\n    let menuLegendText = document.createElement('h1');\n    menuLegendText.textContent = \"OUR MENU\";\n    menuLegendText.classList.add(\"menu-legend-text\");\n\n    menuLegend.appendChild(menuLegendText);\n\n    let menuItemsContainer = document.createElement(\"div\");\n    menuItemsContainer.classList.add(\"menu-items-container\");\n\n    let classicItems = [\n        {name: 'Espresso', image: _assets_images_single_shot_espresso_jpg__WEBPACK_IMPORTED_MODULE_1__, price:\"Rs. 150\"},\n        {name: 'Doppio', image: _assets_images_double_shot_espresso_jpg__WEBPACK_IMPORTED_MODULE_2__, price:\"Rs. 250\"},\n        {name: 'Americano', image: _assets_images_americano_jpg__WEBPACK_IMPORTED_MODULE_3__, price:\"Rs. 215\"},\n    ];\n\n    let milkItems = [\n        {name: 'Cappuccino', image: _assets_images_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_4__, price: 'Rs. 260'},\n        {name: 'Cafe Latte', image: _assets_images_latte_jpg__WEBPACK_IMPORTED_MODULE_5__, price: 'Rs. 265'},\n        {name: 'Caramel Latte', image: _assets_images_caramel_latte_jpg__WEBPACK_IMPORTED_MODULE_6__, price: 'Rs. 285'},\n        {name: 'Mocha', image: _assets_images_mocha_jpg__WEBPACK_IMPORTED_MODULE_7__, price: 'Rs. 295'},\n    ];\n\n    let cakeItems = [\n        {name: \"Cheesecake\", image: _assets_images_cheesecake_jpg__WEBPACK_IMPORTED_MODULE_8__, price:\"Rs 260\"},\n        {name: \"Tiramisu\", image: _assets_images_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_9__, price:\"Rs. 160\"},\n        {name: \"Chocolate Cake\", image: _assets_images_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_10__, price:\"Rs. 125\"},\n    ];\n    \n    let espressoCategory = (0,_menuCategory_js__WEBPACK_IMPORTED_MODULE_0__.createMenuCategory)(\"Classics\", classicItems);\n    let milkCategory = (0,_menuCategory_js__WEBPACK_IMPORTED_MODULE_0__.createMenuCategory)(\"Milk Items\", milkItems);\n    let cakeCategory = (0,_menuCategory_js__WEBPACK_IMPORTED_MODULE_0__.createMenuCategory)(\"Dessert\", cakeItems);\n\n    menuContainer.appendChild(menuLegend);\n    menuContainer.appendChild(menuItemsContainer);\n\n    menuItemsContainer.appendChild(espressoCategory);\n    menuItemsContainer.appendChild(milkCategory);\n    menuItemsContainer.appendChild(cakeCategory);\n\n    contentContainer.appendChild(menuContainer);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/menuCategory.js"
/*!*****************************!*\
  !*** ./src/menuCategory.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuCategory: () => (/* binding */ createMenuCategory)\n/* harmony export */ });\n/* harmony import */ var _menuItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItem.js */ \"./src/menuItem.js\");\n\n\nfunction createMenuCategory(title, items){\n    let category = document.createElement(\"div\");\n    category.classList.add(\"menu-category\");\n    \n    let wordArray = title.split(\" \");\n    let arrLength = wordArray.length;\n    let classTitle = '';\n    for(let i = 0; i < arrLength; i++){\n        wordArray[i] = wordArray[i].toLowerCase();\n    };\n    classTitle = wordArray.join('-');\n    console.log(classTitle);\n    \n    category.classList.add(`${classTitle}-category`);\n\n    let heading = document.createElement(\"h3\");\n    heading.classList.add(\"menu-category-header\");\n    heading.textContent = title;\n    category.appendChild(heading);\n\n    let categoryItems = document.createElement(\"div\");\n    categoryItems.classList.add(\"menu-category-items\");\n    category.appendChild(categoryItems);\n\n    items.forEach(item=>{\n        categoryItems.appendChild((0,_menuItem_js__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)(item));\n    });\n\n    category.appendChild(categoryItems);\n    \n    return category;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuCategory.js?\n}");

/***/ },

/***/ "./src/menuItem.js"
/*!*************************!*\
  !*** ./src/menuItem.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuItem: () => (/* binding */ createMenuItem)\n/* harmony export */ });\nfunction createMenuItem({name, image, price}){\n    let item = document.createElement('div');\n    item.classList.add(\"menu-item-card\");\n\n    let textSection = document.createElement(\"div\");\n    textSection.classList.add(\"menu-item-text-section\");\n\n    let img = document.createElement('img');\n    img.classList.add(\"menu-item-image\");\n    img.src = image;\n    img.alt = name;\n\n    let heading = document.createElement('h1');\n    heading.classList.add(\"menu-item-heading\");\n    heading.textContent = name;\n\n    let priceTag = document.createElement(\"p\");\n    priceTag.classList.add(\"menu-item-price\");\n    priceTag.textContent = price;\n\n    textSection.appendChild(heading);\n    textSection.appendChild(priceTag);\n\n    item.appendChild(img);\n    item.appendChild(textSection);\n\n    return item;\n};\n\n//# sourceURL=webpack://restaurant-page/./src/menuItem.js?\n}");

/***/ },

/***/ "./src/assets/images/americano.jpg"
/*!*****************************************!*\
  !*** ./src/assets/images/americano.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2521896ad1973ee3520d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/americano.jpg?\n}");

/***/ },

/***/ "./src/assets/images/background.jpg"
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7b886e3a15d280d39b1c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/background.jpg?\n}");

/***/ },

/***/ "./src/assets/images/cappuccino.jpg"
/*!******************************************!*\
  !*** ./src/assets/images/cappuccino.jpg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ab4a3f038ddbb959be5e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/cappuccino.jpg?\n}");

/***/ },

/***/ "./src/assets/images/caramel-latte.jpg"
/*!*********************************************!*\
  !*** ./src/assets/images/caramel-latte.jpg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"57583e2e420fa06af7b0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/caramel-latte.jpg?\n}");

/***/ },

/***/ "./src/assets/images/cheesecake.jpg"
/*!******************************************!*\
  !*** ./src/assets/images/cheesecake.jpg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f49c9cb45ae3ca85ac59.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/cheesecake.jpg?\n}");

/***/ },

/***/ "./src/assets/images/chocolate-cake.jpg"
/*!**********************************************!*\
  !*** ./src/assets/images/chocolate-cake.jpg ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"03b8b8795ec874f231ac.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/chocolate-cake.jpg?\n}");

/***/ },

/***/ "./src/assets/images/double-shot-espresso.jpg"
/*!****************************************************!*\
  !*** ./src/assets/images/double-shot-espresso.jpg ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8e5558172a68bdc76b57.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/double-shot-espresso.jpg?\n}");

/***/ },

/***/ "./src/assets/images/latte.jpg"
/*!*************************************!*\
  !*** ./src/assets/images/latte.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"edc0aaf2fa4f95c7e2c4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/latte.jpg?\n}");

/***/ },

/***/ "./src/assets/images/mocha.jpg"
/*!*************************************!*\
  !*** ./src/assets/images/mocha.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0f4e39185d36db00dfa9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/mocha.jpg?\n}");

/***/ },

/***/ "./src/assets/images/single-shot-espresso.jpg"
/*!****************************************************!*\
  !*** ./src/assets/images/single-shot-espresso.jpg ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0c7331ee51da758611c2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/single-shot-espresso.jpg?\n}");

/***/ },

/***/ "./src/assets/images/tiramisu.jpg"
/*!****************************************!*\
  !*** ./src/assets/images/tiramisu.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b00703d2ed5c9b469951.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/tiramisu.jpg?\n}");

/***/ },

/***/ "./src/fonts/Roboto-VariableFont_wdth,wght.ttf"
/*!*****************************************************!*\
  !*** ./src/fonts/Roboto-VariableFont_wdth,wght.ttf ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3c9d0f6513f7cfe91016.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Roboto-VariableFont_wdth,wght.ttf?\n}");

/***/ },

/***/ "./src/fonts/SNPro-VariableFont_wght.ttf"
/*!***********************************************!*\
  !*** ./src/fonts/SNPro-VariableFont_wght.ttf ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7ca6fa8e2bb763d48a14.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/SNPro-VariableFont_wght.ttf?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;