
Ext.define('ResourceManager.view.laborforce.ListSearch', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.laborforce-listsearch',
    
    requires: [
        'ResourceManager.view.laborforce.ListModel',
        'ResourceManager.view.laborforce.ListController'
    ],
  
    componentCls: 'laborforce-listsearch',
    
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
				            fieldLabel: 'Asset',
				            name:'asset',
							
				  xtype : 'restcombo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'asset-liststore'},
			

						},											{
				            fieldLabel: 'Division',
				            name:'division',
							
				  xtype : 'restcombo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'division-liststore'},
			

						},											{
				            fieldLabel: 'Worker',
				            name:'worker',
							
				  xtype : 'restcombo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'worker-liststore'},
			

						},					               
    	         ]
    }]
});
