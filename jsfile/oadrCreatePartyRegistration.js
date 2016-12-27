/*
 * oadrCreatePartyRegistration.js
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCreatePartyRegistration.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatePartyRegistration.requestID._);
				
					//oadrTransportName
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatePartyRegistration.oadrTransportName);
					
					//oadrReportOnly
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatePartyRegistration.oadrReportOnly);
					
					//oadrXmlSignature
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatePartyRegistration.oadrXmlSignature);
					
					//oadrHttpPullModel
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatePartyRegistration.oadrHttpPullModel);
					

				});
			});
 