/**
 * This class is the ViewModel for the asset details view.
 */
Ext.define('ResourceManager.view.asset.ListModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.asset-listviewmodel',
    stores:{
    	listStore:{
            model: 'Asset',
            autoLoad: true
        }	
	}
});
