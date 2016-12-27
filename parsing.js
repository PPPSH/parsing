 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('note.xml',function(err,data){
				parser.parseString(data,function(err, result){
					console.log("%j",result);
					console.log(result.oadrSignedObject);
					//console.log("-------------------------------------");
					//console.log(result.oadrPayload.oadrSignedObject);
					//console.log("######################");
					//console.log(result.oadrPayload.oadrSignedObject.oadrCanceledPartyRegistration);
					*/
					//console.log(result.oadrPayload.oadrSignedObject.oadrCanceledPartyRegistration);
					//console.log(result.oadrPayload.oadrSignedObject.oadrCanceledPartyRegistration["d3p1:eiResponse"]["d3p1:responseDescription"]);
				//	console.log(result.oadrPayload.oadrSignedObject.oadrCanceledPartyRegistration["d3p1:eiResponse"]["d3p1:responseCode"]);
				/*	console.log(result.oadrPayload.oadrSignedObject.oadrCanceledPartyRegistration["d3p1:eiResponse"]["requestID"]["_"]);
					console.log(result.oadrPayload.oadrSignedObject.oadrCanceledPartyRegistration["d3p1:registrationID"]);
					console.log(result.oadrPayload.oadrSignedObject.oadrCanceledPartyRegistration["d3p1:venID"]);
					*/
					

					
						
				
				});
			});
 