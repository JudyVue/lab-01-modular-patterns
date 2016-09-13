'use strict';

const greeting = require ('../lib/greet');
const assert = require ('assert');

describe('testing module greet', function(){
  describe('testing #sayMyMotherEffingName', function(){
    it('should be a string of hello (name)', function(){
      assert.equal('Hello Judy');
    });
  });
});
