
Ext.define('ResourceManager.view.worker.DetailView', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.worker-detailview',
    
    requires: [
        'ResourceManager.view.worker.DetailModel',
        'ResourceManager.view.worker.DetailController'
    ],
  
    componentCls: 'worker-detail',
    
    controller: 'worker-detailcontroller',
    viewModel: {
        type: 'worker-detailviewmodel'
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
	            fieldLabel: 'Id Code',
	           // name:'idCode', 
	            
                 bind: '{theDomainObject.idCode}',
         

				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Name',
	           // name:'name', 
	            
                 bind: '{theDomainObject.name}',
         

				
			xtype : 'textfield'
		

				
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
