Ext.define('ResourceManager.config.Runtime',{
	singleton : true,
	config : {
		applicationUrl : 'http://localhost:8080/ResourceManager',
		loginUrl : '[:]/api/login',
		logoutUrl : '[:]/api/logout',
		validationUrl:  '[:]/api/validate',
		securityEnabled : false
	},
	constructor : function(config){
		this.initConfig(config);
	}
});
