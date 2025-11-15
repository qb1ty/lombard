import axios from "axios"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import type { MacbookTypes } from "@/entities/ITEMS/macbook-item/types/macbook-item.types"

export const getMacbookItems = async (subName: SubNames) => {
    try {
        const response = await axios.get<MacbookTypes[]>(`https://28f0e5dd05d79217.mokky.dev/macbook-items?subName=${subName}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса Макбуков")
    }
}

export const getMacbookItem = async (id: string) => {
    try {
        const response = await axios.get<MacbookTypes[]>(`https://28f0e5dd05d79217.mokky.dev/macbook-items?id=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса Макбука")
    }
}