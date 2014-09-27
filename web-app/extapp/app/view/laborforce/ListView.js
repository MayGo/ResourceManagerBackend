
Ext.define('ResourceManager.view.laborforce.ListView', {
	extend: 'Ext.panel.Panel',
	xtype : 'laborforce-listview',
	title : 'Laborforce',
	requires : [
	            'ResourceManager.view.laborforce.RestList',
	            'ResourceManager.view.laborforce.ListSearch',
	            'ResourceManager.view.laborforce.ListController'
	            ],
	controller : 'laborforce-listcontroller',
	viewModel: {
        type: 'laborforce-listviewmodel'
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
            {xtype:'laborforce-listsearch', region:'north'},
            {xtype:'laborforce-restlist', region:'center', collapsible: false}
	
	]
	
});
