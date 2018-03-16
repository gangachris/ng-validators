"use strict";
exports.__esModule = true;
var validator = require("validator");
/**
 * Wrapper for calling validator js functions
 *
 * @param {any} name name of the validator to be called e.g isEmail
 * @param {any} value value passed from the abstract control
 * @param {any} options optional parameters
 * @returns
 */
var getValidator = function (name, value, options) {
    if (options) {
        return validator[name](value, options) ? null : (_a = {},
            _a[name] = {
                valid: false
            },
            _a);
    }
    return validator[name](value) ? null : (_b = {},
        _b[name] = {
            valid: false
        },
        _b);
    var _a, _b;
};
/**
 * Gets the validators with parameter.
 * Parameters are optional since some validators do not require them
 *
 * @export
 * @param {string} name name of the validator
 * @returns angular form validator
 */
/**
 *
 *
 * @export
 * @param {string} name
 * @returns
 */
function getParamValidator(name) {
    return function (options) {
        return function (c) {
            return getValidator(name, c.value != null ? c.value : '', options);
        };
    };
}
exports.getParamValidator = getParamValidator;
