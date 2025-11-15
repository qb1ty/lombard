import type { WatchTypes } from "@/entities/ITEMS/watch-item/types/watch-item.types"
import { Selector } from "@/components/Form"
import WatchInfo from "../WatchUniversal/WatchInfo"

interface IWatchSell {
    watchID: string,
    datas: WatchTypes[],
    setWatchID: React.Dispatch<React.SetStateAction<string>>
}

export default function WatchSell({ watchID, datas, setWatchID }: IWatchSell) {
    return (
         <div className="flex flex-col gap-2">
            <div className="w-full py-2">
                <Selector<WatchTypes>
                    datas={datas}
                    keyIdStr="HEADPHONE-SELL"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setWatchID}
                />
            </div>

            <WatchInfo watchID={watchID} isSell />
        </div>
    )
}