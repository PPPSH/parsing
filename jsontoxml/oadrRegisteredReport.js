// oadrRegisteredReport


var requestID = '0e8edfad34';
var venID ='c42ad22d7c2767efcb84';
var responseCode= '200';
var responseDescription = 'OK';



var builder = require('xmlbuilder');
var xml = builder.create('oadrPayload ',{version: '1.0', encoding: 'utf-8'})
	.att ('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
	.att ('xmlns:xsd','http://www.w3.org/2001/XMLSchema')
	.att ('xmlns','http://openadr.org/oadr-2.0b/2012/07')
	  .ele('oadrSignedObject')
	  		//공통 ~
	    .ele('oadrRegisteredReport')
	    .att('d3p1:schemaVersion','2.0b')
		.att('xmlns:d3p1','http://docs.oasis-open.org/ns/energyinterop/201110')
		    .ele('d3p1:eiResponse')
		    	.ele('d3p1:responseCode',responseCode).up()
		    	.ele('d3p1:responseDescription',responseDescription).up()
		    	.ele('requestID',requestID )
		    		.att('xmlns','http://docs.oasis-open.org/ns/energyinterop/201110/payloads').up()
		    		
	    	.end({ pretty: true});
 
console.log(xml);