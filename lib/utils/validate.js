'use strict'

const debug = require('./debug')
const joi = require('joi')

/**
 * @private
 *
 * @param {Object} params
 * @param {Object} schema
 */
module.exports = function (params, schema) {
  return new Promise((resolve, reject) => {
    joi.validate(params, schema, {
      abortEarly: false,
      allowUnknown: true // Permitir campos desconocidos
    }, (err, value) => {
      if (err) {
        debug.error(err.details, 'ValidationError')
        return reject(err)
      }
      resolve(value)
    })
  })
}