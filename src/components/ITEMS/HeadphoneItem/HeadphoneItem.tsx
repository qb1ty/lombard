import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getHeadphoneItems } from "@/API/headphone-item/headphone-item.api"
import type { SubNames } from "@/entities/subcategories/types/subcategories.types"
import type { ModesID } from "@/entities/modes/types/modes.types"
import HeadphoneInstallment from "./HeadphoneInstallment/HeadphoneInstallment"
import HeadphoneSell from "./HeadphoneSell/HeadphoneSell"

interface IHeadphoneItem {
    subName: SubNames
    modesID: ModesID
}

export default function HeadphoneItem({ subName, modesID }: IHeadphoneItem) {
    const [headphoneID, setHeadphoneID] = useState<string>("")
    const { data: headphoneItems = [] } = useQuery({
        queryKey: ["headphoneItems", subName],
        queryFn: () => getHeadphoneItems(subName),
        enabled: !!subName
    })

    useEffect(() => {
        setHeadphoneID("")
    }, [modesID, subName])

    return (
        <div className="relative w-full py-2">
            { modesID === "installment" && <HeadphoneInstallment
                headphoneID={headphoneID}
                datas={headphoneItems}
                setHeadphoneID={setHeadphoneID}
            /> }
            { modesID === "sell" && <HeadphoneSell
                headphoneID={headphoneID}
                datas={headphoneItems}
                setHeadphoneID={setHeadphoneID}
            /> }
        </div>
    )
}