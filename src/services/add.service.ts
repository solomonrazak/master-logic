interface AddSum {
    firstNumber: number;
    secondNumber: number;
}

export const addService = (num: AddSum): number => {
    const output = num.firstNumber + num.secondNumber   ;
    return output;
}