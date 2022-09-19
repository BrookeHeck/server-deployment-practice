'use strict';

const supertest = require('supertest');
const app = require('../server.js');
const request = supertest(app);

describe('Testing that the greeting says hello and to the person in the query', () => {
  test('Should return hello Brooke', async () => {
    let response = await request.get('/hello?name=Brooke');
    expect(response.status).toEqual(200);
    expect(response.body.greeting).toEqual('Hello Brooke');
  });
});


describe('Testing that the HTTP server adds two numbers', () => {
  test('Should return the number 11', async () => {
    const response = await request.get('/add/5/6');
    expect(response.status).toEqual(200);
    expect(response.body.sum).toEqual(11);
  });
});