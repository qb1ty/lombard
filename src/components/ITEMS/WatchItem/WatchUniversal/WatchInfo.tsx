import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getWatchItem } from "@/API/watch-item/watch-item.api"
import { WATCH_EQUIPMENT_TITLE, WATCH_DEFECTS_CHECKED, WATCH_EQUIPMENT_CHECKED, WATCH_DEFECTS_TITLE } from "@/entities/ITEMS/watch-item/constants/watch-item.constant"
import type { WatchDefects, WatchEquipment, WatchTypes } from "@/entities/ITEMS/watch-item/types/watch-item.types"
import { Result, Section } from "@/components/Universal"

interface IWatchInfo {
    watchID: string
    isSell?: boolean
}

export default function WatchInfo({ watchID, isSell = false }: IWatchInfo) {
    const [totalEquipment, setTotalEquipment] = useState<number>(0)
    const [totalDefects, setTotalDefects] = useState<number>(0)

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof WatchEquipment, boolean>>(WATCH_EQUIPMENT_CHECKED)
    
    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof WatchDefects, boolean>>(WATCH_DEFECTS_CHECKED)

    const { data: watchItem = [], isEnabled } = useQuery({
        queryKey: ["getWatchItem", watchID],
        queryFn: () => getWatchItem(watchID),
        enabled: !!watchID
    })

    const toggleChecked = <T extends object>(
        key: keyof T,
        setState: React.Dispatch<React.SetStateAction<Record<keyof T, boolean>>>
    ) => {
        setState(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Section<WatchEquipment, WatchTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={watchItem}
                field="equipment"
                priceKey="price"
                titleObj={WATCH_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setTotal={setTotalEquipment}
                toggleChecked={toggleChecked}    
            />

            <Section<WatchDefects, WatchTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={watchItem}
                field="defects"
                priceKey="price"
                titleObj={WATCH_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setTotal={setTotalDefects}
                toggleChecked={toggleChecked}    
            />

            <Result<WatchTypes>
                datas={watchItem}
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