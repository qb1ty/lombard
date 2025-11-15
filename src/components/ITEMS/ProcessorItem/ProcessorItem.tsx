import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getProcessorItems } from "@/API/processor-item/processor-item.api"
import type { ModesID } from "@/entities/modes/types/modes.types"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import ProcessorInstallment from "./ProcessorInstallment/ProcessorInstallment"
import ProcessorSell from "./ProcessorSell/ProcessorSell"

interface IProcessorItem {
    subName: SubNames
    modesID: ModesID
}

export default function ProcessorItem({ subName, modesID }: IProcessorItem) {
    const [processorID, setProcessorID] = useState<string>("")
    const { data: processorItems = [] } = useQuery({
        queryKey: ["getProcessorItems", subName],
        queryFn: () => getProcessorItems(subName),
        enabled: !!subName
    })

    useEffect(() => {
        setProcessorID("")
    }, [modesID, subName])

    return (
        <div className="relative w-full py-2">
            { modesID === "installment" && <ProcessorInstallment
                processorID={processorID}
                datas={processorItems}
                setProcessorID={setProcessorID}
            /> }
            { modesID === "sell" && <ProcessorSell
                processorID={processorID}
                datas={processorItems}
                setProcessorID={setProcessorID}
            /> }
        </div>
    )
}