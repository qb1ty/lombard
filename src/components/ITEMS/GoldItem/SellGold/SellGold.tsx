import type { GoldItemTypes, GoldPriceId, GoldSampleId } from "@/entities/ITEMS/gold-item/types/gold-item.types";
import { Selector } from "@/components/Form"
import SellGoldInfo from "./SellGoldInfo";
import SellGoldResult from "./SellGoldResult";

interface ISellGold {
    datas: GoldItemTypes[]
    goldSampleId: GoldSampleId
    goldPriceId: GoldPriceId
    setGoldSampleId: React.Dispatch<React.SetStateAction<GoldSampleId>>
    setGoldPriceId: React.Dispatch<React.SetStateAction<GoldPriceId>>
}

export default function SellGold({ datas, goldSampleId, goldPriceId, setGoldSampleId, setGoldPriceId }: ISellGold) {
    return (
        <div className="flex flex-col items-start gap-2">
            <div className="w-full py-2">
                <Selector<GoldItemTypes>
                    datas={datas}
                    keyIdStr="SELL-GOLD"
                    idKey="id"
                    valueKey="sampleId"
                    labelKey="name"
                    label="Выбери вид"
                    setDatas={setGoldSampleId as any}
                />
            </div>
            <SellGoldInfo goldSampleId={goldSampleId} setDatasId={setGoldPriceId} />
            <SellGoldResult goldPriceId={goldPriceId} goldSampleId={goldSampleId} />
        </div>
    )
}