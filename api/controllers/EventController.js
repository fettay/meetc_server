/**
 * EventController
 *
 * @description :: Server-side logic for managing Events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res) {
		var obj = {'user_id': req.param('user_id'),
					'title': req.param('title'),
					'at_time': req.param('at_time'),
					'lat': req.param('lat'),
					'lng': req.param('lng'),
					'picture_url': req.param('picture_url')
				}
		Event.create(obj, function(err, event_){
			if(err){
				console.log(err);
				return res.status(400).end()
			}
			else{
				Event_status.create({'user_id': req.param('user_id'), 'event_id': event_.id, 'status': 1},function(err){

					if(err)
						return res.status(400).end()

					array_part = [];

					if(req.param('participants').length == 0)
						return res.status(200).json(event_);

					_.each(req.param('participants'), function(parti, index){
						console.log(index);
						var obj = {};
						obj.user_id = parti;
						obj.status = 0;
						obj.event_id = event_.id;
						array_part.push(obj);
						if(index == req.param('participants').length - 1) {
							Event_status.create(array_part, function(err, data){
								if(err)
									return res.status(400).end();
								else
									return res.status(200).json(event_);
							});

						}
					});
				});
			}
		});
	},

	update: function(req, res) {
		if(!req.param('event_id') || !req.param('user_id')){
			return res.status(400).end();
		}
		Event_status.update({event_id: req.param('event_id'), user_id: req.param('user_id')},{status: req.param('new_status')}, function (err, event_){
			if(err){
				return res.status(400).end();
			}
			else if(event_.length == 0)
				return res.status(200).end();
			else
				return res.status(200).json(event_[0])
		});
	},

	get_gens: function(req, res) {
		Event_status.find({'event_id':parseInt(req.param('id')), 'status': 1}, function(err, event_st){
			if(err)
				return res.status(400).end();
			else{
				users_ids = _.pluck(event_st, 'user_id');
				User.find(users_ids, function(err, users) {
				if(err)
					return res.status(400).end();
				else
					return res.status(200).json(users);
				});
			}
		});
	}
	
};

