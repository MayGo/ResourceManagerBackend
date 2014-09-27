

Ext.define('ResourceManager.view.worker.RestList', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'worker-restlist',
	requires : ['ResourceManager.view.worker.ListController'],
	controller : 'worker-listcontroller',

	bind:{
		store: '{listStore}'
	},

	initComponent: function() {
    	this.columns = this.defaultColumns.concat(this.columns);
        this.callParent();
    },
    
	columns : [
	
		{
			text : 'Id Code',
			sortable : true,
			dataIndex : 'idCode',
			groupable : true,
			flex: 1,
			
		editor : {
			xtype : 'textfield'
		}
		

			
		},

		{
			text : 'Name',
			sortable : true,
			dataIndex : 'name',
			groupable : true,
			flex: 1,
			
		editor : {
			xtype : 'textfield'
		}
		

			
		},

		{
			text : 'Division',
			sortable : true,
			dataIndex : 'division',
			groupable : true,
			flex: 1,
			
			  renderer: function (value, metaData) {
					return (value)?'Object id: ' +value.id:'';
			  },
			  editor : {
				  xtype : 'combo',
				  valueField: 'id',
				  displayField: 'uniqueName',
				  store: {type:'division-liststore'},
			  }
			

			
		},

	]
});
