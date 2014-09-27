Ext.define('ResourceManager.view.menu.TopMenu', {
    extend: 'Ext.container.Container',
    requires:[
		'Ext.layout.container.Border',
	],

	xtype: 'top-menu',
	controller: 'topmenu',
	items:[{
        xtype: 'segmentedbutton',
        defaults:{
        	 scale: 'medium',
        	 height:30
        },
        allowToggle: false,
        items: [{
        		glyph: 0xf015,
                text: '<b>ResourceManager</b>'
            },            
            	{
            		xtype: 'splitbutton',
            		text: 'Asset',
            		value: 'Asset',
            		glyph: 70,
            		handler: 'onClickMenuItem',
                    menu: [
                        { 
                        	text: 'Search items',
                        	handler: 'onOpenSearch',
                        	value: 'Asset',
                        	glyph: 0xf002
                        },
                        { 
                        	text: 'Create new',
                        	handler: 'onCreateDomainObject',
                        	value: 'Asset',
                        	glyph: 0xf067 
                        }
                    ]
            	},            
            	{
            		xtype: 'splitbutton',
            		text: 'Division',
            		value: 'Division',
            		glyph: 71,
            		handler: 'onClickMenuItem',
                    menu: [
                        { 
                        	text: 'Search items',
                        	handler: 'onOpenSearch',
                        	value: 'Division',
                        	glyph: 0xf002
                        },
                        { 
                        	text: 'Create new',
                        	handler: 'onCreateDomainObject',
                        	value: 'Division',
                        	glyph: 0xf067 
                        }
                    ]
            	},            
            	{
            		xtype: 'splitbutton',
            		text: 'Laborforce',
            		value: 'Laborforce',
            		glyph: 72,
            		handler: 'onClickMenuItem',
                    menu: [
                        { 
                        	text: 'Search items',
                        	handler: 'onOpenSearch',
                        	value: 'Laborforce',
                        	glyph: 0xf002
                        },
                        { 
                        	text: 'Create new',
                        	handler: 'onCreateDomainObject',
                        	value: 'Laborforce',
                        	glyph: 0xf067 
                        }
                    ]
            	},            
            	{
            		xtype: 'splitbutton',
            		text: 'Worker',
            		value: 'Worker',
            		glyph: 73,
            		handler: 'onClickMenuItem',
                    menu: [
                        { 
                        	text: 'Search items',
                        	handler: 'onOpenSearch',
                        	value: 'Worker',
                        	glyph: 0xf002
                        },
                        { 
                        	text: 'Create new',
                        	handler: 'onCreateDomainObject',
                        	value: 'Worker',
                        	glyph: 0xf067 
                        }
                    ]
            	},            ]
    }]		
});
