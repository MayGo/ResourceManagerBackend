/**
 * This class is the ViewModel for the asset details view.
 */
Ext.define('ResourceManager.view.asset.DetailModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.asset-detailviewmodel',
    data:{
		isReadOnly:true,
		dataHasChanged:false
	}
});
