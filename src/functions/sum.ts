import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { addService } from "../services/add.service";

export async function sum(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {

    const x = Number(request.query.get('a')) 
    const y = Number(request.query.get('b'))

    const result = addService({firstNumber: x, secondNumber: y});
    context.log(`This is the result of the addition: ${result}`);

    if(result == 0){
        context.log("Invalid input. Please provide valid numbers for addition.");
        return {
            status: 400,
            jsonBody: {message: "Invalid input. Please provide valid numbers for addition."}
        }
    }

    return {
        status: 200,
        jsonBody: {message: `The result of the addition is ${result}`}
    }
} catch(error){
    context.log("Error in sum function:", error);
    return {
        status: 500,
        jsonBody: {message: "An error occurred while processing the request."}
    }

}
}

app.http('sum', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: sum
})
