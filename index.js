var dotenv = require('dotenv');
dotenv.config();
var dayjs =  require('dayjs');

exports.LevelEnum = Object.freeze({"DEBUG":"DEBUG", "INFO":"INFO", "ERROR":"ERROR"})

/**
 * 
 * @param {LevelEnum} level 
 * @param {string} message 
 */
const log = function () {
    const level = arguments[0];
    const message = Array.prototype.slice.call(arguments, 1);
    // eslint-disable-next-line no-undef
    console.log(`[${dayjs().format(process.env.DATE_FORMAT_CONSOLE)}][${level}]`, message);
}
exports.log = log
/**
 * 
 * @param {LevelEnum} level 
 * @param {string} url 
 * @param {string} method 
 */
exports.logRequest = function(level, url, method) {
    const message = {
        url: url,
        method: method,
    };
    log(level, `[REQUEST]`, message)
}

exports.logResponse = function(level, url, method, statusCode, data) {
    const message = {
        url: url,
        method: method,
        status: statusCode,
        data: data
    }
    log(level, `[RESPONSE]`, message)
}

exports.logDB = function(level, query, values) {
    const message = {
        query: query,
        values: values,
    };
    log(level, message);
}