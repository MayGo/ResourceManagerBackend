package extjstest

import grails.rest.*
@Resource(uri='/workers', formats=['json', 'xml'])
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
	
	String toString() {
		"Worker $name $idCode"
	}
}
