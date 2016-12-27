

var responseCode = 200;
var responseDescription = 'OK';
var requestID = 'a4e086ff748bd1202c64';
var eventID = '94a3596686f661c4f457';
var modificationNumber = '0';
var optType='optOut';
var venID ='2956c1b152747b008191'

var builder = require('xmlbuilder');
var xml = builder.create('oadrPayload ',{version: '1.0', encoding: 'utf-8'})
	.att ('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
	.att ('xmlns:xsd','http://www.w3.org/2001/XMLSchema')
	.att ('xmlns','http://openadr.org/oadr-2.0b/2012/07')
	  .ele('oadrSignedObject')
	    .ele('oadrCreatedEvent')
	    .att('d3p1:schemaVersion','2.0b')
	    .att('xmlns:d3p1','http://docs.oasis-open.org/ns/energyinterop/201110')
	    	.ele('eiCreatedEvent')
	    	.att('xmlns','http://docs.oasis-open.org/ns/energyinterop/201110/payloads')
	    		.ele('d3p1:eiResponse')
	    			.ele('d3p1:responseCode',responseCode).up()
	    			.ele('d3p1:responseDescription',responseDescription).up()
	    			.ele('requestID').up()
	    		.up()
	    	.ele('d3p1:eventResponses')
	    		.ele('d3p1:eventResponses')
		    		.ele('d3p1:responseCode',responseCode).up()
		    		.ele('responseDescription',responseDescription).up()
		    		.ele('requestID',requestID).up()
		    		.ele('d3p1:qualifiedEventID')
		    			.ele('d3p1:eventID',eventID).up()
		    			.ele('d3p1:modificationNumber',modificationNumber).up()
		    		.up()
		    		.ele('d3p1:optType',optType)
		    	    .up()
		    	.up()
		    .up()
		    .ele('d3p1:venID',venID)	
	  .end({ pretty: true});
 
console.log(xml);