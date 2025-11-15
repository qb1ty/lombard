import { useEffect, useState } from "react"
import { getTVItem } from "@/API/TV-item/TV-item.api"
import { useQuery } from "@tanstack/react-query"
import { TV_DEFECTS_CHECKED, TV_EQUIPMENT_CHECKED, TV_DEFECTS_TITLE, TV_EQUIPMENT_TITLE } from "@/entities/ITEMS/TV-item/constants/TV-item.constant"
import type { TVDefects, TVEquipment, TVTypes } from "@/entities/ITEMS/TV-item/types/TV-item.types"
import { toggleChecked } from "@/entities/universal/utility/universal.utils"
import { Result, Section } from "@/components/Universal"

interface ITVInfo {
    tvID: string
    isSell?: boolean
}

export default function TVInfo({ tvID, isSell = false }: ITVInfo) {
    const [equipmentFixed, setEquipmentFixed] = useState<number[]>([])
    const [defectsFixed, setDefectsFixed] = useState<number[]>([])
    const [equipmentPercents, setEquipmentPercents] = useState<number[]>([])
    const [defectsPercents, setDefectsPercents] = useState<number[]>([])

    const [allFixed, setAllFixed] = useState<number[]>([])
    const [allPercents, setAllPercents] = useState<number[]>([])

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof TVEquipment, boolean>>(TV_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof TVDefects, boolean>>(TV_DEFECTS_CHECKED)

     const { data: tvItem = [], isEnabled } = useQuery({
        queryKey: ["tvItem", tvID],
        queryFn: () => getTVItem(tvID),
        enabled: !!tvID
    })

    useEffect(() => {
        setAllFixed([...equipmentFixed, ...defectsFixed])
    }, [equipmentFixed, defectsFixed])

    useEffect(() => {
        setAllPercents([...equipmentPercents, ...defectsPercents])
    }, [equipmentPercents, defectsPercents])

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Section<TVEquipment, TVTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={tvItem}
                field="equipment"
                titleObj={TV_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setFixed={setEquipmentFixed}
                setPrecents={setEquipmentPercents}
                toggleChecked={toggleChecked}
            />

            <Section<TVDefects, TVTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={tvItem}
                field="defects"
                titleObj={TV_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setFixed={setDefectsFixed}
                setPrecents={setDefectsPercents}
                toggleChecked={toggleChecked}
            />

            <Result<TVTypes>
                datas={tvItem}
                fieldKey="price"
                idKey="id"
                isEnabled={isEnabled}
                countGameDiscs={0}
                isSell={isSell}
                fixed={allFixed}
                precents={allPercents}
            />
        </div>
    )
}