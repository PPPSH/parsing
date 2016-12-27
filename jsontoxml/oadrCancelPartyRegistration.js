

//var responseCode = 200;
//var responseDescription = 'OK';
var requestID = '1c7c4c2744';
//var eventID = '94a3596686f661c4f457';
//var modificationNumber = '0';
//var optType='optOut';
var venID ='2956c1b152747b008191';
var optID = '2ff4b605e7-IN';
var registrationID='89938072e5e4262f403b';

var builder = require('xmlbuilder');
var xml = builder.create('oadrPayload ',{version: '1.0', encoding: 'utf-8'})
	.att ('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
	.att ('xmlns:xsd','http://www.w3.org/2001/XMLSchema')
	.att ('xmlns','http://openadr.org/oadr-2.0b/2012/07')
	  .ele('oadrSignedObject')
	  		//공통 ~
	    .ele('oadrCancelPartyRegistration')
	    .att('d3p1:schemaVersion','2.0b')
	    .att('xmlns:d3p1','http://docs.oasis-open.org/ns/energyinterop/201110')
	    	.ele('requestID',requestID)
	    	.att('xmlns','http://docs.oasis-open.org/ns/energyinterop/201110/payloads').up()
	    	.ele('d3p1:registrationID',registrationID).up()
	    	.ele('d3p1:venID',venID)
	    	

	    	
	    	.end({ pretty: true});
 
console.log(xml);