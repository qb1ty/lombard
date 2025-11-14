import axios from "axios";
import type { PlayStationTypes } from "@/entities/ITEMS/playstation-item/types/playstation-item.types";
import type { SubNames } from "@/entities/subcategories/types/subcategories.types";

export const getPlayStationItems = async (subName: SubNames) => {
    try {
        const response = await axios.get<PlayStationTypes[]>(`https://28f0e5dd05d79217.mokky.dev/playstation-items?subName=${subName}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса информации о приставках")
    }
}

export const getPlayStationItem = async (id: string) => {
    try {
        const response = await axios.get<PlayStationTypes[]>(`https://28f0e5dd05d79217.mokky.dev/playstation-items?id=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса информации о присатвке")
    }
}