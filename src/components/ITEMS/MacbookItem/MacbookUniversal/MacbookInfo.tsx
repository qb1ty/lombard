import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getMacbookItem } from "@/API/macbook-item/macbook-item.api"
import { MACBOOK_DEFECTS_CHECKED, MACBOOK_DEFECTS_TITLE, MACBOOK_EQUIPMENT_CHECKED, MACBOOK_EQUIPMENT_TITLE } from "@/entities/ITEMS/macbook-item/constants/macbook-item.constant"
import type { MacbookDefects, MacbookEquipment, MacbookTypes } from "@/entities/ITEMS/macbook-item/types/macbook-item.types"
import { Group, Result, Section } from "@/components/Universal"

interface IMacbookInfo {
    macbookID: string
    isSell?: boolean
}

export default function MacbookInfo({ macbookID, isSell = false }: IMacbookInfo) {
    const [totalEquipment, setTotalEquipment] = useState<number>(0)
    const [totalDefects, setTotalDefects] = useState<number>(0)
    const [processorPrecent, setProcessorPrecent] = useState<number>(0)
    const [inchPrecent, setInchPrecent] = useState<number>(0)
    const [SSDPrecent, setSSDProcent] = useState<number>(0)
    const [RAMPrecent, setRAMPrecent] = useState<number>(0)
    const [precents, setPrecents] = useState<number[]>([])

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof MacbookEquipment, boolean>>(MACBOOK_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof MacbookDefects, boolean>>(MACBOOK_DEFECTS_CHECKED)

     const { data: macbookItem = [], isEnabled } = useQuery({
        queryKey: ["getMacbookItem", macbookID],
        queryFn: () => getMacbookItem(macbookID),
        enabled: !!macbookID
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

    useEffect(() => {
        setPrecents([processorPrecent, inchPrecent, SSDPrecent, RAMPrecent])
    }, [processorPrecent, inchPrecent, SSDPrecent, RAMPrecent])

    console.log(precents)

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="processors"
                idKey="id"
                title="Процессор"
                keyRadioValue="MACBOOK-GROUP-PROCESSORS"
                onChange={(selected) => setProcessorPrecent(+selected)}
            />

            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="inch"
                idKey="id"
                title="Дюйм"
                keyRadioValue="MACBOOK-GROUP-INCH"
                onChange={(selected) => setInchPrecent(+selected)}
            />

            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="SSD"
                idKey="id"
                title="SSD"
                keyRadioValue="MACBOOK-GROUP-SSD"
                onChange={(selected) => setSSDProcent(+selected)}
            />

            <Group<MacbookTypes>
                datas={macbookItem}
                sectionKey="RAM"
                idKey="id"
                title="ОЗУ"
                keyRadioValue="MACBOOK-GROUP-RAM"
                onChange={(selected) => setRAMPrecent(+selected)}
            />

            <Section<MacbookEquipment, MacbookTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={macbookItem}
                field="equipment"
                priceKey="price"
                titleObj={MACBOOK_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setTotal={setTotalEquipment}
                toggleChecked={toggleChecked}
            />

            <Section<MacbookDefects, MacbookTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={macbookItem}
                field="defects"
                priceKey="price"
                titleObj={MACBOOK_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setTotal={setTotalDefects}
                toggleChecked={toggleChecked}
            />

            <Result<MacbookTypes>
                datas={macbookItem}
                fieldKey="price"
                idKey="id"
                isEnabled={isEnabled}
                totalEquipment={totalEquipment}
                totalDefects={totalDefects}
                countGameDiscs={0}
                isSell={isSell}
                precents={precents}
            />
        </div>
    )
}