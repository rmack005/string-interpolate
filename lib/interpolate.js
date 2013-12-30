"use strict";

/*
Copyright (c) 2013 Ryan Mack

License (MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var method = function (obj, name, func) {
	if (!obj.prototype[name]) {
		obj.prototype[name] = func;
	}
};

/*
	Simple string interpolation via double mustache brackets {{}}.
	The brackets can contain the name of a property on an object if an object is passed,
	or an index of an array if an array is passed.
	
	Example: "this is a {{test}}.".interpolate({"test": "successful test});
	Example: "this is a {{0}} {{1}}.".interpolate(["successful", "test"]);
*/
method(String, "interpolate", function (arg) {
	return this.replace(/\{\{([^}{]+)\}\}/g, function (matchedText, name) {
		var index = Number(name);

		if (isNaN(index)) {
			return ((typeof arg[name] === 'undefined') || (arg[name] === null)) ? matchedText : arg[name];
		} else {
			return (index < arg.length) ? arg[index] : matchedText;
		}
	});
});
