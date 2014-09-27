/**
 * This class is the ViewModel for the asset details view.
 */
Ext.define('ResourceManager.view.division.ListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.division-listviewmodel',
    stores:{
    	listStore:{
            model: 'Division',
            autoLoad: true
        }	
	}
});
