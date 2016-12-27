var jsonxml = require('jsontoxml');
 
var xml = jsonxml({
    node:'text content',
    parent:[
        {name:'taco',text:'beef taco',children:{salsa:'hot!'}},
        {name:'taco',text:'fish taco',attrs:{mood:'sad'},children:[
            {name:'salsa',text:'mild'},
            'hi',
            {name:'salsa',text:'weak',attrs:{type:2}}
        ]},
        {name:'taco',attrs:'mood="party!"'}
    ]
})
 
console.log(xml);
 