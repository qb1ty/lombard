import type { TVTypes } from "@/entities/ITEMS/TV-item/types/TV-item.types"
import { Selector } from "@/components/Form"
import TVInfo from "../TVUniversal/TVInfo"

interface ITVInstallment {
    tvID: string
    datas: TVTypes[]
    setTvID: React.Dispatch<React.SetStateAction<string>>
}

export default function TVInstallment({ tvID, datas, setTvID }: ITVInstallment) {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full gap-2">
                <Selector<TVTypes>
                    datas={datas}
                    keyIdStr="TV-INSTALLMENT"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setTvID}
                />
            </div>

            <TVInfo tvID={tvID} />
        </div>
    )
}