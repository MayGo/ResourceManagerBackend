
Ext.define('ResourceManager.model.Worker', {
	extend : 'ResourceManager.model.Base',
	fields : [
	{
		name : 'idCode',
		type: 'string'
	},

	{
		name : 'name',
		type: 'string'
	},

	{
		name : 'division',
		type: ''
	},

		{
			name : 'uniqueName',
			type : 'string',
			convert : function(newValue, model) {
				var name = "";
				name += model.get('name')+'';
				return name
			},
			depends: ['name']
		}
],
validators:{
	idCode:[
	     {type:'presence'},
	],

	name:[
	     {type:'presence'},
	],

	division:[
	     {type:'presence'},
	],
}
});


