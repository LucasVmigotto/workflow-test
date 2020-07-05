const chai = require('chai')
const chaiHttp = require('chai-http')
const { app } = require('../src/app')

chai.use(chaiHttp)

const { expect, request } = chai

module.exports = {
  app,
  expect,
  request
}
