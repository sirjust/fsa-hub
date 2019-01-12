import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';


async export function main (event, context){
    const params = {
        TableName: 'resources', 

        keyConditionExpression: "resourcesId = :resourcesId",
        expressionAttributesValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    }
}