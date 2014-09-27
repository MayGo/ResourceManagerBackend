

Ext.define('ResourceManager.view.division.RestList', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'division-restlist',
	requires : ['ResourceManager.view.division.ListController'],
	controller : 'division-listcontroller',

	bind:{
		store: '{listStore}'
	},

	initComponent: function() {
    	this.columns = this.defaultColumns.concat(this.columns);
        this.callParent();
    },
    
	columns : [
	
		{
			text : 'Id Trail',
			sortable : true,
			dataIndex : 'idTrail',
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
			text : 'Name Trail',
			sortable : true,
			dataIndex : 'nameTrail',
			groupable : true,
			flex: 1,
			
		editor : {
			xtype : 'textfield'
		}
		

			
		},

		{
			text : 'Head Division',
			sortable : true,
			dataIndex : 'headDivision',
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
