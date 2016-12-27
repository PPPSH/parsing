/*
 * oadrCreatedEvent
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/1oadrCreatedEvent.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					
			/*		console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:eventResponses"]._.duration);
					console.log("**********************")
			*/		//responseCode
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:eiResponse"]["d3p1:responseCode"]);
					
					//responseDescription
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:eiResponse"]["d3p1:responseDescription"]);
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:eventResponses"]["d3p1:eventResponse"].requestID);
					
					//eventId
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:eventResponses"]["d3p1:eventResponse"]["d3p1:qualifiedEventID"]["d3p1:eventID"]);
					
					//eventmodificationNumber
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:eventResponses"]["d3p1:eventResponse"]["d3p1:qualifiedEventID"]["d3p1:modificationNumber"]);
					
					//optType
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:eventResponses"]["d3p1:eventResponse"]["d3p1:optType"]);
					
					//venID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedEvent.eiCreatedEvent["d3p1:venID"]);	
				
				});
			});
 