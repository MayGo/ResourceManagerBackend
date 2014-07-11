package extjstest


import grails.rest.*
@Resource(uri = '/laborforces', formats = ['json'], superClass = extjsScaffoldingPlugin.CustomRestfulController)
class Laborforce {

    Worker worker
	Date validFrom
    Date validTo
    Asset asset
	Division division

    static mapping = { sort "worker" }

    static constraints = {
        worker nullable:false, blank:false, unique:['asset']
        validFrom nullable:false
		validTo nullable:false
		asset nullable:false
		division nullable:false
    }
	static namedQueries = {
		searchQuery { query ->
			if(query){
				worker{
					ilike 'name', query + '%'
				}
			}
		}
	}
    String toString() {
        "$worker $validFrom-$validTo $asset"
    }
}
