import dotenv from 'dotenv';
dotenv.config();
import dayjs from 'dayjs';

export const LevelEnum = Object.freeze({"DEBUG":"DEBUG", "INFO":"INFO", "ERROR":"ERROR"})

/**
 * 
 * @param {LevelEnum} level 
 * @param {string} message 
 */
export const log = function () {
    const level = arguments[0];
    const message = Array.prototype.slice.call(arguments, 1);
    // eslint-disable-next-line no-undef
    console.log(`[${dayjs().format(process.env.DATE_FORMAT_CONSOLE)}][${level}]`, message);
}
/**
 * 
 * @param {LevelEnum} level 
 * @param {string} url 
 * @param {string} method 
 */
export const logRequest = function(level, url, method) {
    const message = {
        url: url,
        method: method,
    };
    log(level, `[REQUEST]`, message)
}

export const logResponse = function(level, url, method, statusCode, data) {
    const message = {
        url: url,
        method: method,
        status: statusCode,
        data: data
    }
    log(level, `[RESPONSE]`, message)
}

export const logDB = function(level, query, values) {
    const message = {
        query: query,
        values: values,
    };
    log(level, message);
}