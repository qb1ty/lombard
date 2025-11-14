import { Title } from "@/components/Title";

interface INumberInput {
    title: string
    plus: string
    placeholder: string
    min: string
    max: string
    isEnabled: boolean
    value: number
    changeValue: React.Dispatch<React.SetStateAction<number>>
}

export default function NumberInput({ title, plus, placeholder, min, max, isEnabled, value, changeValue }: INumberInput) {
    if (!isEnabled) return <></>

    return (
        <div className="flex flex-col items-start w-full gap-2">
            <div className="flex flex-row justify-between items-center w-full">
                <Title className="font-medium text-black text-base" title={title} />
                <Title className="text-black text-md" title={plus} />
            </div>
            <input
                type="number"
                className="input input-neutral validator bg-neutral-200 text-black text-md w-full rounded-md"
                placeholder={placeholder}
                min={min}
                max={max}
                value={value}
                onChange={event => changeValue(+event.target.value)}
            />
        </div>
    )
}