package extjstest

import grails.rest.*
@Resource(uri = '/workers', formats = ['json'], superClass = extjsScaffoldingPlugin.CustomRestfulController)
class Worker {
	String name
	String idCode
	Division division
	
	static mapping = { sort "name" }

    static constraints = {
		name nullable:false, blank:false
		idCode nullable:false, blank:false, unique:true
		division nullable:false
    }
	
	def getLaborforces() {
		Laborforce.findAllByAsset(this, [sort:"name"])
	}
	
	static namedQueries = {
		searchQuery { query ->
			if(query){
				ilike 'name', query + '%'
			}
		}
	}
	String toString() {
		"Worker $name $idCode"
	}
}
