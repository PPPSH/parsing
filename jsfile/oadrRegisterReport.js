//oadrRegisterReport



			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			var requestID ;
			var reportRequestID={};
			var reportSpecifierID={};
			
			fs.readFile('../xmlfile/oadrRegisterReport.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrRegisterReport.requestID._);
					requestID = result.oadrPayload.oadrSignedObject.oadrRegisterReport.requestID._;
					
					var num = result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport.length;
					//console.log(num);
					
					for(var i = 0 ; i < num ; i++){
						reportRequestID[i]=result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[i]["d3p1:reportRequestID"];
						reportSpecifierID[i]=result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[i]["d3p1:reportSpecifierID"]
					}
					
					for ( var i  = 0 ; i < num ; i++){
						console.log(reportRequestID[i]);
						console.log(reportSpecifierID[i]);
						
					}
					
					//oadrReport[0] //reportRequestID, reportSpecifierID
					/*console.log(result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[0]["d3p1:reportRequestID"]);					
					console.log(result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[0]["d3p1:reportSpecifierID"]);					
						
					//oadrReport[1]
					console.log(result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[1]["d3p1:reportRequestID"]);					
					console.log(result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[1]["d3p1:reportSpecifierID"]);					
				
					//oadrReport[2]
					console.log(result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[2]["d3p1:reportRequestID"]);					
					console.log(result.oadrPayload.oadrSignedObject.oadrRegisterReport.oadrReport[2]["d3p1:reportSpecifierID"]);					
				*/	
				});
				
			
			});
 