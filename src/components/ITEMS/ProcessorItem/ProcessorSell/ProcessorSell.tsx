import { Selector } from "@/components/Form"
import type { ProcessorTypes } from "@/entities/ITEMS/processor-item/types/processor-item.types"
import ProcessorInfo from "../ProcessorUniversal/ProcessorInfo"

interface IProcessorSell {
    processorID: string
    datas: ProcessorTypes[]
    setProcessorID: React.Dispatch<React.SetStateAction<string>>
}

export default function ProcessorSell({ processorID, datas, setProcessorID }: IProcessorSell) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="w-full gap-2">
                <Selector<ProcessorTypes>
                    datas={datas}
                    keyIdStr="PROCESSOR-SELL"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setProcessorID}
                />
            </div>

            <ProcessorInfo processorID={processorID} isSell />
        </div>
    )
}