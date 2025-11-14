import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getHeadphoneItem } from "@/API/headphone-item/headphone-item.api"
import { HEADPHONE_DEFECTS_CHECKED, HEADPHONE_EQUIPMENT_CHECKED, HEADPHONE_EQUIPMENT_TITLE, HEADPHONE_DEFECTS_TITLE } from "@/entities/ITEMS/headphone-item/constants/headphone-item.constant"
import type { HeadphoneDefects, HeadphoneEquipment, HeadphoneTypes } from "@/entities/ITEMS/headphone-item/types/headphone-item.types"
import { Section, Result } from "@/components/Universal"

interface IHeadphoneInfo {
    headphoneID: string
    isSell?: boolean
}

export default function HeadphoneInfo({ headphoneID, isSell = false }: IHeadphoneInfo) {
    const [totalEquipment, setTotalEquipment] = useState<number>(0)
    const [totalDefects, setTotalDefects] = useState<number>(0)

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof HeadphoneEquipment, boolean>>(HEADPHONE_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof HeadphoneDefects, boolean>>(HEADPHONE_DEFECTS_CHECKED)

     const { data: headphoneItem = [], isEnabled } = useQuery({
        queryKey: ["headphoneItem", headphoneID],
        queryFn: () => getHeadphoneItem(headphoneID),
        enabled: !!headphoneID
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
            <Section<HeadphoneEquipment, HeadphoneTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={headphoneItem}
                field="equipment"
                priceKey="price"
                titleObj={HEADPHONE_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setTotal={setTotalEquipment}
                toggleChecked={toggleChecked}
            />

            <Section<HeadphoneDefects, HeadphoneTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={headphoneItem}
                field="defects"
                priceKey="price"
                titleObj={HEADPHONE_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setTotal={setTotalDefects}
                toggleChecked={toggleChecked}
            />

            <Result<HeadphoneTypes>
                datas={headphoneItem}
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