class UrlMappings {

	static mappings = {

		'/assets'(resources:'Asset')
		'/divisions'(resources:'Division')
		'/laborforces'(resources:'Laborforce')
		'/workers'(resources:'Worker')

        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
