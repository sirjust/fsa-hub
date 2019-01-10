import uuid from "uuid";
import AWS from "aws-sdk"; 

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export function main(event, context, callback) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: "resources", 


        Item: {
            resourceId: event.requestContext.identity.cognitoIdentityId,
            resourceHash: uuid.v1(),
            resourceName: data.resourceName,
            directory: data.directory,
            schemaType: data.schemaType,
            resourceUrl: data.resourceUrl,
            resourceAuthor: data.resourceAuthor,
            approved: data.approved,
            submittedOn: Date.now()
        }
        
    };

    dynamoDb.put(params, (error, data) => {
        // Set response headers to enable CORS (Cross-Origin Resource Sharing)
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        };
    
        // Return status code 500 on error
        if (error) {
          const response = {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ status: false })
          };
          callback(null, response);
          return;
        }
    
        // Return status code 200 and the newly created item
        const response = {
          statusCode: 200,
          headers: headers,
          body: JSON.stringify(params.Item)
        };
        callback(null, response);
      });
}




