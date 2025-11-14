import type { PlayStationTypes } from "@/entities/ITEMS/playstation-item/types/playstation-item.types"
import { Selector } from "@/components/Form"
import PlayStationInfo from "../PlayStationUniversal/PlayStationInfo"

interface IPlayStationSell {
    playStationID: string
    datas: PlayStationTypes[]
    setPlayStationID: React.Dispatch<React.SetStateAction<string>>
}

export default function PlayStationSell({ playStationID, datas, setPlayStationID }: IPlayStationSell) {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full py-2">
                <Selector<PlayStationTypes>
                    datas={datas}
                    keyIdStr="PLAYSTATION-SELL"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setPlayStationID}
                />
            </div>
            
            <PlayStationInfo playStationID={playStationID} isSell />
        </div>
    )
}