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
