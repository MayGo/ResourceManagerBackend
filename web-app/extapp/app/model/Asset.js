
Ext.define('ResourceManager.model.Asset', {
	extend : 'ResourceManager.model.Base',
	fields : [
	{
		name : 'name',
		type: 'string'
	},

	{
		name : 'validFrom',
		type: 'date',dateWriteFormat: 'Y-m-d H:i:s.uO'
	},

	{
		name : 'validTo',
		type: 'date',dateWriteFormat: 'Y-m-d H:i:s.uO'
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
]
});
