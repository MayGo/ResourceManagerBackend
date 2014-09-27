/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ResourceManager.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ResourceManager',
    requires : ['ResourceManager.config.Runtime'],

    views: [
		'login.Login',
		'main.Main'
    ],

    stores: [
             'MenuItems',
	
		'AssetList',
	
		'DivisionList',
	
		'LaborforceList',
	
		'WorkerList',
	
    ],
    
    launch: function () {
    	Ext.fly("loading").hide();
    	var loggedIn = false;
    	if(ResourceManager.config.Runtime.getSecurityEnabled()){
			var supportsLocalStorage = Ext.supports.LocalStorage;
	
			if (!supportsLocalStorage) {
				// Alert the user if the browser does not support localStorage
				Ext.Msg.alert('Your Browser Does Not Support Local Storage');
				return;
			}
	
			var profile = Ext.create('ResourceManager.model.Profile');
			profile.setLoginDataFromLocalStorage();
			
			if(profile.isLoggedIn()){
				Ext.Ajax.request({
		            url: ResourceManager.config.Runtime.getValidationUrl(),
		            method: 'POST',
		            success: function(response, options) {
		            	Ext.widget('app-main')
		            },
		            failure: function(response, options) {
		            	Ext.widget('login')
		            },
		            scope:this
		        });
				return
			}
    	}else{
    		loggedIn = true;
    	}
		// If loggedIn isn't true, we display the login window,
		// otherwise, we display the main view
		Ext.widget(loggedIn ? 'app-main' : 'login');
    }
});