import { useEffect } from "react"
import { FLOAT_TO_PRECENT } from "@/entities/universal/constants/unversal.constants"
import { Checkbox } from "@/components/Form"
import { Title } from "@/components/Title"

interface ISection<T, K> {
    title: string
    isEnabled: boolean
    datas: K[]
    field: keyof K
    priceKey: keyof K
    titleObj: Record<keyof T, string>
    checkedObj: Record<keyof T, boolean>
    setChecked: React.Dispatch<React.SetStateAction<Record<keyof T, boolean>>>
    setTotal: React.Dispatch<React.SetStateAction<number>>
    toggleChecked: <T extends object>(key: keyof T, setState: React.Dispatch<React.SetStateAction<Record<keyof T, boolean>>>) => void
}

export default function Section<T extends object, K extends object>({ title, isEnabled, datas, field, priceKey, titleObj, checkedObj, setChecked, setTotal, toggleChecked }: ISection<T, K>) {
    const total = datas.reduce((acc, item) => {
        const entries = Object.entries(item[field] as Record<keyof T, number>) as [keyof T, number][]
        let sectionSum = 0

        for (const [key, value] of entries) {
            if (!checkedObj[key]) continue

            const basePrice = +item[priceKey]

            if (value > 0 && value < 2) {
                sectionSum += -basePrice * value
            } else if (value >= 2 || value <= -1) {
                sectionSum += value
            }
        }

        return acc + sectionSum
    }, 0)

    useEffect(() => {
        setTotal(total)
    }, [total])

    return (
        <div className="flex flex-col items-start w-full">
            {isEnabled && <Title className="font-medium text-black text-base pb-1" title={title} />}
            {datas.map(item => (
                Object.entries(item[field] as keyof K).map(([key, value]) => {
                    const keyTyped = key as keyof T
                    const title = titleObj[keyTyped]

                    const isBigNegative = value < -10000000000000
                    const isPrecent = value > 0 && value < 1

                    return (
                        <div key={`PLAYSTATION-SECTION-${key}`} className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row items-center gap-2">
                                <p className="text-black text-md">{title}</p>
                                <Checkbox checked={checkedObj[keyTyped]} toggleChecked={() => toggleChecked<T>(keyTyped, setChecked)} />
                            </div>
                            <p className="text-black text-md">{isBigNegative ? "Не принимаем" : isPrecent ? FLOAT_TO_PRECENT[value] : value}</p>
                        </div>
                    )
                })
            ))}
        </div>
    )
}