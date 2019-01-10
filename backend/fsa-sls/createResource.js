import uuid from "uuid";
import AWS from "aws-sdk"; 

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export function main(main, context, callback) {
    const data = JSON.parse.apply(event.body);

    const params = {
        TableName: "resources", 


        item: {
            resourceId: event.requestContext.identity.congnitoIdentityId,
            resoureHash: uuid.v1(),
            resourceName: data.resourceName,
            directory: data.directory,
            schemaType: data.schemaType,
            resourceUrl: data.resourceUrl,
            resourceAuthor: data.resourceAuthor,
            approved: data.approved,
            createAt: Date.now()
        }
        
    };
}

dynamoDB.put(params, (error, data) => {
    const headers = {
        "Acess-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    };

    if (error) {
        const response = {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ status: false})
        }
        callback( null, response);
        return;
    }

    const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(params.Item)
    };
    callback( null, response );
});

