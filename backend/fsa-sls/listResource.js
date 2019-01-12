import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';


 export async function main (event, context){
    const params = {
        TableName: 'resources', 

        KeyConditionExpression: "resourceId = :resourceId",
        ExpressionAttributeValues: {
            ":resourceId": event.requestContext.identity.cognitoIdentityId
        }
    };

    try {
        const results = await dynamoDbLib.call('query', params);
        return success(results.Items)
    } catch (error) {
        console.log(error)
        return failure({ status: false })
    }
}