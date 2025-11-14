import type { WatchTypes } from "@/entities/ITEMS/watch-item/types/watch-item.types"
import { Selector } from "@/components/Form"
import WatchInfo from "../WatchUniversal/WatchInfo"

interface IWatchInstallment {
    watchID: string,
    datas: WatchTypes[],
    setWatchID: React.Dispatch<React.SetStateAction<string>>
}

export default function WatchInstallment({ watchID, datas, setWatchID }: IWatchInstallment) {
    console.log(watchID)

    return (
        <div className="flex flex-col gap-2">
            <div className="w-full py-2">
                <Selector<WatchTypes>
                    datas={datas}
                    keyIdStr="WATCH-INSTALLMENT"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setWatchID}
                />
            </div>

            <WatchInfo watchID={watchID} />
        </div>
    )
}