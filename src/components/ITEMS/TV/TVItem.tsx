import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getTVItems } from "@/API/TV-item/TV-item.api"
import type { ModesID } from "@/entities/modes/types/modes.types"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import TVInstallment from "./TVInstallment/TVInstallment"
import TVSell from "./TVSell/TVSell"

interface ITVItem {
    subName: SubNames
    modesID: ModesID
}

export default function TVItem({ subName, modesID }: ITVItem) {
    const [tvID, setTvID] = useState<string>("")
    const { data: tvItems = [] } = useQuery({ queryKey: ["getTVItems", subName], queryFn: () => getTVItems(subName), enabled: !!subName })

    useEffect(() => {
        setTvID("")
    }, [subName, modesID])

    return (
        <div className="relative w-full py-2">
            { modesID === "installment" && <TVInstallment
                tvID={tvID}
                datas={tvItems}
                setTvID={setTvID}
            /> }
            { modesID === "sell" && <TVSell
                tvID={tvID}
                datas={tvItems}
                setTvID={setTvID}
            /> }
        </div>
    )
}