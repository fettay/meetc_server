/**
* Event.js
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
  	user_id: {
  		type: 'int'
  	},
  	title: {
  		type: 'string'
  	},
  	at_time: {
  		type: 'datetime'
  	},
  	lat: {
  		type: 'float'
  	},
  	lng: {
  		type: 'float'
 	},
 	picture_url: {
 		type: 'string'
 	}
  }
};

