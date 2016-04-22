import $ from 'jquery';
import _ from 'lodash'
import q from 'q';

/**
 * Make xhr request via jQuery ajax
 *
 * Make request and return result wrapped in a
 * Q promise object
 *
 * @param config
 * @return {q}
 */
const xhr = (config) =>  {
    return q($.ajax(config));
};

/**
 * Get Http method
 *
 * Execute get http method via jquery ajax
 *
 * @param url
 * @param data
 * @param dataType
 * @return {q}
 */
export const get = (url, data, dataType) => {
    return xhr({ method: 'get', url, data, dataType });
};

/**
 * Post method
 *
 * Execute post request via jquery ajax
 *
 * @param url
 * @param data
 * @param dataType
 * @param config
 * @returns {q}
 */
export const post = (url, data, dataType, config) => {
    return xhr(_.assign({ method: 'post', url, data, dataType }, config));
};

/**
 * Put method
 *
 * Execute http put request via jquery ajax
 *
 * @param url
 * @param resource
 * @param data
 * @param dataType
 * @returns {q}
 */
export const put = (url, resource, data, dataType) => {
    return xhr({ method: 'put', url: url + resource, data, dataType });

};

/**
 * Patch method
 *
 * Execute patch method via jquery ajax
 *
 * @param url
 * @param resource
 * @param data
 * @param dataType
 * @returns {q}
 */
export const patch = (url, resource, data, dataType) => {
    return xhr({ method: 'patch', url: url + resource, data, dataType });
};

/**
 * Delete method
 *
 * Execute delete method via jquery ajax
 * alias method to remove because delete is a reserved word
 *
 * @param url
 * @param resource
 * @returns {q}
 */
export const remove = (url, resource) => {
    return xhr({ method: 'delete', url: url + resource});
};
