
Ext.define('ResourceManager.view.laborforce.DetailView', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.laborforce-detailview',
    
    requires: [
        'ResourceManager.view.laborforce.DetailModel',
        'ResourceManager.view.laborforce.DetailController'
    ],
  
    componentCls: 'laborforce-detail',
    
    controller: 'laborforce-detailcontroller',
    viewModel: {
        type: 'laborforce-detailviewmodel'
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
	            fieldLabel: 'Valid From',
	            name:'validFrom',    
				 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

				
			},
		
			{
	            fieldLabel: 'Valid To',
	            name:'validTo',    
				 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

				
			},
		
			{
	            fieldLabel: 'Asset',
	            name:'asset',    
				
				  xtype : 'restcombo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'asset-liststore'},
			

				
			},
		
			{
	            fieldLabel: 'Division',
	            name:'division',    
				
				  xtype : 'restcombo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'division-liststore'},
			

				
			},
		
			{
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
