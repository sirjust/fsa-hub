import * as dynamoDbLib from './libs/dynamodb-lib';
import {success, failure } from './libs/response-lib'; 


export async function main (event, context) {
    const params = {
        TableName: "resources", 

        Key: {
            resourceId: event.requestContext.identity.cognitoIdentityId,
            resourceHash: event.pathParameters.id
        }
    };

    try {
        const result = await dynamoDbLib.call("delete", params);
        
        return success({status: true})
    } catch (error) {
        return failure ({ status: false})
    }
}