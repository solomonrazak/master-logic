import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

interface User{
    name: string;
    role: string;
}

export async function spread(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
   
    const baseUser: User = {name: "solomon", role: "admin"};
    const adminUser = {...baseUser, role: "guest"}

    const fruits = ["apple", "banana", "cherry"];

    const mixedfruits = [...fruits, "pineapple", "mango"];


    context.log(adminUser, baseUser, mixedfruits);
    return {status: 200, jsonBody: {baseUser, adminUser, mixedfruits}};
};

app.http('spread', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: spread
});
