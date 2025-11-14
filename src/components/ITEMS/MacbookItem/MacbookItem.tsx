import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getMacbookItems } from "@/API/macbook-item/macbook-item.api"
import type { ModesID } from "@/entities/modes/types/modes.types"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import MacbookInstallment from "./MacbookInstallment/MacbookInstallment"
import MacbookSell from "./MacbookSell/MacbookSell"

interface IMacbookItem {
    subName: SubNames
    modesID: ModesID
}

export default function MacbookItem({ subName, modesID }: IMacbookItem) {
    const [macbookID, setMacbookID] = useState<string>("")
    const { data: macbookItems = [] } = useQuery({ queryKey: ["getMacbookItems", subName], queryFn: () => getMacbookItems(subName), enabled: !!subName })

    useEffect(() => {
        setMacbookID("")
    }, [subName, modesID])

    return (
        <div className="relative w-full py-2">
            { modesID === "installment" && <MacbookInstallment
                macbookID={macbookID}
                datas={macbookItems}
                setMacbookID={setMacbookID}
            /> }
            { modesID === "sell" && <MacbookSell
                macbookID={macbookID}
                datas={macbookItems}
                setMacbookID={setMacbookID}
            /> }
        </div>
    )
}