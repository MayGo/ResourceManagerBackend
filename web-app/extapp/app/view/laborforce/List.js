

Ext.define('ResourceManager.view.laborforce.List', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'laborforce-gridlist',
	title : 'Laborforce',
	requires : ['ResourceManager.view.laborforce.ListController'],
	controller : 'laborforce-listcontroller',
	loadOnInit : true,
	
	initComponent: function() {
    	this.store = Ext.create('ResourceManager.store.LaborforceList');
    	this.columns = this.defaultColumns.concat(this.columns);
        this.callParent();
        if(this.loadOnInit) this.store.load();
    },
    
	columns : [
	
		{
			text : 'Valid From',
			sortable : true,
			dataIndex : 'validFrom',
			groupable : true,
			flex: 1,
			
		 	xtype: 'datecolumn',   
		 	format:'Y-m-d',
			editor : {
				xtype : 'datefield',
		 		format: 'Y-m-d',
			}
			

			
		},

		{
			text : 'Valid To',
			sortable : true,
			dataIndex : 'validTo',
			groupable : true,
			flex: 1,
			
		 	xtype: 'datecolumn',   
		 	format:'Y-m-d',
			editor : {
				xtype : 'datefield',
		 		format: 'Y-m-d',
			}
			

			
		},

		{
			text : 'Asset',
			sortable : true,
			dataIndex : 'asset',
			groupable : true,
			flex: 1,
			
			  renderer: function (value, metaData) {
					return (value)?'Object id: ' +value.id:'';
			  },
			  editor : {
				  xtype : 'combo',
				  valueField: 'id',
				  displayField: 'uniqueName',
				  store: {type:'asset-liststore'},
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

		{
			text : 'Worker',
			sortable : true,
			dataIndex : 'worker',
			groupable : true,
			flex: 1,
			
			  renderer: function (value, metaData) {
					return (value)?'Object id: ' +value.id:'';
			  },
			  editor : {
				  xtype : 'combo',
				  valueField: 'id',
				  displayField: 'uniqueName',
				  store: {type:'worker-liststore'},
			  }
			

			
		},

	]
});
