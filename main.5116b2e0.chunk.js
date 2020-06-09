(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 128:
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(83);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(84);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(85);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(63);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(114);

// CONCATENATED MODULE: ./src/js/helper-functions.js




var helper = {
  numberWithCommas: function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  map: function map(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  },
  months: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
};
/* harmony default export */ var helper_functions = (helper);
// EXTERNAL MODULE: ./src/js/Components/Topline/topline.css
var topline = __webpack_require__(115);

// CONCATENATED MODULE: ./src/js/Components/Topline/topline.js







 // vars

var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data, el) {
    var template;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // build the template
            template = toplineTemplate(data[0]); // append to element.

            document.getElementById(el).innerHTML = template;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function toplineTemplate(d) {
  // const date = new Date(d.js_date);
  var date = d.date.split('-');
  var last_update = "".concat(helper_functions.months[parseInt(date[1]) - 1], " ").concat(parseInt(date[0]), ", ").concat(date[2]);
  return "\n\t\t<div id=\"container\">\n\t\t\t<h1>COVID-19 in Canada</h1>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"section active\">\n\t\t\t\t\t<p class=\"metric\">Active cases</p>\n\t\t\t\t\t<p class=\"big-num\">".concat(helper_functions.numberWithCommas(d.active_cases + parseInt(d.numprob)), "</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"section deaths\">\n\t\t\t\t\t<p class=\"metric\">Deaths</p>\n\t\t\t\t\t<p class=\"big-num\">").concat(helper_functions.numberWithCommas(d.numdeaths), "</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"section recovered\">\n\t\t\t\t\t<p class=\"metric\">Recovered</p>\n\t\t\t\t\t<p class=\"big-num\">").concat(helper_functions.numberWithCommas(d.numrecover), "</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"last-update\">Last updated: ").concat(last_update, "</p>\n\t\t</div>\n\t");
}

/* harmony default export */ var Topline_topline = (init);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(64);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/data/prov-codes.json
var prov_codes = __webpack_require__(128);

// EXTERNAL MODULE: ./src/js/Components/ProvincesTable/provinces-table.css
var provinces_table = __webpack_require__(129);

// CONCATENATED MODULE: ./src/js/Components/ProvincesTable/provinces-table.js












 // VARS

var tableRows = '';
var responsiveBreakpoint = 500;
var values = {
  active: [],
  deaths: [],
  per_mil: [],
  recovered: []
};

var provinces_table_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data, el) {
    var tableString, _i, _Object$entries, _Object$entries$_i, key, value;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // add thead
            tableString = prepTable(); // we'll need these later for getting the m

            data.forEach(function (d) {
              return cacheValues(d);
            }); // descending sort each value array

            for (_i = 0, _Object$entries = Object.entries(values); _i < _Object$entries.length; _i++) {
              _Object$entries$_i = slicedToArray_default()(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
              value.sort(function (a, b) {
                return b - a;
              });
            } // build the table rows


            data.forEach(function (d) {
              tableRows += rowTemplate(d);
            }); // add rows to the table

            tableString += tableRows; // close out the html tags

            tableString += closeTable(); // add table to document

            document.getElementById(el).innerHTML = tableString;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function closeTable() {
  return "\n\t\t</tbody></table>\n\t";
}

function cacheValues(d) {
  values.active.push(d.active_cases);
  values.deaths.push(parseInt(d.numdeaths));
  values.per_mil.push(parseFloat(d.active_cases_per_million));
  values.recovered.push(parseFloat(d.numrecover));
}

function getMaxValue(d) {
  return d.sort(function (a, b) {
    return a - b;
  });
}

function prepTable() {
  return "\n\n\t\t<table id=\"table-container\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"province\">Province</th>\n\t\t\t\t\t<th class=\"cases-million\">Active cases per million</th>\n\t\t\t\t\t<th class=\"active\">Active Cases</th>\n\t\t\t\t\t<th class=\"deaths\">Deaths</th>\n\t\t\t\t\t<th class=\"recovered\">Recovered</th>\n\t\t\t\t</tr>\n\t\t\t</t head>\n\t\t\t<tbody>\n\t";
}

function rowTemplate(d) {
  // short or full province name based on window width
  var name = window.innerWidth < responsiveBreakpoint ? d.short_name : d.prname; // sets td background colour

  var activePerMilRange = "".concat(Math.round(helper_functions.map(parseInt(d.active_cases_per_million), 0, parseInt(values['per_mil'][0]), 4, 0) + 1));
  var activeRange = "".concat(Math.round(helper_functions.map(parseInt(d.active_cases), 0, values['active'][0], 4, 0) + 1));
  var deathsRange = "".concat(Math.round(helper_functions.map(parseInt(d.numdeaths), 0, values['deaths'][0], 3, 0) + 1));
  var recoveredRange = "".concat(Math.round(helper_functions.map(parseInt(d.numrecover), 0, values['recovered'][0], 4, 0) + 1));
  return "\n\t\t<tr>\n\t\t\t<td class=\"province\">".concat(name, "</td>\n\t\t\t<td class=\"cases-million weight-").concat(activePerMilRange, "\">").concat(helper_functions.numberWithCommas(d.active_cases_per_million), "</td>\n\t\t\t<td class=\"active weight-").concat(activeRange, "\">").concat(helper_functions.numberWithCommas(d.active_cases + parseInt(d.numprob)), "</td>\n\t\t\t<td class=\"deaths weight-").concat(deathsRange, "\">").concat(helper_functions.numberWithCommas(d.numdeaths), "</td>\n\t\t\t<td class=\"recovered weight-").concat(recoveredRange, "\">").concat(helper_functions.numberWithCommas(d.numrecover), "</td>\n\t\t</tr>\n\t");
}

/* harmony default export */ var ProvincesTable_provinces_table = (provinces_table_init); // <h3>Active COVID-19 cases, deaths and recoveries by province</h3>
// CONCATENATED MODULE: ./src/index.js





// CSS



 // JS



 // import config from './data/config.json';
// VARS

var tableEl = 'table'; // this needs to be an element ID

var toplineEl = 'topline'; // this needs to be an element ID

var dataUrl = 'https://storage.googleapis.com/vs-postmedia-data/covid-healthcanada-data.json';

var src_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var resp, tableData, sortedData;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios_default.a.get(dataUrl);

          case 2:
            resp = _context.sent;
            // exclude national & repatriated for the table
            tableData = resp.data.filter(function (d) {
              return d.pruid !== '1' && d.pruid !== '99' && d.pruid !== '12';
            });
            sortedData = tableData.sort(function (a, b) {
              return parseInt(b.active_cases_per_million) - parseInt(a.active_cases_per_million);
            }); // canada-wide numbers

            Topline_topline(resp.data.filter(function (d) {
              return d.prname === 'Canada';
            }), toplineEl); // table for provinces

            ProvincesTable_provinces_table(sortedData, tableEl);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}(); // let's get started!


src_init();

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[130,1,2]]]);