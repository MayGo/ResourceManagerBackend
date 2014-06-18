testDataConfig {
    sampleData {
        'extjstest.Division' {
            def i = 1
            name = {-> "Division ${i++}" }   // creates "title1", "title2", ...."titleN"
        }
		'extjstest.Laborforce' {

		}
		'extjstest.Asset' {
			def i = 1
			name = {-> "Asset ${i++}" }   // creates "title1", "title2", ...."titleN"
		}
		'extjstest.Worker' {
			def i = 1
			idCode = {-> "111111${i++}" }
			name = {-> "Jaan Jalgratas ${i++}" }   // creates "title1", "title2", ...."titleN"
		}
    }
}