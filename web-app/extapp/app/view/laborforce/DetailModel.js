/**
 * This class is the ViewModel for the asset details view.
 */
Ext.define('ResourceManager.view.laborforce.DetailModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.laborforce-detailviewmodel',
    data:{
		isReadOnly:true
	},
    formulas:{
        status:{
            bind:{
                bindTo:'{theDomainObject}',
                deep:true
            },
            get: function(domainObj){
                var ret = {
                        dirty:domainObj ? domainObj.dirty : false,
                        valid:domainObj && domainObj.isModel ? domainObj.isValid():false 
                };
                ret.dirtyAndValid = ret.dirty && ret.valid;
                return ret
            }
        }
    }

});
