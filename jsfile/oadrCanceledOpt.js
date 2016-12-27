
/*
 * oadrCanceledOpt.js
 */
 
			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			 
			fs.readFile('../xmlfile/oadrCanceledOpt.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//responseCode
					console.log(result.oadrPayload.oadrSignedObject.oadrCanceledOpt["d3p1:eiResponse"]["d3p1:responseCode"]);
					
					//responseCode
					console.log(result.oadrPayload.oadrSignedObject.oadrCanceledOpt["d3p1:eiResponse"]["d3p1:responseDescription"]);
					
					//requestID
					console.log(result.oadrPayload.oadrSignedObject.oadrCanceledOpt["d3p1:eiResponse"].requestID._);
					
					//optID  d3p1:optID
					console.log(result.oadrPayload.oadrSignedObject.oadrCanceledOpt["d3p1:optID"]);
					
				
				});
			});
 