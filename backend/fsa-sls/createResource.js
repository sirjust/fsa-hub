import uuid from "uuid";
import AWS from "aws-sdk"; 

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export function createResource(main, context, callback) {
    const data = JSON.parse.apply(event.body);
}

