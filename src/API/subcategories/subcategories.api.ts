import axios from "axios"
import type { Subcategories } from "@/entities/subcategories/types/subcategories.types"

export const getSubcategories = async (id: string) => {
    try {
        const response = await axios.get<Subcategories[]>(`https://28f0e5dd05d79217.mokky.dev/subcategories?categoryId=${id}`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка при запросе сабкатегориев")
    }
}