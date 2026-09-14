export function PaymentDetails(paymentDetails: string): Array<Record<string, string>> {
  const paymentDetailSet = new Set<any>();

  for (let i = 0; i < paymentDetails.length; i += 34) {
    paymentDetailSet.add({ paymentDetail: paymentDetails.slice(i, 34 + i) });
  }

  return Array.from(paymentDetailSet);
}