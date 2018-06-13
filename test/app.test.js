/* global describe, it */
var app = require('../app')
var request = require('supertest')

describe('GET /', function () {
  it('should response 200', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, World!', done)
  })
})
