
Ext.define('ResourceManager.view.asset.ListView', {
	extend: 'Ext.panel.Panel',
	xtype : 'asset-listview',
	title : 'Asset',
	requires : [
	            'ResourceManager.view.asset.RestList',
	            'ResourceManager.view.asset.ListSearch',
	            'ResourceManager.view.asset.ListController'
	            ],
	controller : 'asset-listcontroller',
	viewModel: {
        type: 'asset-listviewmodel'
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
            {xtype:'asset-listsearch', region:'north'},
            {xtype:'asset-restlist', region:'center', collapsible: false}
	
	]
	
});
