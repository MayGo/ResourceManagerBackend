/**
 * This class is the ViewModel for the asset details view.
 */
Ext.define('ResourceManager.view.worker.DetailModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.worker-detailviewmodel',
    data:{
		isReadOnly:true,
		dataHasChanged:false
	}
});
