import axios from "axios"
import type { HeadphoneTypes } from "@/entities/ITEMS/headphone-item/types/headphone-item.types"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"

export const getHeadphoneItems = async (subName: SubNames) => {
    try {
        const response = await axios.get<HeadphoneTypes[]>(`https://28f0e5dd05d79217.mokky.dev/headphone-items?subName=${subName}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса наушников")
    }
}

export const getHeadphoneItem = async (id: string) => {
    try {
        const response = await axios.get<HeadphoneTypes[]>(`https://28f0e5dd05d79217.mokky.dev/headphone-items?id=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса наушника")
    }
}