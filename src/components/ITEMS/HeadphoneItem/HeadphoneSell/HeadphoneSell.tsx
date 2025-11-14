import type { HeadphoneTypes } from "@/entities/ITEMS/headphone-item/types/headphone-item.types";
import { Selector } from "@/components/Form";
import HeadphoneInfo from "../HeadphoneUniversal/HeadphoneInfo";


interface IHeadphoneSell {
    headphoneID: string
    datas: HeadphoneTypes[]
    setHeadphoneID: React.Dispatch<React.SetStateAction<string>>
}

export default function HeadphoneSell({ headphoneID, datas, setHeadphoneID }: IHeadphoneSell) {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full py-2">
                <Selector<HeadphoneTypes>
                    datas={datas}
                    keyIdStr="HEADPHONE-SELL"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setHeadphoneID}
                />
            </div>
            
            <HeadphoneInfo headphoneID={headphoneID} isSell />
        </div>
    )
}