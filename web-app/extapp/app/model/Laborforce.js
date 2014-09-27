
Ext.define('ResourceManager.model.Laborforce', {
	extend : 'ResourceManager.model.Base',
	fields : [
	{
		name : 'validFrom',
		type: 'date',dateWriteFormat: 'Y-m-d H:i:s.uO'
	},

	{
		name : 'validTo',
		type: 'date',dateWriteFormat: 'Y-m-d H:i:s.uO'
	},

	{
		name : 'asset',
		type: ''
	},

	{
		name : 'division',
		type: ''
	},

	{
		name : 'worker',
		type: ''
	},

],
validators:{
	validFrom:[
	     {type:'presence'},
	],

	validTo:[
	     {type:'presence'},
	],

	asset:[
	     {type:'presence'},
	],

	division:[
	     {type:'presence'},
	],

	worker:[
	     {type:'presence'},
	],
}
});


