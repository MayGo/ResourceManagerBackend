
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
        modelValidation: true,
        defaults: {
            anchor: '95%',
            maxWidth: 400
        },
        items: [		
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
	            fieldLabel: 'Asset',
	           // name:'asset', 
	            
                 bind: '{theDomainObject.asset}',
         

				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'asset-liststore'},
			

				
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
		
			{
	            fieldLabel: 'Worker',
	           // name:'worker', 
	            
                 bind: '{theDomainObject.worker}',
         

				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'worker-liststore'},
			

				
			},
		        
		]
    }]
});
