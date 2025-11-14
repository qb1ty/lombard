import axios from "axios"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import type { TVTypes } from "@/entities/ITEMS/TV-item/types/TV-item.types"

export const getTVItems = async (subName: SubNames) => {
    try {
        const response = await axios.get<TVTypes[]>(`https://28f0e5dd05d79217.mokky.dev/tv-items?subName=${subName}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка получения телевизров")
    }
}

export const getTVItem = async (id: string) => {
    try {
        const response = await axios.get<TVTypes[]>(`https://28f0e5dd05d79217.mokky.dev/tv-items?id=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка получения телевизра")
    }
}