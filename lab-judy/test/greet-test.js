'use strict';

const greeting = require ('../lib/greet');
const assert = require ('assert');

describe('testing module greet', function(){
  describe('testing #sayMyMotherEffingName', function(){
    it('should return Hello Judy', function(){
      let result = greeting.sayMyMotherEffingName('Judy');
      assert.equal(result, 'Hello Judy', 'was not Hello Judy');
    });
  });
});

describe('testing to see if the argument is a string', function(){
  it('should return a string and not a number', function(){
    let result = greeting.sayMyMotherEffingName('Judy');
    if (typeof argument === 'string')
      assert.fail(result, 'Hello Judy', 'a string wasnt entered as arg', '=');
  });
});
