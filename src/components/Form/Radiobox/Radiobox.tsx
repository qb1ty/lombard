interface IRadiobox {
    name: string
    value: string
    checked: boolean
    handleChage: () => void
}

export default function Radiobox({ name, value, checked, handleChage }: IRadiobox) {
    return (
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChage}
            className="radio radio-xs bg-neutral-200 checked:text-black"
        />
    )
}