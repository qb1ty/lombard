import { useQuery } from "@tanstack/react-query"
import { getCategories } from "@/API/categories/categories.api"
import type { Category } from "@/entities/categories/types/categories.types"
import { Selector } from "@/components/Form"

interface ICategories {
    setDataId:  React.Dispatch<React.SetStateAction<string>>
}

export default function Categories({ setDataId }: ICategories) {
    const { data: categories = [] } = useQuery({ 
        queryKey: ["categories"],
        queryFn: getCategories
    })

    return (
        <div className="w-full py-2">
            <Selector<Category>
                datas={categories}
                keyIdStr="CATEGORIES"
                idKey="id"
                valueKey="categoryId"
                labelKey="ru_name"
                label="Выбери категорию"
                setDatas={setDataId}
            />
        </div>
    )
}