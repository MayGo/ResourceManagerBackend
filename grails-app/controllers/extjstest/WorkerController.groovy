package extjstest



import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class WorkerController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
		def results = Worker.list(params)
		def totalResults = Worker.count()
		
		def listObject = [list: results, total: totalResults]
		respond listObject as Object, [status: OK]
    }

    @Transactional
    def save(Worker workerInstance) {
        if (workerInstance == null) {
            render status: NOT_FOUND
            return
        }

        workerInstance.validate()
        if (workerInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        workerInstance.save flush:true
        respond workerInstance, [status: CREATED]
    }

    @Transactional
    def update(Worker workerInstance) {
        if (workerInstance == null) {
            render status: NOT_FOUND
            return
        }

        workerInstance.validate()
        if (workerInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        workerInstance.save flush:true
        respond workerInstance, [status: OK]
    }

    @Transactional
    def delete(Worker workerInstance) {

        if (workerInstance == null) {
            render status: NOT_FOUND
            return
        }

        workerInstance.delete flush:true
        render status: NO_CONTENT
    }
}
