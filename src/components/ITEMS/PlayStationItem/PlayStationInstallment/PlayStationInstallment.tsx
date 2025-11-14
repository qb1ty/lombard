import type { PlayStationTypes } from "@/entities/ITEMS/playstation-item/types/playstation-item.types"
import { Selector } from "@/components/Form"
import PlayStationInfo from "../PlayStationUniversal/PlayStationInfo"

interface IPlayStationInstallment {
    playStationID: string
    datas: PlayStationTypes[]
    setPlayStationID: React.Dispatch<React.SetStateAction<string>>
}

export default function PlayStationInstallment({ playStationID, datas, setPlayStationID }: IPlayStationInstallment) {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full py-2">
                <Selector<PlayStationTypes>
                    datas={datas}
                    keyIdStr="PLAYSTATION-INSTALLMENT"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setPlayStationID}
                />
            </div>
            
            <PlayStationInfo playStationID={playStationID} />
        </div>
    )
}