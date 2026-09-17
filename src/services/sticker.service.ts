import { apiClient } from "../utils/apiClient";
import { StickerResponse, NicResponse, ApproveStickerInput } from "../types/types";

export const searchSticker = async (transactionReference: string) => {
    try {
        const { data } = await apiClient.get<NicResponse<StickerResponse>>(
      `/sticker-requests/${transactionReference}/search`
    );

    return {
        ...data,
         response: {
            ...data.data, 
            cost: 2, 
            NIC: 1,
            BROWNCARD: 1
        }
         }
    }

    catch(error){
        console.log("Error searching for sticker:", error);

    }
}

export const processSticker  = async (input: ApproveStickerInput) => {
    try {

        const { data } = await apiClient.post<NicResponse<StickerResponse>>(
             `/sticker-requests/approve`,
             {data: input}
        );
        return data;

    }
    catch(error: any){
        console.log("Error processing sticker:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "An error occurred while processing the sticker.");

    }
}