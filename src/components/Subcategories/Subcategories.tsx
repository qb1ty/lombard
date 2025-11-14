
import { useQuery } from "@tanstack/react-query"
import { getSubcategories } from "@/API/subcategories/subcategories.api"
import type { Subcategories, SubNames } from "@/entities/subcategories/types/subcategories.types"
import { Selector } from "@/components/Form"
import { useEffect } from "react"

interface ISubcategories {
    categoryId: string
    resetSubcategories: () => void
    setDataId:  React.Dispatch<React.SetStateAction<SubNames>>
}

export default function Subcategories({ categoryId, resetSubcategories, setDataId }: ISubcategories) {
    const { data: subcategories = [] } = useQuery({ 
        queryKey: ["subcategories", categoryId],
        queryFn: () => getSubcategories(categoryId),
        enabled: !!categoryId
    })

    useEffect(() => {
        resetSubcategories()
    }, [categoryId])

    return (
        <div className="w-full py-2">
            <Selector<Subcategories>
                datas={subcategories}
                keyIdStr="SUBCATEGORIES"
                idKey="id"
                valueKey="subName"
                labelKey="name"
                label="Выбери подкатегорию"
                setDatas={setDataId as any}
            />
        </div>
    )
}