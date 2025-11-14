import { useQuery } from "@tanstack/react-query"
import { getGoldItemResult } from "@/API/gold-item/gold-item.api"
import type { GoldPriceId, GoldSampleId } from "@/entities/ITEMS/gold-item/types/gold-item.types"
import { Title } from "@/components/Title"

interface IInstallmentGoldResult {
    goldPriceId: GoldPriceId
    goldSampleId: GoldSampleId
}

export default function InstallmentGoldResult({ goldPriceId, goldSampleId }: IInstallmentGoldResult) {
    const { data: goldResult = [], isLoading, isEnabled } = useQuery({
        queryKey: ["goldResult", goldPriceId, goldSampleId],
        queryFn: () => getGoldItemResult(goldPriceId),
        enabled: !!goldPriceId && !!goldSampleId
    })

    if (isLoading) return <span className="loading loading-dots loading-md" />

    return (
        <div className="w-full py-2">
            {isEnabled && <Title className="text-black text-base pb-1" title="Итого:" />}
            {goldResult.map((dto, index) => (
                <div key={`INSTALLMENT-GOLD-RESULT-${index}`} className="flex flex-row justify-start items-start gap-1">
                    <span className="font-medium text-black text-base bg-slate-200 rounded-md py-2 px-4">Цена: {dto.price}</span>
                    <span className="font-medium text-black text-base bg-slate-200 rounded-md py-2 px-4">Залог +{dto.plus_installment}.</span>
                    <span className="font-medium text-black text-base bg-slate-200 rounded-md py-2 px-4">Итого: {dto.price} + {dto.plus_installment} = {+dto.price + +dto.plus_installment}</span>
                </div>
            ))}
        </div>
    )
}