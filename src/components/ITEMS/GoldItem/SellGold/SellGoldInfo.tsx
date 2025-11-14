import { useQuery } from "@tanstack/react-query"
import { getGoldItemInfo } from "@/API/gold-item/gold-item.api"
import type { GoldItemInfoTypes, GoldPriceId, GoldSampleId } from "@/entities/ITEMS/gold-item/types/gold-item.types"
import { Title } from "@/components/Title"
import { Selector } from "@/components/Form"

interface ISellGoldInfo {
    goldSampleId: GoldSampleId
    setDatasId: React.Dispatch<React.SetStateAction<GoldPriceId>>
}

export default function SellGoldInfo({ goldSampleId, setDatasId }: ISellGoldInfo) {
    const { data: goldItemInfo = [] } = useQuery({
        queryKey: ["goldInstallmentInfo", goldSampleId],
        queryFn: () => getGoldItemInfo(goldSampleId),
        enabled: !!goldSampleId
    })

    return (
        <div className="w-full py-2">
            <Title className="text-black text-base pb-1" title="Выберите пробу" />
            <Selector<GoldItemInfoTypes>
                datas={goldItemInfo}
                keyIdStr="SELL-GOLD-INFO"
                idKey="id"
                valueKey="priceId"
                labelKey="sample"
                label="Выберите пробу"
                setDatas={setDatasId as any}
            />
        </div>
    )
}