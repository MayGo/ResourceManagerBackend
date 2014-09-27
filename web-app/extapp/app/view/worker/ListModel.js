/**
 * This class is the ViewModel for the asset details view.
 */
Ext.define('ResourceManager.view.worker.ListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.worker-listviewmodel',
    stores:{
    	listStore:{
            model: 'Worker',
            autoLoad: true
        }	
	}
});
