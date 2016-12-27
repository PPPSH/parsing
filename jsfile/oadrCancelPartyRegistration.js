/*
 * oadrCancelPartyRegistration.js
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCancelPartyRegistration.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelPartyRegistration.requestID._);
					
					//registrationID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelPartyRegistration["d3p1:registrationID"]);
					
					//VenID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelPartyRegistration["d3p1:venID"]);
					
					

				});
			});
 