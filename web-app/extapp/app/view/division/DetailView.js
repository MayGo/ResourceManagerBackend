
Ext.define('ResourceManager.view.division.DetailView', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.division-detailview',
    
    requires: [
        'ResourceManager.view.division.DetailModel',
        'ResourceManager.view.division.DetailController'
    ],
  
    componentCls: 'division-detail',
    
    controller: 'division-detailcontroller',
    viewModel: {
        type: 'division-detailviewmodel'
    },
    
    items: [{
        xtype: 'base-form',
        reference: 'baseform',
        defaults: {
            anchor: '95%',
            maxWidth: 400
        },
        items: [		
			{
	            fieldLabel: 'Id Trail',
	            name:'idTrail',    
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Name',
	            name:'name',    
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Name Trail',
	            name:'nameTrail',    
				
			xtype : 'textfield'
		

				
			},
		
			{
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
