/* global describe, it */
var app = require('../app')
var request = require('supertest')

describe('GET /favicon.ico', function () {
  it('should serve icon', function (done) {
    request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200, done)
  })
})
