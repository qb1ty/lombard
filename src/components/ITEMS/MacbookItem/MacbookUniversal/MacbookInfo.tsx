import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getMacbookItem } from "@/API/macbook-item/macbook-item.api"
import { MACBOOK_DEFECTS_CHECKED, MACBOOK_DEFECTS_TITLE, MACBOOK_EQUIPMENT_CHECKED, MACBOOK_EQUIPMENT_TITLE } from "@/entities/ITEMS/macbook-item/constants/macbook-item.constant"
import type { MacbookDefects, MacbookEquipment, MacbookTypes } from "@/entities/ITEMS/macbook-item/types/macbook-item.types"
import { toggleChecked } from "@/entities/universal/constants/utils/universal.utils"
import { Group, Result, Section } from "@/components/Universal"

interface IMacbookInfo {
    macbookID: string
    isSell?: boolean
}

export default function MacbookInfo({ macbookID, isSell = false }: IMacbookInfo) {
    const [equipmentFixed, setEquipmentFixed] = useState<number[]>([])
    const [defectsFixed, setDefectsFixed] = useState<number[]>([])
    const [processorFixed, setProcessorFixed] = useState<number>(0)
    const [inchFixed, setInchFixed] = useState<number>(0)
    const [SSDFixed, setSSDFixed] = useState<number>(0)
    const [RAMFixed, setRAMFixed] = useState<number>(0)

    const [equipmentPercents, setEquipmentPercents] = useState<number[]>([])
    const [defectsPercents, setDefectsPercents] = useState<number[]>([])
    const [processorPercents, setProcessorPercents] = useState<number>(0)
    const [inchPercents, setInchPercents] = useState<number>(0)
    const [SSDPercents, setSSDPercents] = useState<number>(0)
    const [RAMPercents, setRAMPercents] = useState<number>(0)


    const [allFixed, setAllFixed] = useState<number[]>([])
    const [allPercents, setAllPercents] = useState<number[]>([])

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof MacbookEquipment, boolean>>(MACBOOK_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof MacbookDefects, boolean>>(MACBOOK_DEFECTS_CHECKED)

    const { data: macbookItem = [], isEnabled } = useQuery({
        queryKey: ["getMacbookItem", macbookID],
        queryFn: () => getMacbookItem(macbookID),
        enabled: !!macbookID
    })

    const handleGroupChange = (
        value: number,
        setPercent: React.Dispatch<React.SetStateAction<number>>,
        setFixed: React.Dispatch<React.SetStateAction<number>>
    ) => {
        if (value > 0 && value < 2) {
            setPercent(value)
        } else {
            setFixed(value)
        }
    }

    useEffect(() => {
        setAllFixed([
            ...equipmentFixed,
            ...defectsFixed,
            processorFixed, inchFixed, SSDFixed, RAMFixed
        ])
    }, [equipmentFixed, defectsFixed, processorFixed, inchFixed, SSDFixed, RAMFixed])

    useEffect(() => {
        setAllPercents([
            ...equipmentPercents,
            ...defectsPercents,
            processorPercents, inchPercents, SSDPercents, RAMPercents
        ])
    }, [equipmentPercents, defectsPercents, processorPercents, inchPercents, SSDPercents, RAMPercents])

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="processors"
                idKey="id"
                title="Процессор"
                keyRadioValue="MACBOOK-GROUP-PROCESSORS"
                onChange={(selected) => handleGroupChange(+selected, setProcessorPercents, setProcessorFixed)}
            />

            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="inch"
                idKey="id"
                title="Дюйм"
                keyRadioValue="MACBOOK-GROUP-INCH"
                onChange={(selected) => handleGroupChange(+selected, setInchPercents, setInchFixed)}
            />

            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="SSD"
                idKey="id"
                title="SSD"
                keyRadioValue="MACBOOK-GROUP-SSD"
                onChange={(selected) => handleGroupChange(+selected, setSSDPercents, setSSDFixed)}
            />

            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="RAM"
                idKey="id"
                title="ОЗУ"
                keyRadioValue="MACBOOK-GROUP-RAM"
                onChange={(selected) => handleGroupChange(+selected, setRAMPercents, setRAMFixed)}
            />

            <Section<MacbookEquipment, MacbookTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={macbookItem}
                field="equipment"
                titleObj={MACBOOK_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setFixed={setEquipmentFixed}
                setPrecents={setEquipmentPercents}
                toggleChecked={toggleChecked}
            />

            <Section<MacbookDefects, MacbookTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={macbookItem}
                field="defects"
                titleObj={MACBOOK_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setFixed={setDefectsFixed}
                setPrecents={setDefectsPercents}
                toggleChecked={toggleChecked}
            />

            <Result<MacbookTypes>
                datas={macbookItem}
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