/**
 * This class is the ViewModel for the asset details view.
 */
Ext.define('ResourceManager.view.laborforce.ListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.laborforce-listviewmodel',
    stores:{
    	listStore:{
            model: 'Laborforce',
            autoLoad: true
        }	
	}
});
