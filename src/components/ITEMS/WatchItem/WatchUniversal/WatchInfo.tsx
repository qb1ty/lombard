import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getWatchItem } from "@/API/watch-item/watch-item.api"
import { WATCH_EQUIPMENT_TITLE, WATCH_DEFECTS_CHECKED, WATCH_EQUIPMENT_CHECKED, WATCH_DEFECTS_TITLE } from "@/entities/ITEMS/watch-item/constants/watch-item.constant"
import type { WatchDefects, WatchEquipment, WatchTypes } from "@/entities/ITEMS/watch-item/types/watch-item.types"
import { toggleChecked } from "@/entities/universal/constants/utils/universal.utils"
import { Result, Section } from "@/components/Universal"

interface IWatchInfo {
    watchID: string
    isSell?: boolean
}

export default function WatchInfo({ watchID, isSell = false }: IWatchInfo) {
    const [equipmentFixed, setEquipmentFixed] = useState<number[]>([])
    const [defectsFixed, setDefectsFixed] = useState<number[]>([])
    const [equipmentPercents, setEquipmentPercents] = useState<number[]>([])
    const [defectsPercents, setDefectsPercents] = useState<number[]>([])

    const [allFixed, setAllFixed] = useState<number[]>([])
    const [allPercents, setAllPercents] = useState<number[]>([])

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof WatchEquipment, boolean>>(WATCH_EQUIPMENT_CHECKED)
    
    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof WatchDefects, boolean>>(WATCH_DEFECTS_CHECKED)

    const { data: watchItem = [], isEnabled } = useQuery({
        queryKey: ["getWatchItem", watchID],
        queryFn: () => getWatchItem(watchID),
        enabled: !!watchID
    })
    
    useEffect(() => {
        setAllFixed([...equipmentFixed, ...defectsFixed])
    }, [equipmentFixed, defectsFixed])

    useEffect(() => {
        setAllPercents([...equipmentPercents, ...defectsPercents])
    }, [equipmentPercents, defectsPercents])

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Section<WatchEquipment, WatchTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={watchItem}
                field="equipment"
                titleObj={WATCH_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setFixed={setEquipmentFixed}
                setPrecents={setEquipmentPercents}
                toggleChecked={toggleChecked}    
            />

            <Section<WatchDefects, WatchTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={watchItem}
                field="defects"
                titleObj={WATCH_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setFixed={setDefectsFixed}
                setPrecents={setDefectsPercents}
                toggleChecked={toggleChecked}    
            />

            <Result<WatchTypes>
                datas={watchItem}
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