import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPhoneItems } from "@/API/phone-item/phone-item.api";
import type { ModesID } from "@/entities/modes/types/modes.types";
import type { SubNames } from "@/entities/subcategories/types/subcategories.types";
import PhoneInstallment from "./PhoneInstallment/PhoneInstallment";
import PhoneSell from "./PhoneSell/PhoneSell";

interface IPhoneItem {
    subName: SubNames
    modesID: ModesID
}

export default function PhoneItem({ subName, modesID }: IPhoneItem) {
    const [phoneID, setPhoneID] = useState<string>("")
    const { data: phoneItems = [] } = useQuery({ queryKey: ["getPhoneItems", subName], queryFn: () => getPhoneItems(subName), enabled: !!subName })

    useEffect(() => {
        setPhoneID("")
    }, [subName, modesID])

    return (
        <div className="relative w-full py-2">
            { modesID === "installment" && <PhoneInstallment
                phoneID={phoneID}
                datas={phoneItems}
                setPhoneID={setPhoneID}
            /> }
            { modesID === "sell" && <PhoneSell
                phoneID={phoneID}
                datas={phoneItems}
                setPhoneID={setPhoneID}
            /> }
        </div>
    )
}