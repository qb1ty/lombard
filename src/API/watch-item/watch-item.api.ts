import axios from "axios"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import type { WatchTypes } from "@/entities/ITEMS/watch-item/types/watch-item.types"

export const getWatchItems = async (subName: SubNames) => {
    try {
        const response = await axios.get<WatchTypes[]>(`https://28f0e5dd05d79217.mokky.dev/watch-items?subName=${subName}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса часов")
    }
}

export const getWatchItem = async (id: string) => {
    try {
        const response = await axios.get<WatchTypes[]>(`https://28f0e5dd05d79217.mokky.dev/watch-items?id=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса часа")
    }
}