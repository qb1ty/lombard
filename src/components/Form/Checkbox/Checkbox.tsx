interface ICheckbox {
    checked: boolean
    toggleChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Checkbox({ checked, toggleChecked }: ICheckbox) {
    return (
        <input
            type="checkbox"
            className="checkbox checkbox-xs bg-neutral-200 checked:text-black"
            checked={checked}
            onChange={event => toggleChecked(event.target.checked)}
        />
    )
}