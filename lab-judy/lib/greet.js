'use strict';

module.exports = exports = {};

exports.sayMyMotherEffingName = function(name){
  //checks if argument is passed into function, throws error if not
  if (!name)
    throw new Error('you forgot to pass an arg, dummy.');
  return `Hello ${name}`;
};
