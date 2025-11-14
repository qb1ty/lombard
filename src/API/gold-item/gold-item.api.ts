import axios from "axios"
import type { ModesID } from "@/entities/modes/types/modes.types"
import type { GoldItemInfoTypes, GoldItemResultTypes, GoldItemTypes, GoldPriceId, GoldSampleId } from "@/entities/ITEMS/gold-item/types/gold-item.types"

export const getGoldItem = async (id: ModesID) => {
    try {
        if (!id) return
        const response = await axios.get<GoldItemTypes[]>(`https://28f0e5dd05d79217.mokky.dev/gold-items?modeId=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка при запросе золота")
    }
}

export const getGoldItemInfo = async (id: GoldSampleId) => {
    try {
        if (!id) return
        const response = await axios.get<GoldItemInfoTypes[]>(`https://28f0e5dd05d79217.mokky.dev/gold-items-info?sampleId=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка при запросе информации о золото")
    }
}

export const getGoldItemResult = async (id: GoldPriceId) => {
    try {
        if (!id) return
        const response = await axios.get<GoldItemResultTypes[]>(`https://28f0e5dd05d79217.mokky.dev/gold-items-info-price?priceId=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка при запросе информации о итогов")
    }
}