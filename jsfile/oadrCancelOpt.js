/*
 * oadrCancelOpt.js
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCancelOpt.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelOpt.requestID._);
					
					//otpID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelOpt["d3p1:optID"]);
					
					//VenID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelOpt["d3p1:venID"]);
					
				
				});
			});
 