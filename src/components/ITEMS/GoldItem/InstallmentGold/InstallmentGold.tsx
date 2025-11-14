import type { GoldItemTypes, GoldPriceId, GoldSampleId } from "@/entities/ITEMS/gold-item/types/gold-item.types";
import { Selector } from "@/components/Form"
import InstallmentGoldInfo from "./InstallmentGoldInfo";
import InstallmentGoldResult from "./InstallmentGoldResult";

interface IInstallmentGold {
    datas: GoldItemTypes[]
    goldSampleId: GoldSampleId
    goldPriceId: GoldPriceId
    setGoldSampleId: React.Dispatch<React.SetStateAction<GoldSampleId>>
    setGoldPriceId: React.Dispatch<React.SetStateAction<GoldPriceId>>
}

export default function InstallmentGold({ datas, goldPriceId, goldSampleId, setGoldPriceId, setGoldSampleId }: IInstallmentGold) {
    return (
        <div className="flex flex-col items-start gap-2">
            <div className="w-full py-2">
                <Selector<GoldItemTypes>
                    datas={datas}
                    keyIdStr="INSTALLMENT-GOLD"
                    idKey="id"
                    valueKey="sampleId"
                    labelKey="name"
                    label="Выбери вид"
                    setDatas={setGoldSampleId as any}
                />
            </div>
            <InstallmentGoldInfo goldSampleId={goldSampleId} setDatasId={setGoldPriceId} />
            <InstallmentGoldResult goldPriceId={goldPriceId} goldSampleId={goldSampleId} />
        </div>
    )
}