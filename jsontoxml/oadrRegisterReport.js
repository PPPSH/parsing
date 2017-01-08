//oadrRegisterReport


var responseCode = 200;
var requestID = 'c27a091e7f';
var venID ='2956c1b152747b008191';
var optID = '2ff4b605e7-IN';

var duration ='PT2H'
var rID='resource1_status'
var resourceID='resource1'
var reportType ='x-resourceStatus'	
var readingType='x-notApplicable'	
var marketContext = 'http://MarketContext1'
var oadrMinPeriod='PT1M'
var oadrMaxPeriod='PT1M'
var oadrOnChange='false'
	
var reportRequestID='0'
var reportSpecifierID='789ed6cd4e_telemetry_status'
var reportName='METADATA_TELEMETRY_STATUS'
var createdDateTime='2016-09-20T09:07:04.2871093Z'

	
var builder = require('xmlbuilder');
var xml = builder.create('oadrPayload ',{version: '1.0', encoding: 'utf-8'})
	.att ('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance')
	.att ('xmlns:xsd','http://www.w3.org/2001/XMLSchema')
	.att ('xmlns','http://openadr.org/oadr-2.0b/2012/07')
	  .ele('oadrSignedObject')
	  		//공통 ~
	  		.ele('oadrCreatedReport')
	  		.att('d3p1:schemaVersion','2.0b')
	  		.att('xmlns:d3p1','http://docs.oasis-open.org/ns/energyinterop/201110')
	  			.ele('requestID',requestID)
	  			.att('xmlns','http://docs.oasis-open.org/ns/energyinterop/201110/payloads').up()
	  			
	  			.ele('oadrReport')
	  				.ele('duration')
	  				.att('xmlns','urn:ietf:params:xml:ns:icalendar-2.0')
	  					.ele('duration',duration).up().up()
	  					
	  				
	  				.ele('oadrReportDescription')
	  					.ele('d3p1:rID',rID).up()
	  					.ele('d3p1:reportDataSource')
	  						.ele('d3p1:resourceID',resourceID).up().up()
	  						
	  				
	  				
	  					.ele('d3p1:reportType',reportType).up()
		  				
		  				.ele('d3p1:readingType',readingType).up()
		  				.ele('marketContext',marketContext)
		  				.att('xmlns','http://docs.oasis-open.org/ns/emix/2011/06').up()
		  				.ele('oadrSamplingRate')
		  					.ele('oadrMinPeriod',oadrMinPeriod).up()
		  					.ele('oadrMaxPeriod',oadrMaxPeriod).up()
		  					.ele('oadrOnChange',oadrOnChange).up().up().up()
		  			.ele('d3p1:reportRequestID',reportRequestID).up()
		  			.ele('d3p1:reportSpecifierID',reportSpecifierID).up()
		  			.ele('d3p1:reportName',reportName).up()
		  			.ele('d3p1:createdDateTime',createdDateTime).up().up()
		  			////
		  		.ele('oadrReport')
	  				.ele('duration')
	  				.att('xmlns','urn:ietf:params:xml:ns:icalendar-2.0')
	  					.ele('duration',duration).up().up()
	  					
	  				
	  				.ele('oadrReportDescription')
	  					.ele('d3p1:rID',rID).up()
	  					.ele('d3p1:reportDataSource')
	  						.ele('d3p1:resourceID',resourceID).up().up()
	  						
	  				
	  				
	  					.ele('d3p1:reportType',reportType).up()
		  				
		  				.ele('d3p1:readingType',readingType).up()
		  				.ele('marketContext',marketContext)
		  				.att('xmlns','http://docs.oasis-open.org/ns/emix/2011/06').up()
		  				.ele('oadrSamplingRate')
		  					.ele('oadrMinPeriod',oadrMinPeriod).up()
		  					.ele('oadrMaxPeriod',oadrMaxPeriod).up()
		  					.ele('oadrOnChange',oadrOnChange).up().up().up()
		  			.ele('d3p1:reportRequestID',reportRequestID).up()
		  			.ele('d3p1:reportSpecifierID',reportSpecifierID).up()
		  			.ele('d3p1:reportName',reportName).up()
		  			.ele('d3p1:createdDateTime',createdDateTime).up().up()
		  			
	  				
	  				
	  	    	.end({ pretty: true});
	  
	  console.log(xml);