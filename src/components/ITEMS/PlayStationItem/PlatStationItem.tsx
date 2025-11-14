import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getPlayStationItems } from "@/API/playstation-item/playstation-item.api"
import type { ModesID } from "@/entities/modes/types/modes.types"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import PlayStationInstallment from "./PlayStationInstallment/PlayStationInstallment"
import PlayStationSell from "./PlayStationSell/PlayStationSell"

interface IPlayStationItem {
    subName: SubNames
    modesID: ModesID
}

export default function PlayStationItem({ subName, modesID }: IPlayStationItem) {
    const [playStationID, setPlayStationID] = useState<string>("")
    const { data: playStationItems = [] } = useQuery({
        queryKey: ["playStationItems", subName],
        queryFn: () => getPlayStationItems(subName),
        enabled: !!subName
    })

    useEffect(() => {
        setPlayStationID("")
    }, [modesID, subName])

    return (
        <div className="relative w-full py-2">
            { modesID === "installment" && <PlayStationInstallment datas={playStationItems} playStationID={playStationID} setPlayStationID={setPlayStationID} /> }
            { modesID === "sell" && <PlayStationSell datas={playStationItems} playStationID={playStationID} setPlayStationID={setPlayStationID} /> }
        </div>
    )
}