const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: <update region>});

exports.handler = function(event, context, callback){

    let scanningParameters = {
        TableName: 'invoices'
    };

    
    docClient.scan(scanningParameters, function(err,data){
        if(err){
            callback(err, null);
        }else{
 
            callback(null,data.Items);
        }
    });
}
