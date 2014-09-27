
Ext.define('ResourceManager.view.division.ListView', {
	extend: 'Ext.panel.Panel',
	xtype : 'division-listview',
	title : 'Division',
	requires : [
	            'ResourceManager.view.division.RestList',
	            'ResourceManager.view.division.ListSearch',
	            'ResourceManager.view.division.ListController'
	            ],
	controller : 'division-listcontroller',
	viewModel: {
        type: 'division-listviewmodel'
    },
    layout: {
        type: 'border',
        align: 'stretch'
    },
	defaults: {
	        collapsible: true,
	        split: true
	      
	},
    items: [
            {xtype:'division-listsearch', region:'north'},
            {xtype:'division-restlist', region:'center', collapsible: false}
	
	]
	
});
