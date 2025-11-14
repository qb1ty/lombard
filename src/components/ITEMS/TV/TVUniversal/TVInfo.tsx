import { useState } from "react"
import { getTVItem } from "@/API/TV-item/TV-item.api"
import { useQuery } from "@tanstack/react-query"
import { TV_DEFECTS_CHECKED, TV_EQUIPMENT_CHECKED, TV_DEFECTS_TITLE, TV_EQUIPMENT_TITLE } from "@/entities/ITEMS/TV-item/constants/TV-item.constant"
import type { TVDefects, TVEquipment, TVTypes } from "@/entities/ITEMS/TV-item/types/TV-item.types"
import { Result, Section } from "@/components/Universal"

interface ITVInfo {
    tvID: string
    isSell?: boolean
}

export default function TVInfo({ tvID, isSell = false }: ITVInfo) {
    const [totalEquipment, setTotalEquipment] = useState<number>(0)
    const [totalDefects, setTotalDefects] = useState<number>(0)

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof TVEquipment, boolean>>(TV_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof TVDefects, boolean>>(TV_DEFECTS_CHECKED)

     const { data: tvItem = [], isEnabled } = useQuery({
        queryKey: ["tvItem", tvID],
        queryFn: () => getTVItem(tvID),
        enabled: !!tvID
    })

    const toggleChecked = <T extends object>(
        key: keyof T,
        setState: React.Dispatch<React.SetStateAction<Record<keyof T, boolean>>>
    ): void => {
        setState(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Section<TVEquipment, TVTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={tvItem}
                field="equipment"
                priceKey="price"
                titleObj={TV_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setTotal={setTotalEquipment}
                toggleChecked={toggleChecked}
            />

            <Section<TVDefects, TVTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={tvItem}
                field="defects"
                priceKey="price"
                titleObj={TV_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setTotal={setTotalDefects}
                toggleChecked={toggleChecked}
            />

            <Result<TVTypes>
                datas={tvItem}
                fieldKey="price"
                idKey="id"
                isEnabled={isEnabled}
                totalEquipment={totalEquipment}
                totalDefects={totalDefects}
                countGameDiscs={0}
                isSell={isSell}
            />
        </div>
    )
}