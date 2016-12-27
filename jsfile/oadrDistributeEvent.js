//oadrDistributeEvent



			var fs =require('fs')
			var xml2js = require('xml2js');			
			var parser = new xml2js.Parser({explicitArray : false});
			
			fs.readFile('../xmlfile/oadrDistributeEvent.xml',function(err,data){
				parser.parseString(data,function(err, result){
					
					//responseCode
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent["d3p1:eiResponse"]["d3p1:responseCode"]);
					
					//responseDescription
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent["d3p1:eiResponse"]["d3p1:responseDescription"]);
					
					//requestID-1
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent["d3p1:eiResponse"].requestID._);
					
					//requestID-2
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.requestID._);
					
					//vtnID
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent["d3p1:vtnID"]);
					
					//oadrEvent[0]-eventID
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:eventID"]);
					
					//oadrEvent[0]-modificationNumber
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:modificationNumber"]);
					
					//oadrEvent[0]-priority
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:priority"]);
					
					//oadrEvent[0]-marketContext 
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:eiMarketContext"].marketContext._);					
					
					//oadrEvent[0]-createdDateTime d3p1:createdDateTime
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:createdDateTime"]);					
					
					//oadrEvent[0]-d3p1:eventStatus
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:eventStatus"]);					
					
					//oadrEvnet[0]-testEvent
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:testEvent"]);
					
					//oadrEvent[0] -date-time
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties.dtstart["date-time"]);
					
					//oadrEvent[0] - duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties.duration.duration);
					
					//oadrEvent[0] - tolerance
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties.tolerance.tolerate.startafter);
					
					//oadrEvent[0] - eiNotification-duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties["d3p1:x-eiNotification"].duration);
					
					//oadrEvent[0] - eiRampUp-duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties["d3p1:x-eiRampUp"].duration);
					
					//oadrEvent[0] - eiRecovery-duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties["d3p1:x-eiRecovery"].duration);
					
					//oadrEvent[0] - d3p1:eiEventSignals
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"].intervals["d3p1:interval"].duration.duration);
					
					//oadrEvent[0] - uid
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"].intervals["d3p1:interval"].uid.text);
					
					//oadrEvent[0]- d3p1:value
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"].intervals["d3p1:interval"]["d3p1:signalPayload"]["d3p1:payloadFloat"]["d3p1:value"]);
					
					//oadrEvent[0]- d3p1:eiTarget // venID
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0]["d3p1:eiEvent"]["d3p1:eiTarget"]["d3p1:venID"]);
					
					//oadrEvent[0]  - oadrResponseRequired
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[0].oadrResponseRequired);
					
				 //////////////////////// 
					console.log("");
					

					//oadrEvent[1]-eventID
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:eventID"]);
					
					//oadrEvent[1]-modificationNumber
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:modificationNumber"]);
					
					//oadrEvent[1]-marketContext 
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:eiMarketContext"].marketContext._);					
					
					//oadrEvent[1]-createdDateTime d3p1:createdDateTime
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:createdDateTime"]);					
					
					//oadrEvent[1]-d3p1:eventStatus
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:eventStatus"]);					
					
					//oadrEvnet[1]-vtnComment
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eventDescriptor"]["d3p1:vtnComment"]);
					
					//oadrEvent[1] -date-time
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties.dtstart["date-time"]);
					
					//oadrEvent[1] - duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties.duration.duration);
					
					//oadrEvent[1] - tolerance
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties.tolerance.tolerate.startafter);
					
					//oadrEvent[1] - eiNotification-duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties["d3p1:x-eiNotification"].duration);
					
					//oadrEvent[1] - eiRampUp-duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties["d3p1:x-eiRampUp"].duration);
					
					//oadrEvent[1] - eiRecovery-duration
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiActivePeriod"].properties["d3p1:x-eiRecovery"].duration);
					
					//oadrEvent[1] - d3p1:eiEventSignals
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"].intervals["d3p1:interval"].duration.duration);
					
					//oadrEvent[1] - uid
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"].intervals["d3p1:interval"].uid.text);
					
					//oadrEvent[1]- d3p1:value
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"].intervals["d3p1:interval"]["d3p1:signalPayload"]["d3p1:payloadFloat"]["d3p1:value"]);
					
					//oadrEvent[1]- signalName
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"]["d3p1:signalName"]);
					
					//oadrEvent[1] - signalType
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"]["d3p1:signalType"]);
					
					//oadrEvent[1] - signalID
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"]["d3p1:signalID"]);
					
					//oadrEvent[1] - d3p1:currentValue
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiEventSignals"]["d3p1:eiEventSignal"]["d3p1:currentValue"]["d3p1:payloadFloat"]["d3p1:value"]);
					
					//oadrEvent[1]- d3p1:eiTarget // resourceID
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiTarget"]["d3p1:resourceID"]);
					
					//oadrEvent[1]- d3p1:eiTarget // venID
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1]["d3p1:eiEvent"]["d3p1:eiTarget"]["d3p1:venID"]);
					
					//oadrEvent[1]  - oadrResponseRequired
					console.log(result.oadrPayload.oadrSignedObject.oadrDistributeEvent.oadrEvent[1].oadrResponseRequired);
								
				});				
			});
 