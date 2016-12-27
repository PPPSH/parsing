

//var responseCode = 200;
//var responseDescription = 'OK';
var requestID = '12cc5f2bb1';
//var eventID = '94a3596686f661c4f457';
//var modificationNumber = '0';
var optType='optIn';
var venID ='2956c1b152747b008191';
var optID = '2ff4b605e7-IN';
var optReason = 'economic';
var date_time ='2016-09-21T19:00:00Z';
var duration = 'PT1H';
var createdDateTime='2016-09-22T00:55:03.4951172Z';


var builder = require('xmlbuilder');
var xml = builder.create('oadrPayload ',{version: '1.0', encoding: 'utf-8'})
	.att ('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
	.att ('xmlns:xsd','http://www.w3.org/2001/XMLSchema')
	.att ('xmlns','http://openadr.org/oadr-2.0b/2012/07')
	  .ele('oadrSignedObject')
	  		//공통 ~
	    .ele('oadrCreateOpt')
	    .att('d3p1:schemaVersion','2.0b')
	    .att('xmlns:d3p1','http://docs.oasis-open.org/ns/energyinterop/201110')
	    	.ele('d3p1:optID',optID).up()
	    	.ele('d3p1:optType',optType).up()
	    	.ele('d3p1:optReason',optReason).up()
	    	.ele('d3p1:venID',venID).up()
	    	.ele('vavailability')
	    		.att ('xmlns','urn:ietf:params:xml:ns:icalendar-2.0')
	    		.ele('components')
	    			.ele('available')
	    				.ele('properties')
	    					.ele('dtstart')
	    						.ele('date-time',date_time).up()
	    					.up()
	    					.ele('duration')
	    						.ele('duration',duration).up()
	    					.up()
	    				.up()
	    			.up()
	    		.up()
	    	.up()
	    	.ele('d3p1:createdDateTime',createdDateTime).up()
	    	.ele('requestID',requestID)
	    	.att('xmlns:d3p1','http://docs.oasis-open.org/ns/energyinterop/201110/payloads')
	    						
	    	

	    	
	    	.end({ pretty: true});
 
console.log(xml);