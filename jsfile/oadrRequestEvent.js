/*
 * oadrRequestEvent
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrRequestEvent.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrRequestEvent.eiRequestEvent.requestID);
					
					//venID
					console.log(result.oadrPayload.oadrSignedObject.oadrRequestEvent.eiRequestEvent["d3p1:venID"]);
					
				
				
				});
			});
 