
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
        modelValidation: true,
        defaults: {
            anchor: '95%',
            maxWidth: 400
        },
        items: [		
			{
	            fieldLabel: 'Name',
	           // name:'name', 
	            
                 bind: '{theDomainObject.name}',
         

				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Valid From',
	           // name:'validFrom', 
	            
                 bind: '{theDomainObject.validFrom}',
         

				 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

				
			},
		
			{
	            fieldLabel: 'Valid To',
	           // name:'validTo', 
	            
                 bind: '{theDomainObject.validTo}',
         

				 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

				
			},
		
			{
	            fieldLabel: 'Division',
	           // name:'division', 
	            
                 bind: '{theDomainObject.division}',
         

				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'division-liststore'},
			

				
			},
		        
		]
    }]
});
