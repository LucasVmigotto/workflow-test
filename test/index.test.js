/* eslint-disable no-undef */
const { app, expect, request } = require('./config')

describe('workflow-test', () => {
  describe('request', () => {
    it('should perform a simple request', async () => {
      const res = await request(app)
        .get('/')
      expect(res).to.be.not.equal(null)
      expect(res).to.haveOwnProperty('body')
      expect(typeof res.body).to.be.equal('object')
      expect(res.body).to.haveOwnProperty('message')
      expect(typeof res.body.message).to.be.equal('string')
    })
  })
})
