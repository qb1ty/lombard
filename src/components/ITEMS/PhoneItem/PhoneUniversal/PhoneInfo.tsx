import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getPhoneItem } from "@/API/phone-item/phone-item.api"
import { PHONE_DEFECTS_CHECKED, PHONE_DEFECTS_TITLE, PHONE_EQUIPMENT_CHECKED, PHONE_EQUIPMENT_TITLE } from "@/entities/ITEMS/phone-item/constants/phone-item.constants"
import type { PhoneDefects, PhoneEquipment, PhoneTypes } from "@/entities/ITEMS/phone-item/types/phone-item.types"
import { toggleChecked } from "@/entities/universal/utility/universal.utils"
import { Result, Section } from "@/components/Universal"

interface IPhoneInfo {
    phoneID: string
    isSell?: boolean
}

export default function PhoneInfo({ phoneID, isSell = false }: IPhoneInfo) {
    const [equipmentFixed, setEquipmentFixed] = useState<number[]>([])
    const [defectsFixed, setDefectsFixed] = useState<number[]>([])
    const [equipmentPercents, setEquipmentPercents] = useState<number[]>([])
    const [defectsPercents, setDefectsPercents] = useState<number[]>([])



    const [allFixed, setAllFixed] = useState<number[]>([])
    const [allPercents, setAllPercents] = useState<number[]>([])

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof PhoneEquipment, boolean>>(PHONE_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof PhoneDefects, boolean>>(PHONE_DEFECTS_CHECKED)

    const { data: phoneItem = [], isEnabled } = useQuery({
        queryKey: ["getPhoneItem", phoneID],
        queryFn: () => getPhoneItem(phoneID),
        enabled: !! phoneID
    })



    useEffect(() => {
        setAllFixed([
            ...equipmentFixed,
            ...defectsFixed,
        ])
    }, [equipmentFixed, defectsFixed])

    useEffect(() => {
        setAllPercents([
            ...equipmentPercents,
            ...defectsPercents,
        ])
    }, [equipmentPercents, defectsPercents])

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Section<PhoneEquipment, PhoneTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={phoneItem}
                field="equipment"
                titleObj={PHONE_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setFixed={setEquipmentFixed}
                setPrecents={setEquipmentPercents}
                toggleChecked={toggleChecked}
            />

            <Section<PhoneDefects, PhoneTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={phoneItem}
                field="defects"
                titleObj={PHONE_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setFixed={setDefectsFixed}
                setPrecents={setDefectsPercents}
                toggleChecked={toggleChecked}
            />

            <Result<PhoneTypes>
                datas={phoneItem}
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