import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getProcessorItem } from "@/API/processor-item/processor-item.api"
import { PROCESSOR_DEFECTS_CHECKED, PROCESSOR_DEFECTS_TITLE, PROCESSOR_EQUIPMENT_CHECKED, PROCESSOR_EQUIPMENT_TITLE } from "@/entities/ITEMS/processor-item/constants/processor-item.constant"
import type { ProcessorDefects, ProcessorEquipment, ProcessorTypes } from "@/entities/ITEMS/processor-item/types/processor-item.types"
import { Group, Result, Section } from "@/components/Universal"

interface IProcessorInfo {
    processorID: string
    isSell?: boolean
}

export default function ProcessorInfo({ processorID, isSell = false }: IProcessorInfo) {
    const [equipmentFixed, setEquipmentFixed] = useState<number[]>([])
    const [defectsFixed, setDefectsFixed] = useState<number[]>([])
    const [brandFixed, setBrandFixed] = useState<number>(0)
    const [gamingLaptopFixed, setGamingLaptopFixed] = useState<number>(0)
    const [memoryFixed, setMemoryFixed] = useState<number>(0)
    const [additionalMemoryFixed, setAdditionalMemoryFixed] = useState<number>(0)
    const [RAMFixed, setRAMFixed] = useState<number>(0)
    const [videoCardFixed, setVideoCardFixed] = useState<number>(0)
    const [additionalVideoCardFixed, setAdditionalVideoCardFixed] = useState<number>(0)
    const [coreFixed, setCoreFixed] = useState<number>(0)

    const [equipmentPercents, setEquipmentPercents] = useState<number[]>([])
    const [defectsPercents, setDefectsPercents] = useState<number[]>([])
    const [brandPercents, setBrandPercents] = useState<number>(0)
    const [gamingLaptopPercents, setGamingLaptopPercents] = useState<number>(0)
    const [memoryPercents, setMemoryPercents] = useState<number>(0)
    const [additionalMemoryPercents, setAdditionalMemoryPercents] = useState<number>(0)
    const [RAMPercents, setRAMPercents] = useState<number>(0)
    const [videoCardPercents, setVideoCardPercents] = useState<number>(0)
    const [additionalVideoCardPercents, setAdditionalVideoCardPercents] = useState<number>(0)
    const [corePercents, setCorePercents] = useState<number>(0)

    const [allFixed, setAllFixed] = useState<number[]>([])
    const [allPercents, setAllPercents] = useState<number[]>([])

    const [equipmentChecked, setEquipmentChecked] =
        useState<Record<keyof ProcessorEquipment, boolean>>(PROCESSOR_EQUIPMENT_CHECKED)

    const [defectsChecked, setDefectsChecked] =
        useState<Record<keyof ProcessorDefects, boolean>>(PROCESSOR_DEFECTS_CHECKED)

    const { data: processorItem = [], isEnabled } = useQuery({
        queryKey: ["getProcessorItem", processorID],
        queryFn: () => getProcessorItem(processorID),
        enabled: !!processorID
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

    const handleGroupChange = (
        value: number,
        setPercent: React.Dispatch<React.SetStateAction<number>>,
        setFixed: React.Dispatch<React.SetStateAction<number>>
    ) => {
        if (value >= 0 && value < 2) {
            setPercent(value)
        }

        if (value <= 0 || value >= 2) {
            setFixed(value)
        }
    }


    useEffect(() => {
        setAllFixed([
            ...equipmentFixed,
            ...defectsFixed,
            brandFixed,
            gamingLaptopFixed,
            memoryFixed,
            additionalMemoryFixed,
            RAMFixed,
            videoCardFixed,
            additionalVideoCardFixed,
            coreFixed
        ])
    }, [
        equipmentFixed,
        defectsFixed,
        brandFixed,
        gamingLaptopFixed,
        memoryFixed,
        additionalMemoryFixed,
        RAMFixed,
        videoCardFixed,
        additionalVideoCardFixed,
        coreFixed
    ])

    useEffect(() => {
        setAllPercents([
            ...equipmentPercents,
            ...defectsPercents,
            brandPercents,
            gamingLaptopPercents,
            memoryPercents,
            additionalMemoryPercents,
            RAMPercents,
            videoCardPercents,
            additionalVideoCardPercents,
            corePercents
        ])
    }, [
        equipmentPercents,
        defectsPercents,
        brandPercents,
        gamingLaptopPercents,
        memoryPercents,
        additionalMemoryPercents,
        RAMPercents,
        videoCardPercents,
        additionalVideoCardPercents,
        corePercents
    ])

    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="brand"
                idKey="id"
                title="Марка"
                keyRadioValue="PROCESSOR-GROUP-BRAND"
                onChange={(selected) => handleGroupChange(+selected, setBrandPercents, setBrandFixed)}
            />

            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="gamingLaptop"
                idKey="id"
                title="Игровой ноутбку?"
                keyRadioValue="PROCESSOR-GROUP-GAMING-LAPTOP"
                onChange={(selected) => handleGroupChange(+selected, setGamingLaptopPercents, setGamingLaptopFixed)}
            />

            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="memory"
                idKey="id"
                title="Память"
                keyRadioValue="PROCESSOR-GROUP-MEMORY"
                onChange={(selected) => handleGroupChange(+selected, setMemoryPercents, setMemoryFixed)}
            />

            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="additionalMemory"
                idKey="id"
                title="Дополнительная память"
                keyRadioValue="PROCESSOR-GROUP-ADDITIONAL-MEMORY"
                onChange={(selected) => handleGroupChange(+selected, setAdditionalMemoryPercents, setAdditionalMemoryFixed)}
            />

            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="RAM"
                idKey="id"
                title="ОЗУ"
                keyRadioValue="PROCESSOR-GROUP-RAM"
                onChange={(selected) => handleGroupChange(+selected, setRAMPercents, setRAMFixed)}
            />

            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="videoCard"
                idKey="id"
                title="Видеокарта"
                keyRadioValue="PROCESSOR-GROUP-VIDEO-CARD"
                onChange={(selected) => handleGroupChange(+selected, setVideoCardPercents, setVideoCardFixed)}
            />

            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="additionalVideoCard"
                idKey="id"
                title="Дополнительная видеокарта"
                keyRadioValue="PROCESSOR-GROUP-ADDITIONAL-VIDEO-CARD"
                onChange={(selected) => handleGroupChange(+selected, setAdditionalVideoCardPercents, setAdditionalVideoCardFixed)}
            />

            <Group<ProcessorTypes>
                datas={processorItem}
                sectionKey="core"
                idKey="id"
                title="Ядро"
                keyRadioValue="PROCESSOR-GROUP-CORE"
                onChange={(selected) => handleGroupChange(+selected, setCorePercents, setCoreFixed)}
            />

            <Section<ProcessorEquipment, ProcessorTypes>
                title="Комплектация"
                isEnabled={isEnabled}
                datas={processorItem}
                field="equipment"
                titleObj={PROCESSOR_EQUIPMENT_TITLE}
                checkedObj={equipmentChecked}
                setChecked={setEquipmentChecked}
                setFixed={setEquipmentFixed}
                setPrecents={setEquipmentPercents}
                toggleChecked={toggleChecked}
            />

            <Section<ProcessorDefects, ProcessorTypes>
                title="Дефекты"
                isEnabled={isEnabled}
                datas={processorItem}
                field="defects"
                titleObj={PROCESSOR_DEFECTS_TITLE}
                checkedObj={defectsChecked}
                setChecked={setDefectsChecked}
                setFixed={setDefectsFixed}
                setPrecents={setDefectsPercents}
                toggleChecked={toggleChecked}
            />

            <Result<ProcessorTypes>
                datas={processorItem}
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