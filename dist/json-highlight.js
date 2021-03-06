/*!
* json-highlight v0.1.2
* Copyright (c) 2019 Bowen Zhao
* Released under the MIT License.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.jsonHighlight = factory());
}(this, function () { 'use strict';

	function index (json) {
	    if (!json)
	        return '';
	    if (typeof json !== 'string') {
	        json = JSON.stringify(json, null, 2);
	    }
	    return json.replace(/("(\\u[a-zA-Z0-9]{4,5}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
	        if (/^(".+):$/.test(match)) {
	            return "<span class=\"json-key\">" + RegExp.$1 + "</span>:";
	        }
	        var type = 'number';
	        if (/true|false/.test(match)) {
	            type = 'boolean';
	        }
	        if (/null/.test(match)) {
	            type = 'null';
	        }
	        if (/^".+"$/.test(match)) {
	            type = 'string';
	        }
	        return "<span class=\"json-" + type + "\">" + match + "</span>";
	    });
	}

	return index;

}));
