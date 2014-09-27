
Ext.define('ResourceManager.view.division.ListSearch', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.division-listsearch',
    
    requires: [
        'ResourceManager.view.division.ListModel',
        'ResourceManager.view.division.ListController'
    ],
  
    componentCls: 'division-listsearch',
    
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
				            fieldLabel: 'Id Trail',
				            name:'idTrail',
							
			xtype : 'textfield'
		

						},											{
				            fieldLabel: 'Name',
				            name:'name',
							
			xtype : 'textfield'
		

						},											{
				            fieldLabel: 'Name Trail',
				            name:'nameTrail',
							
			xtype : 'textfield'
		

						},											{
				            fieldLabel: 'Head Division',
				            name:'headDivision',
							
				  xtype : 'restcombo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'division-liststore'},
			

						},					               
    	         ]
    }]
});
