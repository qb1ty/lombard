import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getPlayStationItem } from "@/API/playstation-item/playstation-item.api"
import { PLAYSTATION_DEFECTS_TITLE, PLAYSTATION_EQUIPMENT_TITLE, PLAYSTATION_EQUIPMENT_CHECKED, PLAYSTATION_DEFECTS_CHECKED } from "@/entities/ITEMS/playstation-item/constants/playstation-item.constant"
import type { PlayStationDefects, PlayStationEquipment, PlayStationTypes } from "@/entities/ITEMS/playstation-item/types/playstation-item.types"
import { Section, Result } from "@/components/Universal"
import { NumberInput } from "@/components/Form/Input"

interface IPlayStationInfo {
    playStationID: string
    isSell?: boolean
}

export default function PlayStationInfo({ playStationID, isSell = false }: IPlayStationInfo) {
    const [countGameDiscs, setCountGameDiscs] = useState<number>(0)
    const [totalEquipment, setTotalEquipment] = useState<number>(0)
    const [totalDefects, setTotalDefects] = useState<number>(0)

    const [equipmentChecked, setEquipmentChecked] = 
        useState<Record<keyof PlayStationEquipment, boolean>>(PLAYSTATION_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof PlayStationDefects, boolean>>(PLAYSTATION_DEFECTS_CHECKED)

    const { data: playStationItem = [], isEnabled } = useQuery({
        queryKey: ["playStationItem", playStationID],
        queryFn: () => getPlayStationItem(playStationID),
        enabled: !!playStationID
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
            <NumberInput
                title="Оригинальный диск (VFC 3 / GTA 5 / FIFA 2020 / Mortal Combat 11)"
                plus="3000"
                placeholder="Введите количество дисков"
                min="0"
                max="100"
                isEnabled={isEnabled}
                value={countGameDiscs}
                changeValue={setCountGameDiscs}
            />

            <Section<PlayStationEquipment, PlayStationTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={playStationItem}
                field="equipment"
                priceKey="price"
                titleObj={PLAYSTATION_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setTotal={setTotalEquipment}
                toggleChecked={toggleChecked}
            />

            <Section<PlayStationDefects, PlayStationTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={playStationItem}
                field="defects"
                priceKey="price"
                titleObj={PLAYSTATION_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setTotal={setTotalDefects}
                toggleChecked={toggleChecked}
            />

            <Result<PlayStationTypes>
                datas={playStationItem}
                fieldKey="price"
                idKey="id"
                isEnabled={isEnabled}
                totalEquipment={totalEquipment}
                totalDefects={totalDefects}
                countGameDiscs={countGameDiscs}
                isSell={isSell}
            />
        </div>
    )
}