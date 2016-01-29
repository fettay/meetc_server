/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	create: function(req, res) {
		val = req.params.all();
		delete val.id;
		User.create(val, function(err, user){
			if(err){
				console.log(err);
				return res.status(400).end();
			}
			else
				return res.status(200).json(user);
		});
	},

	getAll: function(req, res) {
		User.find(function(err, users){
			if(err)
				return res.status(400).end()
			else
				return res.status(200).json(users)			
		});
	},

	get: function(req, res) {
		User.find(req.param('user_id'), function(err, user){
			if(err)
				return res.status(400).end();
			if(!user)
				return res.status(200).json({error: 'User not found'});
			else
				return res.status(200).json(user);	
		});
	},

	get_event: function(req, res) {
		Event.find({'user_id':req.param('user_id')}, function(err, events){
			if(err)
				return res.status(400).end();
			else
				return res.status(200).json(events);
		});
	}
};
