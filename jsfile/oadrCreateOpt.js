/*
 * oadrCreatedEvent
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCreateOpt.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt);
					
					//optID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt["d3p1:optID"]);
					
					//optType
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt["d3p1:optType"]);
					
					//optReason
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt["d3p1:optReason"]);
					
					//venID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt["d3p1:venID"]);
					
					//date-time
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt.vavailability.components.available.properties.duration["date-time"]);
					
					//duration
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt.vavailability.components.available.properties.duration.duration);
					
					//createDateTime
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt["d3p1:createdDateTime"]);
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateOpt.requestID._);
					
					
					
				});
			});
 