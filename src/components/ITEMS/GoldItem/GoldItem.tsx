import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getGoldItem } from "@/API/gold-item/gold-item.api"
import type { ModesID } from "@/entities/modes/types/modes.types"
import type { GoldPriceId, GoldSampleId } from "@/entities/ITEMS/gold-item/types/gold-item.types"
import InstallmentGold from "./InstallmentGold/InstallmentGold"
import SellGold from "./SellGold/SellGold"

interface IGoldItem {
    modesID: ModesID
}

export default function GoldItem({ modesID }: IGoldItem) {
    const [goldSampleId, setGoldSampleId] = useState<GoldSampleId>("")
    const [goldPriceId, setGoldPriceId] = useState<GoldPriceId>("")
    const { data: goldItems = [] } = useQuery({ queryKey: ["goldItem", modesID], queryFn: () => getGoldItem(modesID), enabled: !!modesID })

    useEffect(() => {
        setGoldSampleId("")
        setGoldPriceId("")
    }, [modesID])

    useEffect(() => {
        setGoldPriceId("")
    }, [goldSampleId])

    return (
        <div className="relative w-full py-2">
            { modesID === "installment" && <InstallmentGold
                datas={goldItems}
                goldSampleId={goldSampleId}
                goldPriceId={goldPriceId}
                setGoldSampleId={setGoldSampleId}
                setGoldPriceId={setGoldPriceId}
            /> }
            { modesID === "sell" && <SellGold 
                datas={goldItems}
                goldSampleId={goldSampleId}
                goldPriceId={goldPriceId}
                setGoldSampleId={setGoldSampleId}
                setGoldPriceId={setGoldPriceId}
            /> }
        </div>
    )
}