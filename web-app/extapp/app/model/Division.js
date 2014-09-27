
Ext.define('ResourceManager.model.Division', {
	extend : 'ResourceManager.model.Base',
	fields : [
	{
		name : 'idTrail',
		type: 'string'
	},

	{
		name : 'name',
		type: 'string'
	},

	{
		name : 'nameTrail',
		type: 'string'
	},

	{
		name : 'headDivision',
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
]
});
