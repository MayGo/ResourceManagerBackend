Ext.define('ResourceManager.view.menu.TopMenuController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox',
        'ResourceManager.services.TabService'
    ],

    alias: 'controller.topmenu',

    onClickMenuItem: function ( btn, event ){
    	var domain = btn.value;
    	var xtype = ResourceManager.services.TabService.domainListXtype(domain);
    	ResourceManager.services.TabService.createTab(xtype, null, {
        	title: domain,
            xtype: xtype
        });
    },
    

	
	onOpenSearch : function (btn, event) {
		var domain = btn.value;
    	var searchBox = Ext.ComponentQuery.query('#mainSearch')[0];
    	searchBox.clearValue();
    	searchBox.bindStore({type:Ext.util.Format.lowercase(domain) + "-liststore"});
    	searchBox.store.load();
		searchBox.expand();
    },
    
    onCreateDomainObject: function (btn, event) {
    	var domain = btn.value;
    	var newRecord = Ext.create('ResourceManager.model.' + domain);
    	newRecord.set("uniqueName", "[new]",{convert :false});
    	ResourceManager.services.TabService.openDomainDetailTab(newRecord, true);
    }

});
