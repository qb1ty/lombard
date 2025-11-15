import type { ProcessorTypes } from "@/entities/ITEMS/processor-item/types/processor-item.types";
import { Selector } from "@/components/Form";
import ProcessorInfo from "../ProcessorUniversal/ProcessorInfo";

interface IProcessorInstallment {
    processorID: string
    datas: ProcessorTypes[]
    setProcessorID: React.Dispatch<React.SetStateAction<string>>
}

export default function ProcessorInstallment({ processorID, datas, setProcessorID }: IProcessorInstallment) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="w-full gap-2">
                <Selector<ProcessorTypes>
                    datas={datas}
                    keyIdStr="PROCESSOR-INSTALLMENT"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setProcessorID}
                />
            </div>

            <ProcessorInfo processorID={processorID} />
        </div>
    )
}