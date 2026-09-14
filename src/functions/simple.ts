import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function simple(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  
    context.log(`http function processed for this request url ${request.url}`);

    const name = request.query.get('name') || await request.text() || "world";

    return {
        status: 200,
        jsonBody: {message: `Hello ${name}! This HTTP triggered function executed successfully.`}
    }



};

app.http('simple', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: simple
});
