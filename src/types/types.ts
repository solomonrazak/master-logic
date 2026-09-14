export interface NicResponse<T>{
    success: boolean;
    data: T;
    message?: string;
}

export interface StickerResponse{
    transactionReference: string;
    companyName: string;
    amountPaid: number | string | null;
    quantity: number;
    paymentMode: string;
    requestStatus: string;
    cost: number;
    NIC: number;
    BROWNCARD: number;
} 