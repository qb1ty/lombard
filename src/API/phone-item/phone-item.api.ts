import axios from "axios"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import type { PhoneTypes } from "@/entities/ITEMS/phone-item/types/phone-item.types"

export const getPhoneItems = async (subName: SubNames) => {
    try {
        const response = await axios.get<PhoneTypes[]>(`https://28f0e5dd05d79217.mokky.dev/phone-items?subName=${subName}`)
        return response.data
    } catch (err) {
        console.log(err, 'Ошибка запроса информаций о телефонах')
    }
}

export const getPhoneItem = async (id :string) => {
    try {
        const response = await axios.get<PhoneTypes[]>(`https://28f0e5dd05d79217.mokky.dev/phone-items?id=${id}`)
        return response.data
    } catch (err) {
        console.log(err, 'Ошибка запросе информаций о телефонеt')
    }
}

