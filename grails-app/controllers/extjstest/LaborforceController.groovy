package extjstest


import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional
import grails.rest.RestfulController


@Transactional(readOnly = true)
class LaborforceController extends RestfulController{

    static responseFormats = ['json']
	
	LaborforceController() {
		super(Laborforce, false /* read-only */)
	}
	
	def index(Integer max) {
		params.max = Math.min(max ?: 10, 100)
		
		// Parses params.query for dynamic search and uses params.offset/params.max for paging. Returns [list: results, total: results.totalCount] for paging grid.
		// This is here so running demo works right away. Should be replaced with own service, eg: laborforceService.list(params)
		def listObject = grails.plugin.extjsscaffolding.ExtjsScaffoldingService.parseParamsAndRetrieveListAndCount(resource, params)
		respond listObject as Object
	}
}
