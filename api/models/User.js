/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	id: {
  		type: 'int',
  		primaryKey: true,
  		autoIncrement: true
  	},
  	facebook_id: {
  		type: 'int',
  		required: true
  	},
  	name: {
  		type: 'string'
  	},
  	gender: {
  		type: 'int'
  	},
  	email: {
  		type: 'string'
  	},
  	picture_url: {
  		type: 'string'
  	}
  }
};

