import axios from "axios"
import type { Category } from "@/entities/categories/types/categories.types"

export const getCategories = async () => {
    try {
        const response = await axios.get<Category[]>("https://28f0e5dd05d79217.mokky.dev/categories")
        return response.data
    } catch (err) {
        console.log(err, "Ошибка при запросе категориев")
    }
}