'use strict';

module.exports = exports = {};

exports.sayMyMotherEffingName = function(name){
  //checks if argument is passed into function, throws error if not
  if (arguments.length === 0)
    throw new Error('you forgot to pass an arg, dummy.');
  return 'Hello ' + name;
};
