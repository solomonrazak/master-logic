import { apiClient } from "../utils/apiClient";
import { StickerResponse, NicResponse } from "../types/types";

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