export const toggleChecked = <T extends object>(
        key: keyof T,
        setState: React.Dispatch<React.SetStateAction<Record<keyof T, boolean>>>
    ) => {
        setState(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }
