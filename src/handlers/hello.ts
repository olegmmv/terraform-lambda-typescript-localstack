import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("Event:", JSON.stringify(event, null, 2));

  const name = event.queryStringParameters?.name ?? "world";
  const greeting = `Hello, ${name}!`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: greeting,
      requestId: context.awsRequestId,
      timestamp: new Date().toISOString(),
      stage: process.env.STAGE ?? "unknown",
    }),
  };
};
