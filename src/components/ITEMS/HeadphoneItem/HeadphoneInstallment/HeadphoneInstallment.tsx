import type { HeadphoneTypes } from "@/entities/ITEMS/headphone-item/types/headphone-item.types"
import { Selector } from "@/components/Form"
import HeadphoneInfo from "../HeadphoneUniversal/HeadphoneInfo"

interface IHeadphoneInstallment {
    headphoneID: string
    datas: HeadphoneTypes[]
    setHeadphoneID: React.Dispatch<React.SetStateAction<string>>
}

export default function HeadphoneInstallment({ headphoneID, datas, setHeadphoneID }: IHeadphoneInstallment) {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full gap-2">
                <Selector<HeadphoneTypes>
                    datas={datas}
                    keyIdStr="HEADPHONE-INSTALLMENT"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setHeadphoneID}
                />
            </div>

            <HeadphoneInfo headphoneID={headphoneID} />
        </div>
    )
}