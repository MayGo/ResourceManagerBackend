

Ext.define('ResourceManager.view.asset.List', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'asset-gridlist',
	title : 'Asset',
	requires : ['ResourceManager.view.asset.ListController'],
	controller : 'asset-listcontroller',
	loadOnInit : true,
	
	initComponent: function() {
    	this.store = Ext.create('ResourceManager.store.AssetList');
    	this.columns = this.defaultColumns.concat(this.columns);
        this.callParent();
        if(this.loadOnInit) this.store.load();
    },
    
	columns : [
	
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
