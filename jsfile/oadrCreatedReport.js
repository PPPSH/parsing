/*
 * oadrCreatedReport
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCreatedReport.xml',function(err,data){
				parser.parseString(data,function(err, result){
				
			//	console.log(result);	
					//responseCode
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedReport["d3p1:eiResponse"]["d3p1:responseCode"]);			
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedReport["d3p1:eiResponse"].requestID._);				
					//reportRequestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedReport.oadrPendingReports["d3p1:reportRequestID"]);				
					//venID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreatedReport["d3p1:venID"]);
					
			
				
				});
			});
 