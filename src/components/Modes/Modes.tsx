import { useQuery } from "@tanstack/react-query"
import { getModes } from "@/API/modes/modes.api"
import type { ModesID } from "@/entities/modes/types/modes.types"

interface IModes {
    setDataId: React.Dispatch<React.SetStateAction<ModesID>>
}

export default function Modes({ setDataId }: IModes) {
    const { data: modes = [], isLoading } = useQuery({
        queryKey: ["modes"],
        queryFn: getModes
    })

    if (isLoading) return <span className="loading loading-dots loading-md" />

    return (
        <div className="flex flex-row items-center justify-between w-full gap-2 pt-2">
            {modes.map(mode => (
                <button
                    type="button"
                    key={`MODES-${mode.id}`}
                    className="
                        w-1/2 px-4 py-2 
                        bg-[#DCDCDC] text-black text-base
                        cursor-pointer rounded-md
                        transition-colors duration-200 
                        hover:bg-black hover:text-white
                        focus:border-indigo-400 focus:ring-2
                        focus:ring-indigo-300 focus:outline-none
                    "
                    onClick={() => setDataId(mode.id)}
                >{mode.name}</button>
            ))}
        </div>
    )
}