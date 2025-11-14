import axios from "axios"
import type { Modes } from "@/entities/modes/types/modes.types"

export const getModes = async () => {
    try {
        const response = await axios.get<Modes[]>(`https://28f0e5dd05d79217.mokky.dev/modes`)
        return response.data
    } catch (err) {
        console.log(err, "Ошибка при запросе модов")
    }
}
