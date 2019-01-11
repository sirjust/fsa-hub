import uuid from "uuid";

import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';



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

    try {
        await dynamoDbLib.call("put", params);
        return success(params.Item);
    } catch (error) {
        console.log(error);
        return failure({ status: false });
    }
    
}




