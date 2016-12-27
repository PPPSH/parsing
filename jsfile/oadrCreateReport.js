/*
 * oadrCreateReport
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCreateReport.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateReport.requestID._);
					
					//reportRequestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateReport.oadrReportRequest["d3p1:reportRequestID"]);
					
					//reportSpecifierID
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateReport.oadrReportRequest["d3p1:reportSpecifier"]["d3p1:reportSpecifierID"]);
					
					//duration
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateReport.oadrReportRequest["d3p1:reportSpecifier"].granularity.duration);
					
					//duration
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateReport.oadrReportRequest["d3p1:reportSpecifier"]["d3p1:reportBackDuration"].duration._);
					
					//date-time
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateReport.oadrReportRequest["d3p1:reportSpecifier"]["d3p1:reportInterval"].properties.dtstart["date-time"]);
					
					//duration
					console.log(result.oadrPayload.oadrSignedObject.oadrCreateReport.oadrReportRequest["d3p1:reportSpecifier"]["d3p1:reportInterval"].properties.duration.duration);
					
				
				
				});
			});
 