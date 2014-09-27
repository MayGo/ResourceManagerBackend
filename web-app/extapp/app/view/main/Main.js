Ext.define('ResourceManager.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins : 'viewport',
    requires:[
		'Ext.layout.container.Border',
		'ResourceManager.view.main.MainController',
		'ResourceManager.view.main.MainModel',
		'ResourceManager.view.menu.TopMenu',
		'ResourceManager.view.menu.TopMenuController',
		'ResourceManager.view.dashboard.View',
		'ResourceManager.view.BaseForm',
	
		'ResourceManager.view.asset.ListView',
		'ResourceManager.view.asset.EmbeddedArrayList',
		'ResourceManager.view.asset.EmbeddedRestList',
		'ResourceManager.view.asset.DetailView',
	
		'ResourceManager.view.division.ListView',
		'ResourceManager.view.division.EmbeddedArrayList',
		'ResourceManager.view.division.EmbeddedRestList',
		'ResourceManager.view.division.DetailView',
	
		'ResourceManager.view.laborforce.ListView',
		'ResourceManager.view.laborforce.EmbeddedArrayList',
		'ResourceManager.view.laborforce.EmbeddedRestList',
		'ResourceManager.view.laborforce.DetailView',
	
		'ResourceManager.view.worker.ListView',
		'ResourceManager.view.worker.EmbeddedArrayList',
		'ResourceManager.view.worker.EmbeddedRestList',
		'ResourceManager.view.worker.DetailView',
	
	],

	 xtype: 'app-main',
	    controller: 'main',
	    layout: {
	        type: 'vbox',
	        align : 'stretch',
	        pack  : 'start'
	    },

		bodyBorder: false,
		
		defaults: {
		    bodyPadding: 1,
		},
		
		items: [
		{
			xtype: 'panel',
		    layout: {
		    	type: 'hbox',
		        pack: 'start',
		        align: 'stretch'
			},
		    items: [
		        {
			    	xtype:'top-menu',
			    	flex: 1
			    },
			    {
			    	type:'component', 
			    	flex: 1
			    },
			    {
					xtype: 'combo',
					margin: '3 10',
			    	width: 200,
	                store: {type:'asset-liststore'},//TODO: Add it from ViewModel
					displayField: 'uniqueName',
					itemId: 'mainSearch',
					minChars: 1,
					
					listConfig: {
					    loadingText: 'Searching...',
					    emptyText: 'No matching results found.',
					},
					listeners:{
							select:'onSearchSelect' 
					}
				},
			    {
			    	type:'component', 
			    	layout:'fit',
			    	items:[{ xtype: 'button', text: 'Logout', handler: 'onLogout', scale: 'medium'}]
			    }
		
		    ]
		},{
	        flex:1,
	        margin: '5 0 0 0',
	        xtype: 'tabpanel',
	        id: 'myTabpanel',
	        reference: 'main',
	        items:[
			{
			    xtype: 'dashboard',
			    closable: false
			}
		]
    },{
	    title: 'Ver. 0.1. Build: 2.23234.1',
	    region: 'south',
	    height: 100,
	    collapsed:true,
	    collapsible: true,
	    minHeight: 75,
	    maxHeight: 150,
	    html: '<p>Information about application</p>'
	}]
});
