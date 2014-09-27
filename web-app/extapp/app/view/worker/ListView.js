
Ext.define('ResourceManager.view.worker.ListView', {
	extend: 'Ext.panel.Panel',
	xtype : 'worker-listview',
	title : 'Worker',
	requires : [
	            'ResourceManager.view.worker.RestList',
	            'ResourceManager.view.worker.ListSearch',
	            'ResourceManager.view.worker.ListController'
	            ],
	controller : 'worker-listcontroller',
	viewModel: {
        type: 'worker-listviewmodel'
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
            {xtype:'worker-listsearch', region:'north'},
            {xtype:'worker-restlist', region:'center', collapsible: false}
	
	]
	
});
