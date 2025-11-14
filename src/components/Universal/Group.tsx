import { useState } from "react";
import { FLOAT_TO_PRECENT } from "@/entities/universal/constants/unversal.constants";
import { Radiobox } from "@/components/Form/Radiobox/";
import { Title } from "@/components/Title/";

interface IGroup<T> {
    datas: T[]
    sectionKey: keyof T
    idKey: keyof T
    title: string
    keyRadioValue: string,
    onChange?: (selected: string) => void
}

export default function Group<T extends {}>({ datas, sectionKey, title, keyRadioValue, onChange }: IGroup<T>) {
    const [selected, setSelected] = useState<Record<keyof T, string>>({} as Record<keyof T, string>)
    
    const handleRadioChange = (value: string, discount: string) => {
        setSelected(prev => {
            const newSelected = { ...prev }
            newSelected[sectionKey] = value

            onChange?.(discount)

            return newSelected
        })
    }

    if (datas.length === 0) return null
    const item = datas[0]

    const options = item[sectionKey] as Record<string, number | string>

    if (!options || typeof options !== "object") return null

    return (
        <div className="py-2 w-full">
            <div className="flex flex-col items-start gap-2 w-full">
                <Title className="font-medium text-black text-base" title={title} />

                <div className="space-y-2 w-full">
                    {Object.entries(options).map(([key, discount]) => {
                        const discountStr = String(discount)
                        const color = +discount >= 1 ? "text-green-600" : "text-red-600"

                        return (
                            <div className="flex flex-row justify-between items-center gap-2 cursor-pointer w-full">
                                <div className="flex flex-row items-center gap-2">
                                    <Title className="text-sm text-black" title={key} />
                                    <Radiobox
                                        key={`${keyRadioValue}-${key}`}
                                        name={sectionKey as string}
                                        value={key}
                                        checked={selected[sectionKey] === key}
                                        handleChage={() => handleRadioChange(key, discountStr)}
                                    />
                                </div>
                                {discount && <span className={`${color} font-semibold`}>{FLOAT_TO_PRECENT[discountStr]}</span>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}