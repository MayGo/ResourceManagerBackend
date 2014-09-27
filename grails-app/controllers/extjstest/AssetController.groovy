package extjstest



import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class AssetController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
		def results = Asset.list(params)
		def totalResults = Asset.count()
		
		def listObject = [list: results, total: totalResults]
		respond listObject as Object, [status: OK]
    }

    @Transactional
    def save(Asset assetInstance) {
        if (assetInstance == null) {
            render status: NOT_FOUND
            return
        }

        assetInstance.validate()
        if (assetInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        assetInstance.save flush:true
        respond assetInstance, [status: CREATED]
    }

    @Transactional
    def update(Asset assetInstance) {
        if (assetInstance == null) {
            render status: NOT_FOUND
            return
        }

        assetInstance.validate()
        if (assetInstance.hasErrors()) {
            render status: NOT_ACCEPTABLE
            return
        }

        assetInstance.save flush:true
        respond assetInstance, [status: OK]
    }

    @Transactional
    def delete(Asset assetInstance) {

        if (assetInstance == null) {
            render status: NOT_FOUND
            return
        }

        assetInstance.delete flush:true
        render status: NO_CONTENT
    }
}
