const config = require('../config')
require('dotenv').config()
const redis = require('thunk-redis')
const { Before, AfterAll } = require('cucumber')
const Bluebird = require('bluebird')
const DelivererApiCleanRequest = require('./requests/deliverer-api/clean')
const apiRequester = require('support/api_requester')
const Knex = require('knex')
const KnexFile = require('./knexfile')
const knex = Knex(KnexFile)
const redisClient = redis.createClient(config.redis_host, {
  usePromise: Bluebird,
  returnBuffers: false,
  maxAttempts: Infinity,
  retryMaxDelay: 15 * 1000,
  noDelay: true,
})

Before(async function(testCase) {
  await knex('deliverers').del()
  return await redisClient.flushall()
})

AfterAll(async function() {
  await knex('deliverers').del()
  await knex.destroy()
  return await redisClient.quit()
})
