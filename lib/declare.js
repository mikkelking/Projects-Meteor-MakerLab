PjInfo = new Mongo.Collection('PjInfo');

Meteor.methods({
	'declare' : function (information) {
		var pj_Info = {
			pj_name : information.pj_name,
			team_name : information.team_name,
			tec_field : information.tec_field,
			about : information.about,
			description : information.descrip,
			createdAt:new Date()
		};
		PjInfo.insert(pj_Info);
	}
})