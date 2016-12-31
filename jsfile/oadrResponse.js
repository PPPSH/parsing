/**
 * oadrResponse
 */
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrResponse.xml',function(err,data){
				parser.parseString(data,function(err, result){							
					//responseCode
					console.log(result.oadrPayload.oadrSignedObject.oadrResponse["d3p1:eiResponse"]["d3p1:responseCode"]);	
					//responseDescription
					console.log(result.oadrPayload.oadrSignedObject.oadrResponse["d3p1:eiResponse"]["d3p1:responseDescription"]);
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrResponse["d3p1:venID"]);
				});
			});
 