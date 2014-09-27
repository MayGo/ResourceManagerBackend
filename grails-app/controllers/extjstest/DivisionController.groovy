package extjstest



import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class DivisionController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
		def results = Division.list(params)
		def totalResults = Division.count()
		
		def listObject = [list: results, total: totalResults]
		respond listObject as Object, [status: OK]
    }

    @Transactional
    def save(Division divisionInstance) {
        if (divisionInstance == null) {
            render status: NOT_FOUND
            return
        }

        divisionInstance.validate()
        if (divisionInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        divisionInstance.save flush:true
        respond divisionInstance, [status: CREATED]
    }

    @Transactional
    def update(Division divisionInstance) {
        if (divisionInstance == null) {
            render status: NOT_FOUND
            return
        }

        divisionInstance.validate()
        if (divisionInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        divisionInstance.save flush:true
        respond divisionInstance, [status: OK]
    }

    @Transactional
    def delete(Division divisionInstance) {

        if (divisionInstance == null) {
            render status: NOT_FOUND
            return
        }

        divisionInstance.delete flush:true
        render status: NO_CONTENT
    }
}
