import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getHeadphoneItem } from "@/API/headphone-item/headphone-item.api"
import { HEADPHONE_DEFECTS_CHECKED, HEADPHONE_EQUIPMENT_CHECKED, HEADPHONE_EQUIPMENT_TITLE, HEADPHONE_DEFECTS_TITLE } from "@/entities/ITEMS/headphone-item/constants/headphone-item.constant"
import type { HeadphoneDefects, HeadphoneEquipment, HeadphoneTypes } from "@/entities/ITEMS/headphone-item/types/headphone-item.types"
import { toggleChecked } from "@/entities/universal/utility/universal.utils"
import { Section, Result } from "@/components/Universal"

interface IHeadphoneInfo {
    headphoneID: string
    isSell?: boolean
}

export default function HeadphoneInfo({ headphoneID, isSell = false }: IHeadphoneInfo) {
    const [equipmentFixed, setEquipmentFixed] = useState<number[]>([])
    const [defectsFixed, setDefectsFixed] = useState<number[]>([])
    const [equipmentPercents, setEquipmentPercents] = useState<number[]>([])
    const [defectsPercents, setDefectsPercents] = useState<number[]>([])

    const [allFixed, setAllFixed] = useState<number[]>([])
    const [allPercents, setAllPercents] = useState<number[]>([])

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof HeadphoneEquipment, boolean>>(HEADPHONE_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof HeadphoneDefects, boolean>>(HEADPHONE_DEFECTS_CHECKED)

     const { data: headphoneItem = [], isEnabled } = useQuery({
        queryKey: ["headphoneItem", headphoneID],
        queryFn: () => getHeadphoneItem(headphoneID),
        enabled: !!headphoneID
    })


    useEffect(() => {
        setAllFixed([...equipmentFixed, ...defectsFixed])
    }, [equipmentFixed, defectsFixed])

    useEffect(() => {
        setAllPercents([...equipmentPercents, ...defectsPercents])
    }, [equipmentPercents, defectsPercents])

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Section<HeadphoneEquipment, HeadphoneTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={headphoneItem}
                field="equipment"
                titleObj={HEADPHONE_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setFixed={setEquipmentFixed}
                setPrecents={setEquipmentPercents}
                toggleChecked={toggleChecked}
            />

            <Section<HeadphoneDefects, HeadphoneTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={headphoneItem}
                field="defects"
                titleObj={HEADPHONE_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setFixed={setDefectsFixed}
                setPrecents={setDefectsPercents}
                toggleChecked={toggleChecked}
            />

            <Result<HeadphoneTypes>
                datas={headphoneItem}
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