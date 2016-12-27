
/*
 * oadrCancelOpt.js
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCancelReport.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelReport.requestID._);
					
					//reportRequestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelReport["d3p1:reportRequestID"]);
					
					//reportToFollow
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelReport.reportToFollow._);
					
					//venID
					console.log(result.oadrPayload.oadrSignedObject.oadrCancelReport["d3p1:venID"]);
					
					
						
				
				});
			});
 