package extjstest


import grails.rest.*
@Resource(uri='/laborforces', formats=['json', 'xml'])
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

    String toString() {
        "$worker $validFrom-$validTo $asset"
    }
}
