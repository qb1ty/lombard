interface ISelector<T> {
    datas: T[]
    keyIdStr: string
    idKey: keyof T
    valueKey: keyof T
    labelKey: keyof T
    label: string
    setDatas: React.Dispatch<React.SetStateAction<string>>
}

export default function Selector<T>({ datas, keyIdStr, idKey, valueKey, labelKey, label, setDatas }: ISelector<T>) {
    return (
        <select defaultValue={label} className="select select-neutral bg-white text-black cursor-pointer w-full" onChange={event => setDatas(event.target.value)}>
            <option disabled={true}>{label}</option>
            {datas.map((data, index) => (
                <option key={`${keyIdStr}-${String(data[idKey]) || index}`} value={String(data[valueKey])} className="transition-colors cursor-pointer duration-200 hover:bg-gray-300">{String(data[labelKey])}</option>
            ))}
        </select>
    )
}