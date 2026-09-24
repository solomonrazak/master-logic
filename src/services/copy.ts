import {getCustomer} from './conditions';

const number = [2,34,5,6]

const numbs = [...number, 7,8,9]
console.log(numbs)

const customer = await getCustomer();
console.log(customer)
