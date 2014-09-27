
Ext.define('ResourceManager.view.asset.DetailView', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.asset-detailview',
    
    requires: [
        'ResourceManager.view.asset.DetailModel',
        'ResourceManager.view.asset.DetailController'
    ],
  
    componentCls: 'asset-detail',
    
    controller: 'asset-detailcontroller',
    viewModel: {
        type: 'asset-detailviewmodel'
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
	            fieldLabel: 'Name',
	            name:'name',    
				
			xtype : 'textfield'
		

				
			},
		
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
