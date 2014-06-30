package extjstest

import grails.rest.*
class CustomRestfulController<T> extends RestfulController<T> {
	CustomRestfulController(Class<T> domainClass) {
		this(domainClass, false)
	}
	CustomRestfulController(Class<T> domainClass, boolean readOnly) {
		super(domainClass, readOnly)
	}
	
	def index(Integer max) {
		params.max = Math.min(max ?: 10, 100)
		
		def results = resource.searchQuery(params.query).list(params)
		def totalResults = resource.searchQuery(params.query).count()
		
		def listObject = [list: results, total: totalResults]
		respond listObject as Object
	}
}