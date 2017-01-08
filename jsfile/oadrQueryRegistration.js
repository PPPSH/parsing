/*
 * oadrQueryRegistration
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrQueryRegistration.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					
					console.log(result);
					
					console.log("!@#!@#!@#@!")
					
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrQueryRegistration.requestID._);
					
					
				
				
				});
			});
 