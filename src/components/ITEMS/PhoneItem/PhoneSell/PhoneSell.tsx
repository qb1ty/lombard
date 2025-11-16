import type { PhoneTypes } from "@/entities/ITEMS/phone-item/types/phone-item.types";
import { Selector } from "@/components/Form";
import PhoneInfo from "../PhoneUniversal/PhoneInfo";

interface IPhoneSell {
    phoneID: string
    datas: PhoneTypes[]
    setPhoneID: React.Dispatch<React.SetStateAction<string>>
}

export default function PhoneSell({ phoneID, datas, setPhoneID }: IPhoneSell) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="w-full gap-2">
                <Selector<PhoneTypes>
                    datas={datas}
                    keyIdStr="PHONE-SELL"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setPhoneID}
                />
            </div>

            <PhoneInfo phoneID={phoneID} isSell />
        </div>
    )
}