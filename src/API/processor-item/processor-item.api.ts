import axios from "axios"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import type { ProcessorTypes } from "@/entities/ITEMS/processor-item/types/processor-item.types"

export const getProcessorItems = async (subName: SubNames) => {
    try {
        const response = await axios.get<ProcessorTypes[]>(`https://28f0e5dd05d79217.mokky.dev/processor-items?subName=${subName}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса процессоров")
    }
}

export const getProcessorItem = async (id: string) => {
    try {
        const response = await axios.get<ProcessorTypes[]>(`https://28f0e5dd05d79217.mokky.dev/processor-items?id=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка запроса процессора")
    }
}