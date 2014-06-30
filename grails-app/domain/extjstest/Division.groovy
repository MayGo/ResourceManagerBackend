package extjstest

import grails.rest.*

@Resource(uri = '/divisions', formats = ['json'], superClass = CustomRestfulController)
class Division {

	String name
	Division headDivision
	String idTrail
	String nameTrail

	static mapping = { sort "nameTrail" }

	static constraints = {
		name nullable:false, blank:false, unique:['headDivision']
		headDivision nullable:true
	}
	def getAssets() {
		Asset.findAllByDivision(this, [sort:"name"])
	}

	def getSubDivisions() {
		Division.findAllByHeadDivision(this, [sort:"name"])
	}
	String calcNameTrail(){
		String trail="/"
		trail = (headDivision)?headDivision?.calcNameTrail():''
		trail += "/$name"
	}
	String calcIdTrail(){
		String trail="/"
		trail = (headDivision)?headDivision?.calcIdTrail():''
		trail += "/$id"
	}
	def afterInsert() {
		idTrail=calcIdTrail()
		nameTrail=calcNameTrail()
	}
	def beforeUpdate() {
		idTrail=calcIdTrail()
		nameTrail=calcNameTrail()
	}
	static namedQueries = {
		searchQuery { query ->
			if(query){
			 ilike 'name', query + '%'
			}
		}

	}
	String toString() {
		"$name"
	}
}
