
Ext.define('ResourceManager.view.worker.ListSearch', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.worker-listsearch',
    
    requires: [
        'ResourceManager.view.worker.ListModel',
        'ResourceManager.view.worker.ListController'
    ],
  
    componentCls: 'worker-listsearch',
    
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
				            fieldLabel: 'Id Code',
				            name:'idCode',
							
			xtype : 'textfield'
		

						},											{
				            fieldLabel: 'Name',
				            name:'name',
							
			xtype : 'textfield'
		

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
