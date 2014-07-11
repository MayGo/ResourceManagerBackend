package extjstest


import grails.rest.*
@Resource(uri = '/assets', formats = ['json'], superClass = extjsScaffoldingPlugin.CustomRestfulController)
class Asset {

    String name
	Date validFrom
	Date validTo
	Division division

    static mapping = { sort "name" }

    static constraints = {
        name nullable:false, blank:false, unique:true
		validFrom nullable:false
		validTo nullable:false
		division nullable:false
    }

   def beforeDelete() {
        //Citizen2.withNewSession { citizens*.delete() } <--- Slow
        //Citizen2.withNewSession { Citizen2.executeUpdate("delete Citizen2 where country=:country", [country: this]) } <--- do not think this is needed 
        Laborforce.executeUpdate("delete Laborforce where asset=:asset", [asset: this])
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
        "Asset $name"
    }
}
