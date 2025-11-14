import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWatchItems } from "@/API/watch-item/watch-item.api";
import type { ModesID } from "@/entities/modes/types/modes.types";
import type { SubNames } from "@/entities/subcategories/types/subcategories.types";
import WatchInstallment from "./WatchInstallment/WatchInstallment";
import WatchSell from "./WatchSell/WatchSell";

interface IWatchItem {
    subName: SubNames
    modesID: ModesID
}

export default function WatchItem({ subName, modesID }: IWatchItem) {
    const [watchID, setWatchID] = useState<string>("")
    const { data: watchItems = [] } = useQuery({
        queryKey: ["getWatchItems", subName],
        queryFn: () => getWatchItems(subName),
        enabled: !!subName
    })

    useEffect(() => {
        setWatchID("")
    }, [subName, modesID])

    return (
        <div className="w-full py-2">
            { modesID === "installment" && <WatchInstallment watchID={watchID} datas={watchItems} setWatchID={setWatchID} /> }
            { modesID === "sell" && <WatchSell watchID={watchID} datas={watchItems} setWatchID={setWatchID} /> }
        </div>
    )
}