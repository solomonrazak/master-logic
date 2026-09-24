

function TotalCost(price: number, items: number): number {

    if ( items < 10){
        console.log("the items are too small");
        return price * items;
    }

    return price * items;

};

export const getCustomer = async () => {
   return {name : "Solomon"};

}








const total = TotalCost(100, 20);
console.log(total);