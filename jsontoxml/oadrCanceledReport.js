

var responseCode = 200;
//var responseDescription = 'OK';
var requestID = '4748d49651903346bcab';
//var eventID = '94a3596686f661c4f457';
//var modificationNumber = '0';
//var optType='optOut';
var venID ='2956c1b152747b008191';
var optID = '2ff4b605e7-IN';

var builder = require('xmlbuilder');
var xml = builder.create('oadrPayload ',{version: '1.0', encoding: 'utf-8'})
	.att ('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
	.att ('xmlns:xsd','http://www.w3.org/2001/XMLSchema')
	.att ('xmlns','http://openadr.org/oadr-2.0b/2012/07')
	  .ele('oadrSignedObject')
	  		//공통 ~
	    .ele('oadrCanceledReport')
	    .att('d3p1:schemaVersion','2.0b')
	    .att('xmlns:d3p1','http://docs.oasis-open.org/ns/energyinterop/201110')
	    	.ele('d3p1:eiResponse')
	    		.ele('d3p1:responseCode',responseCode).up()
	    		.ele('requestID',requestID)
	    		.att('xmlns','http://docs.oasis-open.org/ns/energyinterop/201110/payloads')
	    	.ele('oadrPendingReports')
	    	
	    	.ele('d3p1:venID',venID)

	    	
	    	.end({ pretty: true});
 
console.log(xml);