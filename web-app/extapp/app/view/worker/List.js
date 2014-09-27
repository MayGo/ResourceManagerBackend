

Ext.define('ResourceManager.view.worker.List', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'worker-gridlist',
	title : 'Worker',
	requires : ['ResourceManager.view.worker.ListController'],
	controller : 'worker-listcontroller',
	loadOnInit : true,
	
	initComponent: function() {
    	this.store = Ext.create('ResourceManager.store.WorkerList');
    	this.columns = this.defaultColumns.concat(this.columns);
        this.callParent();
        if(this.loadOnInit) this.store.load();
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
