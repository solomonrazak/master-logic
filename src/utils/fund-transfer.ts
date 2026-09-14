import axios from 'axios';
import {PaymentDetails} from '../helpers/paymentDetails';

async function GetAuthorizationString(sourceAccount: string) {
    const { data } = await axios({
        url: "https://api.myumbbank.com/corebanking/v1/createauthorization",
        method: "POST",
        data: {
            accountNumber: sourceAccount
        },
        headers: {
            "Ocp-Apim-Subscription-Key": String(process.env.COREBANKING_SUBSCRIPTION),
        }
    })

   return data.authorizationString;
}

interface CreditAccount {
  sourceAccount: string;
  destinationAccount: string;
  amount: number;
  narration: string;
  reference: string;
}

export async function CreditAccount (input: CreditAccount){
    const authorizationString = await GetAuthorizationString(input.sourceAccount);

    const { data } = await axios({
        url: "https://api.myumbbank.com/corebanking/v1/creditaccount",
        method: "POST",
        headers: { "Ocp-Apim-Subscription-Key": process.env.COREBANKING_SUBSCRIPTION },
       
          data: {
          creditAccount: input.destinationAccount,
          RrNumber: input.reference,
          paymentDetails: "eb.bill.payments",
          paymentDetailsNew: PaymentDetails(input.narration).slice(0, 2),
          amount: Number(input.amount),
          serviceType: "FundsTransfer",
          authorizationString,
          isImmediate: true,
          ftType: "NORMAL",
        },

        
    })

    return data;
}