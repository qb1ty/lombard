import { useEffect } from "react"
import { FLOAT_TO_PRECENT } from "@/entities/universal/constants/unversal.constants"
import { Checkbox } from "@/components/Form"
import { Title } from "@/components/Title"

interface ISection<T, K> {
    title: string
    isEnabled: boolean
    datas: K[]
    field: keyof K
    titleObj: Record<keyof T, string>
    checkedObj: Record<keyof T, boolean>
    setChecked: React.Dispatch<React.SetStateAction<Record<keyof T, boolean>>>
    setFixed: React.Dispatch<React.SetStateAction<number[]>>
    setPrecents: React.Dispatch<React.SetStateAction<number[]>>
    toggleChecked: <T extends object>(key: keyof T, setState: React.Dispatch<React.SetStateAction<Record<keyof T, boolean>>>) => void
}

export default function Section<T extends object, K extends object>({
    title,
    isEnabled,
    datas,
    field,
    titleObj,
    checkedObj,
    setChecked,
    setFixed,
    setPrecents,
    toggleChecked
}: ISection<T, K>) {
    useEffect(() => {
        const fixedToAdd: number[] = []
        const percentsToAdd: number[] = []
    
        datas.forEach(item => {
            const entries = Object.entries(item[field] as Record<keyof T, number>) as [keyof T, number][]
    
            for (const [key, value] of entries) {
                if (!checkedObj[key]) continue
                const numValue = +value
    
                if (numValue <= 0 || numValue >= 2) {
                    fixedToAdd.push(numValue)
                } else if (numValue > 0 && numValue < 2) {
                    percentsToAdd.push(numValue)
                }
            }
        })

        setFixed(fixedToAdd)
        setPrecents(percentsToAdd)
    }, [checkedObj, datas, field, setFixed, setPrecents])

    return (
        <div className="flex flex-col items-start w-full">
            {isEnabled && <Title className="font-medium text-black text-base pb-1" title={title} />}
            {datas.map(item => (
                Object.entries(item[field] as keyof K).map(([key, value]) => {
                    const keyTyped = key as keyof T
                    const title = titleObj[keyTyped]

                    const isBigNegative = value < -10000000000000
                    const isPrecent = value > 0 && value < 2

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