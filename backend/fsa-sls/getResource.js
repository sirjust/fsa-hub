import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib'; 


export async function main (event, context) {
    const params = {
        TableName: 'resources', 

        Key: {
            resourceId: event.requestContext.identity.cognitoIdentityId,
            resourceHash: event.pathParameters.id
        }
    }; 

    try {
        const result = await dynamoDbLib.call('get', params);

        if (result.Item){
            return success(result.Item)
        }else
            return failure({status: false, error: "item not found."})
    } catch (error) {
        console.log(error)
        return failure ({ status: false})
    }
}