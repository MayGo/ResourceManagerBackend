
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
        defaults: {
            anchor: '95%',
            maxWidth: 400
        },
        items: [		
			{
	            fieldLabel: 'Id Code',
	            name:'idCode',    
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Name',
	            name:'name',    
				
			xtype : 'textfield'
		

				
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
