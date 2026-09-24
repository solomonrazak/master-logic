how to understand how to process request using core logic holistically.
so how to trace a request.

1. understand what the frontend is requesting, that is the the information the frontend sends .
2. what does the azure function receives, or the controller gets
3. so you need to get a service that will house the logic / business logic - more like what to decide with the request from the frontend
4. also if the service has to talk an external backend api - need to get what the external api expects. e.g core-banking
5. need to get what does backend sends back
6. need to get what my backend is also receives from the external api.
7. also need to know what response my backend sends to the frontend.

FRONTEND
   ↓
HTTP REQUEST
   ↓
CONTROLLER / AZURE FUNCTION
   ↓
VALIDATION
   ↓
BUSINESS SERVICE
   ↓
DATABASE / EXTERNAL API
   ↓
RESPONSE
   ↓
FRONTEND

                    USER
                     │
                     │
              "Pay for Sticker"
                     │
                     ↓
                FRONTEND
                     │
                     │ HTTP request
                     ↓
              AZURE FUNCTION
                     │
                     │ parse request
                     ↓
                VALIDATION
                     │
                     ↓
              BUSINESS SERVICE
                     │
                     │ calculate/decide
                     ↓
              splitFunds()
                     │
              ┌──────┴──────┐
              ↓             ↓
             NIC       Brown Card
              │
              ↓
        creditAccount()
              │
              ↓
       GetAuthorizationString()
              │
              ↓
             AXIOS
              │
              │ POST
              ↓
        CORE BANKING API
              │
              │ response
              ↓
        creditAccount()
              │
              ↓
         LegResult
              │
              ↓
        Database persistence
              │
              ↓
       FINAL BUSINESS RESULT
              │
              ↓
         AZURE FUNCTION
              │
              │ HTTP response
              ↓
            FRONTEND