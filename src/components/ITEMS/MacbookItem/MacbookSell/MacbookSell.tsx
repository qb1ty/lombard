import type { MacbookTypes } from "@/entities/ITEMS/macbook-item/types/macbook-item.types";
import { Selector } from "@/components/Form";
import MacbookInfo from "../MacbookUniversal/MacbookInfo";

interface IMacbookSell {
    macbookID: string
    datas: MacbookTypes[]
    setMacbookID: React.Dispatch<React.SetStateAction<string>>
}

export default function MacbookSell({ macbookID, datas, setMacbookID }: IMacbookSell) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="w-full gap-2">
                <Selector<MacbookTypes>
                    datas={datas}
                    keyIdStr="MACBOOK-SELL"
                    idKey="id"
                    valueKey="id"
                    labelKey="name"
                    label="Выберите модель"
                    setDatas={setMacbookID}
                />
            </div>

            <MacbookInfo macbookID={macbookID} isSell />
        </div>
    )
}