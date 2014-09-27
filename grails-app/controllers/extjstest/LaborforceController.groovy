package extjstest



import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class LaborforceController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
		def results = Laborforce.list(params)
		def totalResults = Laborforce.count()
		
		def listObject = [list: results, total: totalResults]
		respond listObject as Object, [status: OK]
    }

    @Transactional
    def save(Laborforce laborforceInstance) {
        if (laborforceInstance == null) {
            render status: NOT_FOUND
            return
        }

        laborforceInstance.validate()
        if (laborforceInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        laborforceInstance.save flush:true
        respond laborforceInstance, [status: CREATED]
    }

    @Transactional
    def update(Laborforce laborforceInstance) {
        if (laborforceInstance == null) {
            render status: NOT_FOUND
            return
        }

        laborforceInstance.validate()
        if (laborforceInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        laborforceInstance.save flush:true
        respond laborforceInstance, [status: OK]
    }

    @Transactional
    def delete(Laborforce laborforceInstance) {

        if (laborforceInstance == null) {
            render status: NOT_FOUND
            return
        }

        laborforceInstance.delete flush:true
        render status: NO_CONTENT
    }
}
