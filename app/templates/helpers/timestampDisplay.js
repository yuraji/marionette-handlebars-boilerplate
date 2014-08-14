define(['hbs/handlebars'],function( Handlebars ){
	/*
		Doc for Handlebars-Requirejs helpers:
		https://github.com/SlexAxton/require-handlebars-plugin#helpers
	*/


	// input date: string "1970-01-01T00:00:00.000Z" or date object
	function timestampDisplay( date, options ){

		if(typeof date === 'undefined' || date == '' ) {
			return ''; // ain't nobody got time
		}

		if(typeof date === 'string') {
			date = new Date(date);
		}

		var month = ( "00"+ (date.getMonth()+1)  ).slice(-2);
		var day = ( "00"+ (date.getDate())  ).slice(-2);

		var hours = ( "00"+ (date.getHours())  ).slice(-2);
		var mins = ( "00"+ (date.getMinutes())  ).slice(-2);
		var secs = ( "00"+ (date.getSeconds())  ).slice(-2);

		return date.getFullYear()+ '-'+ month  + '-'+ day + ' ' + hours+":" + mins + ":" + secs;
	}

	Handlebars.registerHelper('timestampDisplay', timestampDisplay);
	return timestampDisplay;

	

});