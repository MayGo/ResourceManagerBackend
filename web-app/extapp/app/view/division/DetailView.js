
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
        modelValidation: true,
        defaults: {
            anchor: '95%',
            maxWidth: 400
        },
        items: [		
			{
	            fieldLabel: 'Id Trail',
	           // name:'idTrail', 
	            
                 bind: '{theDomainObject.idTrail}',
         

				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Name',
	           // name:'name', 
	            
                 bind: '{theDomainObject.name}',
         

				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Name Trail',
	           // name:'nameTrail', 
	            
                 bind: '{theDomainObject.nameTrail}',
         

				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Head Division',
	           // name:'headDivision', 
	            
                 bind: '{theDomainObject.headDivision}',
         

				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'division-liststore'},
			

				
			},
		        
		]
    }]
});
