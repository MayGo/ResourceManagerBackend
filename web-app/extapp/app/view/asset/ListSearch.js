
Ext.define('ResourceManager.view.asset.ListSearch', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.asset-listsearch',
    
    requires: [
        'ResourceManager.view.asset.ListModel',
        'ResourceManager.view.asset.ListController'
    ],
  
    componentCls: 'asset-listsearch',
    
    title:'Search',
    bodyPadding: '5 10',
    bbar:[{xtype:'button', text:'Search', handler:'onSearchClick'}],

    items: [{
    	xtype:'form',
    	reference: 'listSearchForm',
    	defaults: {
           //anchor: '95%',
           maxWidth: 400,
           margin:15
        },
    	items: [
										{
				            fieldLabel: 'Name',
				            name:'name',
							
			xtype : 'textfield'
		

						},											{
				            fieldLabel: 'Valid From',
				            name:'validFrom',
							 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

						},											{
				            fieldLabel: 'Valid To',
				            name:'validTo',
							 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

						},											{
				            fieldLabel: 'Division',
				            name:'division',
							
				  xtype : 'restcombo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'division-liststore'},
			

						},					               
    	         ]
    }]
});
