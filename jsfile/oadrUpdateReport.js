/**
 * oadrUpdateReport.js
 */


 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrUpdateReport.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					
					//requestID
				//	console.log(result.oadrPayload.oadrSignedObject.oadrUpdateReport.requestID);
					
					console.log(result.oadrPayload.oadrSignedObject.oadrUpdateReport.oadrReport.dtstart['date-time']);
					
					//date-time
					//console.log(result.oadrPayload.oadrSignedObject.oadrUpdateReport.dtstart);
					
					/*//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrRequestEvent.eiRequestEvent.requestID);
					
					//venID
					console.log(result.oadrPayload.oadrSignedObject.oadrRequestEvent.eiRequestEvent["d3p1:venID"]);*/
					
				
				
				});
			});
 